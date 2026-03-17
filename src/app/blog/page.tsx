import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import Header from '@/components/Header';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: 'Blog - World Çilingir | Çilingir ve Kilit İpuçları',
    description: 'İzmir çilingir hizmetleri, kilit değiştirme rehberleri ve güvenlik ipuçları hakkında en güncel yazılarımızı okuyun.',
    alternates: {
        canonical: `${siteConfig.url}/blog`,
    },
};

export const revalidate = 0;

export default async function BlogIndex() {
    const posts = await getAllPosts();

    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-secondary)' }}>
            <Header />


            <section style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'var(--bg-primary)', borderBottom: '1px solid var(--bg-tertiary)', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Blog ve Güvenlik İpuçları</h1>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Evinizin ve aracınızın güvenliği hakkında bilmeniz gereken her şey. Profesyonel çilingirlerimizden tavsiyeler.
                    </p>
                </div>
            </section>


            <section style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                        {posts.map((post) => (
                            <article key={post.slug} className="clean-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
                                {post.frontmatter.image && (
                                    <Link href={`/blog/${post.slug}`} className="card-img-container">
                                        <img
                                            src={post.frontmatter.image}
                                            alt={post.frontmatter.title}
                                            className="card-img"
                                        />
                                    </Link>
                                )}
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                        {post.frontmatter.date}
                                    </div>
                                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.3' }}>
                                        <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>
                                            {post.frontmatter.title}
                                        </Link>
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                                        {post.frontmatter.excerpt}
                                    </p>
                                    <Link href={`/blog/${post.slug}`} className="btn btn-secondary" style={{ alignSelf: 'start' }}>
                                        Devamını Oku →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {posts.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '4rem' }}>
                            <h3>Henüz yazı eklenmedi.</h3>
                            <p>Yakında burası dopdolu olacak!</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
