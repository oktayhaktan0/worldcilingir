import Link from 'next/link';
import Header from '@/components/Header';
import { siteConfig } from '@/config/site';
import { districts } from '@/data/districts';

export const metadata = {
    title: 'Hizmet Bölgeleri - World Çilingir | İzmir Geneli Servis Ağı',
    description: 'İzmir çilingir hizmet bölgelerimiz. Bornova, Konak, Karşıyaka, Buca ve tüm ilçelerde 15 dakikada yanınızdayız.',
};

export default function RegionsPage() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ paddingBottom: '4rem' }}>

                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Hizmet Bölgelerimiz</h1>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                            World Çilingir olarak İzmir'in her noktasına 7/24 profesyonel hizmet sunuyoruz.
                            Bulunduğunuz ilçeyi seçerek detaylı bilgi alabilirsiniz.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        {districts.map((district) => (
                            <Link
                                key={district.slug}
                                href={`/izmir/${district.slug}/cilingir`}
                                className="clean-card"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '1.5rem',
                                    textDecoration: 'none',
                                    textAlign: 'center'
                                }}
                            >
                                <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                    {district.name}
                                </span>
                                <span style={{ fontSize: '0.9rem', color: 'var(--accent-blue)' }}>
                                    Hizmeti Gör →
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div style={{ marginTop: '4rem', padding: '2rem', background: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-tertiary)', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Aradığınız Bölgeyi Bulamadınız mı?</h2>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                            Merkez ilçelerin dışında da özel servisimiz bulunmaktadır. Bizi arayarak konum bilgisi paylaşabilirsiniz.
                        </p>
                        <a href={`tel:${siteConfig.phones.primaryLink}`} className="btn btn-primary">
                            📞 Hemen Ara: {siteConfig.phones.primary}
                        </a>
                    </div>

                </div>
            </main>
        </>
    );
}
