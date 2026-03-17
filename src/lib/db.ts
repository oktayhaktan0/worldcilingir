import { sql } from '@vercel/postgres';

export async function initTable() {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS blog_posts (
                id SERIAL PRIMARY KEY,
                slug VARCHAR(255) UNIQUE NOT NULL,
                title VARCHAR(255) NOT NULL,
                excerpt TEXT,
                content TEXT NOT NULL,
                author VARCHAR(100),
                image_url TEXT,
                date DATE DEFAULT CURRENT_DATE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        console.log('✅ Blog posts table initialized');
    } catch (error) {
        console.error('❌ Error initializing table:', error);
    }
}
