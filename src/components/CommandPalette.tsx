'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const STATIC_PAGES = [
    { title: 'Anasayfa', href: '/' },
    { title: 'Hakkımızda', href: '/hakkimizda' },
    { title: 'İletişim', href: '/iletisim' },
    { title: 'Bölgeler', href: '/bolgeler' },
    { title: 'Blog', href: '/blog' },
    { title: 'Oto Çilingir', href: '/hizmetler/oto-cilingir' },
    { title: 'Kasa Çilingir', href: '/hizmetler/kasa-cilingir' },
    { title: 'Kilit Değişimi', href: '/hizmetler/kilit-degisimi' },
];

export default function CommandPalette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [query, setQuery] = useState('');
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!isOpen) return null;

    const filteredPages = STATIC_PAGES.filter(page =>
        page.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            paddingTop: '10vh'
        }} onClick={onClose}>
            <div
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    background: '#fff',
                    borderRadius: '12px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                onClick={e => e.stopPropagation()}
            >
                <div style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>🔍</span>
                    <input
                        autoFocus
                        type="text"
                        placeholder="Sayfa veya hizmet ara..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        style={{
                            width: '100%',
                            border: 'none',
                            outline: 'none',
                            fontSize: '1.1rem',
                            color: '#1e293b'
                        }}
                    />
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', color: '#94a3b8' }}>&times;</button>
                </div>

                <div style={{ maxHeight: '400px', overflowY: 'auto', padding: '0.5rem' }}>
                    {filteredPages.length === 0 ? (
                        <div style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8' }}>
                            Sonuç bulunamadı.
                        </div>
                    ) : (
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {filteredPages.map(page => (
                                <li key={page.href}>
                                    <Link
                                        href={page.href}
                                        onClick={onClose}
                                        style={{
                                            display: 'block',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '8px',
                                            color: '#1e293b',
                                            textDecoration: 'none',
                                            transition: 'background 0.2s'
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.background = '#f1f5f9'}
                                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                    >
                                        {page.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div style={{ padding: '0.75rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', fontSize: '0.8rem', color: '#64748b', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Örn: "Oto Çilingir", "Blog"</span>
                    <span>ESC ile kapat</span>
                </div>
            </div>
        </div>
    );
}
