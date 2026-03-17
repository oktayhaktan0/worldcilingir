'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';

type FAQItem = {
    question: string;
    answer: string;
};

const faqs: FAQItem[] = [
    {
        question: 'Ne kadar sürede adrese ulaşıyorsunuz?',
        answer: 'İzmir genelinde motorlu ekiplerimiz ile ortalama 15-20 dakika içinde adresinizde oluyoruz. Trafik yoğunluğuna göre bu süre değişebilir ancak acil durumlara öncelik veriyoruz.',
    },
    {
        question: 'Kapı açılırken kilidim zarar görür mü?',
        answer: 'Hayır, %99 oranında hasarsız kapı açma garantisi veriyoruz. Özel maymuncuk sistemlerimiz ile kapınıza ve kilidinize zarar vermeden açım işlemi yapıyoruz.',
    },
    {
        question: 'Gece veya hafta sonu hizmet veriyor musunuz?',
        answer: 'Evet, 7 gün 24 saat nöbetçi çilingir hizmetimiz mevcuttur. Bayramlar ve resmi tatiller dahil bizi arayabilirsiniz.',
    },
    {
        question: 'Oto çilingir hizmetiniz hangi markaları kapsıyor?',
        answer: 'Tüm marka ve model araçlar için hasarsız kapı açma hizmeti veriyoruz. BMW, Mercedes, Audi dahil yüksek güvenlikli araçlar uzmanlık alanımızdır.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map((faq) => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer,
            },
        })),
    };

    return (
        <section className={styles.section}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <h2 className={styles.title}>Sıkça Sorulan Sorular</h2>
            <div className={styles.list}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.item}>
                        <button
                            className={styles.question}
                            onClick={() => toggle(index)}
                            aria-expanded={openIndex === index}
                        >
                            {faq.question}
                            <span className={`${styles.icon} ${openIndex === index ? styles.open : ''}`}>
                                +
                            </span>
                        </button>
                        <div className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
