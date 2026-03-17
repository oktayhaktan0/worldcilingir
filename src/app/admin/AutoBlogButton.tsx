'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AutoBlogButton() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleAutoGenerate = async () => {
        if (!confirm("Yapay Zeka (Gemini API) ile otomatik SEO uyumlu çilingir blogu oluşturulsun mu? Not: GEMINI_API_KEY ortam değişkeniniz (environment variable) ayarlanmış olmalı.")) return;
        setLoading(true);
        try {
            const res = await fetch('/api/auto-blog', { method: 'POST' });
            const data = await res.json();
            if (data.success) {
                alert("Yazı başarıyla oluşturuldu: " + data.slug);
                router.refresh();
            } else {
                alert("Hata: " + data.error);
            }
        } catch (e) {
            alert("Oluşturma sırasında bir sistem hatası oluştu.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button 
            onClick={handleAutoGenerate} 
            disabled={loading} 
            className="btn"
            style={{ 
                marginRight: '1rem', 
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
                color: '#fff',
                opacity: loading ? 0.7 : 1
            }}
        >
            {loading ? "⏳ Oluşturuluyor..." : "🤖 AI Otomatik Blog Yaz"}
        </button>
    );
}
