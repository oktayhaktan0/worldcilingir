import { MetadataRoute } from 'next';
import { districts } from '@/data/districts';
import { siteConfig } from '@/config/site';
import { getAllPosts } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = siteConfig.url;

    const staticPages = [
        '',
        '/hakkimizda',
        '/iletisim',
        '/bolgeler',
        '/blog',
        '/hizmetler/oto-cilingir',
        '/hizmetler/kasa-cilingir',
        '/hizmetler/kilit-degisimi',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const districtPages = districts.map((district) => ({
        url: `${baseUrl}/izmir/${district.slug}/cilingir`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    const posts = await getAllPosts();
    const blogPages = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.frontmatter.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...districtPages, ...blogPages];
}
