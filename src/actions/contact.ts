'use server';

export async function submitContactForm(prevState: any, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    if (!name || !phone) {
        return { success: false, message: 'Lütfen adınızı ve telefon numaranızı giriniz.' };
    }

    return { success: true, message: 'Mesajınız başarıyla iletildi! En kısa sürede dönüş yapacağız.' };
}
