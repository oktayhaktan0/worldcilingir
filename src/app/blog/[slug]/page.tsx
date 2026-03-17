import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Header from '@/components/Header';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ''),
    }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    try {
        const post = getPostBySlug(slug);
        return {
            title: `${post.frontmatter.title} - World Çilingir Blog`,
            description: post.frontmatter.excerpt,
            alternates: {
                canonical: `${siteConfig.url}/blog/${slug}`,
            },
            openGraph: {
                title: post.frontmatter.title,
                description: post.frontmatter.excerpt,
                type: 'article',
                publishedTime: post.frontmatter.date,
                authors: [post.frontmatter.author || 'World Çilingir'],
            },
        };
    } catch (e) {
        return {
            title: 'Blog Yazısı Bulunamadı',
        };
    }
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    let post;
    try {
        post = getPostBySlug(slug);
    } catch (e) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': post.frontmatter.title,
        'description': post.frontmatter.excerpt,
        'datePublished': post.frontmatter.date,
        'author': {
            '@type': 'Organization',
            'name': post.frontmatter.author || 'World Çilingir'
        },
        'publisher': {
            '@type': 'Organization',
            'name': siteConfig.name,
            'logo': {
                '@type': 'ImageObject',
                'url': `${siteConfig.url}/logo.png`
            }
        },
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': `${siteConfig.url}/blog/${slug}`
        }
    };

    return (
        <main style={{ minHeight: '100vh', background: '#fff' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />

            <article className="container" style={{ padding: '8rem 1.5rem 4rem 1.5rem', maxWidth: '800px' }}>
                <Link href="/blog" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--accent-blue)', fontWeight: '600' }}>
                    ← Blog'a Dön
                </Link>

                <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <div style={{ color: 'var(--text-muted)', fontWeight: 'bold', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        {post.frontmatter.date} • {post.frontmatter.author}
                    </div>
                    <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                        {post.frontmatter.title}
                    </h1>
                    {post.frontmatter.image && (
                        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', marginBottom: '2rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                            <img 
                                src={post.frontmatter.image} 
                                alt={post.frontmatter.title} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    )}
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        {post.frontmatter.excerpt}
                    </p>
                </header>

                <div className="prose" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                    <MDXRemote source={post.content} />
                </div>

                <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--bg-tertiary)' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Sizin İçin Seçtiklerimiz</h3>
                    <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                        <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Acil Çilingir Lazım mı?</p>
                        <p style={{ marginBottom: '1.5rem' }}>İzmir'in her yerine 15 dakikada ulaşıyoruz.</p>
                        <a href={`tel:${siteConfig.phones.primaryLink}`} className="btn btn-primary btn-pulse">
                            📞 Hemen Ara
                        </a>
                    </div>
                </div>
            </article>
        </main>
    );
}
