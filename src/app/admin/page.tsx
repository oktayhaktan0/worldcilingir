import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import Header from '@/components/Header';
import AutoBlogButton from './AutoBlogButton';

export default async function AdminDashboard() {
    const posts = await getAllPosts();

    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-secondary)', paddingTop: '100px' }}>
            <Header />
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <h1 style={{ fontSize: '2rem' }}>Blog Yönetim Paneli</h1>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <AutoBlogButton />
                        <Link href="/admin/new" className="btn btn-primary">
                            + Yeni Yazı Ekle
                        </Link>
                    </div>
                </div>

                <div className="clean-card" style={{ padding: '2rem' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--bg-tertiary)', paddingBottom: '0.5rem' }}>
                        Mevcut Yazılar ({posts.length})
                    </h2>

                    {posts.length === 0 ? (
                        <p style={{ color: 'var(--text-secondary)' }}>Henüz hiç yazı eklenmemiş.</p>
                    ) : (
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {posts.map(post => (
                                <li key={post.slug} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid var(--bg-secondary)' }}>
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>{post.frontmatter.title}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{post.frontmatter.date}</div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <Link href={`/blog/${post.slug}`} className="btn btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.8rem' }}>
                                            Görüntüle
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </main>
    );
}
