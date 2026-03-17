import { MetadataRoute } from 'next';
import { districts } from '@/data/districts';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
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

    const blogPosts = [
        'kapi-kilidi-nasil-degistirilir',
        'hirsiga-karsi-onlemler',
        'oto-cilingir-cagirirken-dikkat',
    ].map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...districtPages, ...blogPosts];
}
