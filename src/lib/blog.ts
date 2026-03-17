import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sql } from '@vercel/postgres';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export type Post = {
    slug: string;
    frontmatter: {
        title: string;
        date: string;
        excerpt: string;
        author?: string;
        image?: string;
        [key: string]: any;
    };
    content: string;
};

export function getPostSlugs() {
    if (!fs.existsSync(contentDirectory)) return [];
    return fs.readdirSync(contentDirectory);
}

export function getPostBySlug(slug: string): Post {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        frontmatter: data as Post['frontmatter'],
        content,
    };
}

export async function getAllPosts(): Promise<Post[]> {
    const fsPosts: Post[] = [];
    try {
        const slugs = getPostSlugs();
        slugs.filter(slug => slug.endsWith('.mdx')).forEach(slug => {
            fsPosts.push(getPostBySlug(slug));
        });
    } catch (e) {
        console.error("FS Error:", e);
    }

    const dbPosts: Post[] = [];
    try {
        const { rows } = await sql`SELECT * FROM blog_posts ORDER BY date DESC`;
        rows.forEach(row => {
            dbPosts.push({
                slug: row.slug,
                frontmatter: {
                    title: row.title,
                    date: row.date ? new Date(row.date).toISOString().split('T')[0] : '',
                    excerpt: row.excerpt,
                    author: row.author,
                    image: row.image_url
                },
                content: row.content
            });
        });
    } catch (e) {
        console.error("DB Error:", e);
    }

    const allPosts = [...fsPosts, ...dbPosts].sort((p1, p2) => (p1.frontmatter.date > p2.frontmatter.date ? -1 : 1));
    return allPosts;
}

export async function getPostBySlugAnywhere(slug: string): Promise<Post | null> {
    try {
        return getPostBySlug(slug);
    } catch (e) {
        try {
            const { rows } = await sql`SELECT * FROM blog_posts WHERE slug = ${slug} LIMIT 1`;
            if (rows.length > 0) {
                const row = rows[0];
                return {
                    slug: row.slug,
                    frontmatter: {
                        title: row.title,
                        date: row.date ? new Date(row.date).toISOString().split('T')[0] : '',
                        excerpt: row.excerpt,
                        author: row.author,
                        image: row.image_url
                    },
                    content: row.content
                };
            }
        } catch (dbErr) {
            console.error("DB Error:", dbErr);
        }
    }
    return null;
}
