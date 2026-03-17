import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import path from 'path';
import fetch from 'node-fetch';
import { sql } from '@vercel/postgres';
import { initTable } from '@/lib/db';

function slugify(text: string) {
    const trMap: { [key: string]: string } = {
        'ç': 'c', 'Ç': 'c', 'ğ': 'g', 'Ğ': 'g', 'ş': 's', 'Ş': 's',
        'ü': 'u', 'Ü': 'u', 'ı': 'i', 'İ': 'i', 'ö': 'o', 'Ö': 'o'
    };

    let result = text.toString().toLowerCase();

    Object.keys(trMap).forEach(key => {
        result = result.replace(new RegExp(key, 'g'), trMap[key]);
    });

    return result
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

async function getUnsplashImageUrl(keyword: string) {
    try {
        const query = encodeURIComponent(`${keyword} locksmith security`);
        return `https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1200&auto=format&fit=crop`;
    } catch (error) {
        console.error("Image URL error:", error);
        return null;
    }
}

async function handleBlogGeneration() {
    try {
        const apiKey = process.env.GEMINI_API_KEY || '';
        if (!apiKey) {
            throw new Error('GEMINI_API_KEY environment variable is missing.');
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const topics = [
            "İzmir acil çilingir hizmetinin önemi",
            "Güvenli kapı kilidi nasıl seçilir?",
            "Oto çilingir çağırırken nelere dikkat edilmeli?",
            "Çelik kasa şifresi unutulduğunda ne yapılmalı?",
            "Yeni eve taşınırken kilit değiştirmek neden önemlidir?",
            "Akıllı kilit sistemleri ve avantajları",
            "Hırsızlara karşı alınabilecek pratik kilit önlemleri",
            "Kapı kilidi arızaları ve çözüm yolları",
            "Oto anahtar kopyalama işleminin detayları",
            "İzmir 7/24 çilingir telefonu: World Çilingir"
        ];

        const randomTopic = topics[Math.floor(Math.random() * topics.length)];

        const prompt = `Lütfen "${randomTopic}" konusunda SEO uyumlu, İzmir merkezli "World Çilingir" markası için bilgilendirici bir blog yazısı oluştur.
        
Senden istediğim YALNIZCA geçerli bir JSON formatında dönmen:
{
  "title": "SEO uyumlu çarpıcı bir başlık",
  "excerpt": "Yazının kısa 1-2 cümlelik özeti",
  "imageKeyword": "İngilizce olarak görsel araması için 1-2 kelimelik anahtar kelime (örn: 'door lock', 'car key')",
  "content": "Blog yazısının Markdown (#, ##, ** vs) formatında uzun, detaylı içeriği."
}
Cevabını Markdown kod bloğu (\\\`\\\`\\\`json) İÇİNDE YAZMA, SADECE JSON FORMATIYLA DÖN.`;

        const result = await model.generateContent(prompt);
        let responseText = result.response.text();

        responseText = responseText.replace(/^```json/i, '').replace(/^```/, '').replace(/```$/, '').trim();

        let data;
        try {
            data = JSON.parse(responseText);
        } catch (e) {
            console.error("JSON parse error:", responseText);
            throw new Error("AI returned invalid JSON.");
        }

        const { title, excerpt, content, imageKeyword } = data;
        const slug = slugify(title);

        // Use remote image URL instead of local path
        const imageUrl = await getUnsplashImageUrl(imageKeyword || 'locksmith');

        // Ensure table exists
        await initTable();

        // Save to Database
        await sql`
            INSERT INTO blog_posts (slug, title, excerpt, content, author, image_url)
            VALUES (${slug}, ${title}, ${excerpt}, ${content}, 'World Çilingir', ${imageUrl})
            ON CONFLICT (slug) DO UPDATE SET
                title = ${title},
                excerpt = ${excerpt},
                content = ${content},
                image_url = ${imageUrl}
        `;

        return { success: true, slug };
    } catch (error) {
        throw error;
    }
}

export async function GET() {
    try {
        const result = await handleBlogGeneration();
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
}

export async function POST() {
    try {
        const result = await handleBlogGeneration();
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
}
