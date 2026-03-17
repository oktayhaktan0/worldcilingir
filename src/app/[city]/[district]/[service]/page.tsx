import { districts } from '@/data/districts';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import styles from './page.module.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

type Props = {
    params: Promise<{ city: string; district: string; service: string }>;
};

export async function generateStaticParams() {
    return districts.map((district) => ({
        city: 'izmir',
        district: district.slug,
        service: 'cilingir',
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city, district: districtSlug, service } = await params;

    if (city !== 'izmir' || service !== 'cilingir') return {};

    const district = districts.find(d => d.slug === districtSlug);

    if (!district) return {};

    return {
        title: `İzmir ${district.name} Çilingir - 7/24 Nöbetçi | 15 Dk Acil Servis`,
        description: `${district.name} çilingir, ${district.name} kapı açma ve kilit değişimi. Hasarsız oto çilingir hizmeti. 7 gün 24 saat nöbetçi usta kapınızda.`,
        alternates: {
            canonical: `${siteConfig.url}/${city}/${districtSlug}/${service}`,
        },
    };
}

function getNearbyDistricts(currentSlug: string) {
    return districts
        .filter(d => d.slug !== currentSlug)
        .sort(() => 0.5 - Math.random())
        .slice(0, 8);
}

export default async function DistrictPage({ params }: Props) {
    const { city, district: districtSlug, service } = await params;

    if (city !== 'izmir' || service !== 'cilingir') {
        notFound();
    }

    const district = districts.find(d => d.slug === districtSlug);

    if (!district) {
        notFound();
    }

    const nearby = getNearbyDistricts(districtSlug);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Locksmith',
        'name': `İzmir ${district.name} Çilingir`,
        'image': `${siteConfig.url}/hero.png`,
        'telephone': siteConfig.phones.primaryLink,
        'url': `${siteConfig.url}/${city}/${districtSlug}/${service}`,
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': `${district.name} Merkez`,
            'addressLocality': 'İzmir',
            'addressRegion': 'İzmir',
            'addressCountry': 'TR'
        },
        'geo': {
            '@type': 'GeoCoordinates',
            'latitude': '38.4192',
            'longitude': '27.1287'
        },
        'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
            ],
            'opens': '00:00',
            'closes': '23:59'
        },
        'priceRange': '$$',
        'areaServed': {
            '@type': 'City',
            'name': district.name
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main className={styles.container}>
                <section style={{
                    paddingTop: '8rem',
                    paddingBottom: '4rem',
                    textAlign: 'center',
                    background: 'var(--bg-primary)',
                    borderBottom: '1px solid var(--bg-tertiary)'
                }}>
                    <div className="container">
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'var(--accent-blue-light)',
                            color: 'var(--accent-blue)',
                            padding: '0.5rem 1rem',
                            borderRadius: '99px',
                            fontSize: '0.9rem',
                            fontWeight: '700',
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase'
                        }}>
                            ✅ {district.name} Resmi Çilingir Servisi
                        </div>
                        <h1 style={{
                            fontSize: '2.5rem',
                            fontWeight: '800',
                            color: 'var(--text-primary)',
                            marginBottom: '1.5rem',
                            lineHeight: '1.2'
                        }}>
                            {district.name} <span style={{ color: 'var(--accent-blue)' }}>Çilingir Hizmeti</span>
                        </h1>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '1.25rem',
                            marginBottom: '2.5rem',
                            maxWidth: '800px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            lineHeight: '1.6'
                        }}>
                            7/24 Acil & Profesyonel • 15 Dakikada {district.name} bölgesindeyiz
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href={`tel:${siteConfig.phones.primaryLink}`} className="btn btn-primary btn-pulse" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                                📞 Hemen Ara
                            </a>
                            <a href={`tel:${siteConfig.phones.secondaryLink}`} className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                                0530 350 86 07
                            </a>
                        </div>
                    </div>
                </section>

                <section style={{ padding: '3rem 0', background: 'var(--bg-secondary)' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                            <div>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🛡️</div>
                                <h4 style={{ fontSize: '1.1rem' }}>Hasarsız Açım Garantisi</h4>
                            </div>
                            <div>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>⚡</div>
                                <h4 style={{ fontSize: '1.1rem' }}>15 Dakikada Orada</h4>
                            </div>
                            <div>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📜</div>
                                <h4 style={{ fontSize: '1.1rem' }}>Sertifikalı Usta</h4>
                            </div>
                            <div>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💳</div>
                                <h4 style={{ fontSize: '1.1rem' }}>Kredi Kartı Geçerli</h4>
                            </div>
                        </div>
                    </div>
                </section>

                <article className={styles.content} style={{ marginTop: '0', paddingTop: '4rem' }}>
                    <div className="clean-card" style={{ padding: '3rem', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2rem' }}>{district.name} Bölgesinde Güvenilir Çilingir</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            İzmir <strong>{district.name}</strong> ilçesinde kapıda mı kaldınız? Hiç dert etmeyin. Profesyonel ekibimiz,
                            {district.name} genelinde 7 gün 24 saat hizmet vermektedir. Motorlu servisimiz sayesinde trafiğe takılmadan
                            en geç 15 dakika içinde adresinize ulaşıyoruz. Gece gündüz demeden, bayram seyran dinlemeden nöbetçi çilingiriniz bir telefon uzağınızda.
                        </p>

                        <h3 style={{ marginTop: '2.5rem', marginBottom: '1.5rem', fontSize: '1.75rem' }}>Hizmet Detaylarımız</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                            <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                                <h4 style={{ color: 'var(--accent-blue)' }}>🏠 {district.name} Kapı Açma</h4>
                                <p style={{ fontSize: '0.95rem' }}>Çelik kapı, demir kapı veya ahşap kapı fark etmeksizin; kilitli kalan veya anahtarı kaybolan kapılarınızı hasarsız açıyoruz.</p>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                                <h4 style={{ color: 'var(--accent-blue)' }}>🚗 {district.name} Oto Çilingir</h4>
                                <p style={{ fontSize: '0.95rem' }}>Anahtarı içeride kalan aracınız için hasarsız çözüm. BMW, Mercedes, Audi gibi yüksek güvenlikli araçlar dahil tüm modellerde uzmanız.</p>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                                <h4 style={{ color: 'var(--accent-blue)' }}>🔐 Kilit Değişimi</h4>
                                <p style={{ fontSize: '0.95rem' }}>Eski kilidiniz güven vermiyor mu? Kale, Yuma, Yale gibi markaların montajını yerinde ve garantili yapıyoruz.</p>
                            </div>
                        </div>

                        <h3 style={{ marginBottom: '1rem' }}>Sıkça Sorulan Sorular</h3>
                        <p style={{ marginBottom: '2rem' }}>{district.name} sakinleri tarafından en çok merak edilen soruları yanıtladık.</p>
                        <FAQ />

                        <h3 style={{ marginTop: '3rem', marginBottom: '1rem' }}>Neden Bizi Tercih Etmelisiniz?</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', lineHeight: '2', color: 'var(--text-secondary)' }}>
                            <li><strong>Hızlı Varış:</strong> {district.name} trafiğini iyi bilen motorlu ekipler.</li>
                            <li><strong>Uygun Fiyat:</strong> Fahiş fiyat yok, işlem öncesi şeffaf fiyatlandırma.</li>
                            <li><strong>Sertifikalı Usta:</strong> Tüm ustalarımız çilingir odasına kayıtlıdır.</li>
                        </ul>

                    </div>

                    <div className={styles.cta}>
                        <h3 className={styles.ctaTitle}>Acil Durum? Beklemeyin!</h3>
                        <p>Şu an {district.name} bölgesinde nöbetçi ustamız yönlendirilmeye hazır.</p>
                        <br />
                        <a href={`tel:${siteConfig.phones.primaryLink}`} className="btn btn-primary btn-pulse" style={{ width: '100%', fontSize: '1.2rem', padding: '1rem' }}>
                            📞 Tıkla ve Ara (15 Dk Varış)
                        </a>
                    </div>

                    <div style={{ marginTop: '5rem', borderTop: '1px solid var(--bg-tertiary)', paddingTop: '3rem' }}>
                        <h4 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Yakın Bölgelerdeki Hizmetimiz</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
                            {nearby.map(d => (
                                <Link
                                    key={d.slug}
                                    href={`/izmir/${d.slug}/cilingir`}
                                    style={{
                                        display: 'block',
                                        padding: '0.75rem',
                                        background: '#fff',
                                        border: '1px solid var(--bg-tertiary)',
                                        borderRadius: 'var(--radius-sm)',
                                        textAlign: 'center',
                                        color: 'var(--text-secondary)',
                                        fontWeight: '600',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    {d.name} Çilingir
                                </Link>
                            ))}
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}
