'use server';

import fs from 'fs';
import path from 'path';

export async function uploadImage(formData: FormData) {
    const file = formData.get('image') as File;

    if (!file) {
        throw new Error('No file uploaded');
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '')}`;
    const uploadDir = path.join(process.cwd(), 'public/uploads');

    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, filename);
    fs.writeFileSync(filePath, buffer);

    return `/uploads/${filename}`;
}
