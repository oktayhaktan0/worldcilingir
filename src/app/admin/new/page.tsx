'use client';

import { createPost } from '@/actions/blog';
import { uploadImage } from '@/actions/upload';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
import { useState, useMemo } from 'react';
import 'easymde/dist/easymde.min.css';

const SimpleMde = dynamic(() => import('react-simplemde-editor'), { ssr: false });

function SubmitButton() {
    return (
        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
            Yazıyı Yayınla 🚀
        </button>
    );
}

export default function NewPostPage() {
    const [content, setContent] = useState('');

    const mdeOptions = useMemo(() => {
        return {
            spellChecker: false,
            placeholder: 'Yazınızı buraya yazın...',
            uploadImage: true,
            imageUploadFunction: async (file: File, onSuccess: (url: string) => void, onError: (error: string) => void) => {
                const formData = new FormData();
                formData.append('image', file);

                try {
                    const url = await uploadImage(formData);
                    onSuccess(url);
                } catch (error) {
                    onError('Görsel yüklenemedi.');
                }
            },
        };
    }, []);

    const onChange = (value: string) => {
        setContent(value);
    };

    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-secondary)', paddingTop: '100px' }}>
            <Header />
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Yeni Yazı Ekle (Gelişmiş Editör)</h1>

                <form action={createPost} className="clean-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Başlık</label>
                        <input
                            name="title"
                            required
                            type="text"
                            placeholder="Örn: Kapı Kilidi Nasıl Değiştirilir?"
                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-tertiary)' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Özet</label>
                        <textarea
                            name="excerpt"
                            required
                            rows={3}
                            placeholder="Yazının kısa bir özeti..."
                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-tertiary)' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Yazar</label>
                        <input
                            name="author"
                            type="text"
                            defaultValue="World Çilingir"
                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-tertiary)' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>İçerik</label>
                        <input type="hidden" name="content" value={content} />
                        <div style={{ border: '1px solid var(--bg-tertiary)', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: '#fff' }}>
                            <SimpleMde
                                value={content}
                                onChange={onChange}
                                options={mdeOptions}
                            />
                        </div>
                    </div>

                    <SubmitButton />
                </form>
            </div>
        </main>
    );
}
