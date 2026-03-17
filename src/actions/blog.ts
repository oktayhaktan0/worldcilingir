'use server';

import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

function slugify(text: string) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

export async function createPost(formData: FormData) {
    const title = formData.get('title') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const author = formData.get('author') as string || 'World Çilingir';

    const slug = slugify(title);
    const date = new Date().toISOString().split('T')[0];

    const fileContent = `---
title: "${title}"
excerpt: "${excerpt}"
date: "${date}"
author: "${author}"
---

${content}`;

    if (!fs.existsSync(contentDirectory)) {
        fs.mkdirSync(contentDirectory, { recursive: true });
    }

    const filePath = path.join(contentDirectory, `${slug}.mdx`);
    fs.writeFileSync(filePath, fileContent, 'utf8');

    revalidatePath('/blog');

    redirect('/blog');
}
