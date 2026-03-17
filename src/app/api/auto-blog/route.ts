import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

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

async function downloadUnsplashImage(keyword: string, slug: string) {
    try {
        const query = encodeURIComponent(`${keyword} locksmith security`);
        
        const dynamicUrl = `https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1200&auto=format&fit=crop`;
        
        const response = await fetch(dynamicUrl);
        const buffer = await response.buffer();
        
        const publicDir = path.join(process.cwd(), 'public/blog');
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true });
        }
        
        const fileName = `${slug}.jpg`;
        const filePath = path.join(publicDir, fileName);
        fs.writeFileSync(filePath, buffer);
        
        return `/blog/${fileName}`;
    } catch (error) {
        console.error("Image download error:", error);
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
        const date = new Date().toISOString().split('T')[0];

        const imagePath = await downloadUnsplashImage(imageKeyword || 'locksmith', slug);

        const fileContent = `---
title: "${title}"
excerpt: "${excerpt}"
date: "${date}"
author: "World Çilingir"
${imagePath ? `image: "${imagePath}"` : ''}
---

${content}`;

        const contentDirectory = path.join(process.cwd(), 'src/content/blog');
        if (!fs.existsSync(contentDirectory)) {
            fs.mkdirSync(contentDirectory, { recursive: true });
        }

        const filePath = path.join(contentDirectory, `${slug}.mdx`);
        fs.writeFileSync(filePath, fileContent, 'utf8');

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
