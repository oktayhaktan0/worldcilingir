import Header from '@/components/Header';
import { siteConfig } from '@/config/site';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: 'İletişim - World Çilingir | Adres ve Telefon',
    description: `World Çilingir İletişim Bilgileri. Adres: ${siteConfig.address}. Telefon: ${siteConfig.phones.primary}. İzmir Karabağlar Merkez.`,
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
                <div className="container" style={{ paddingBottom: '4rem' }}>
                    <div className="clean-card" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
                        <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem', color: 'var(--text-primary)', borderBottom: '2px solid var(--accent-blue)', paddingBottom: '1rem' }}>
                            İletişim
                        </h1>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div>
                                <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>Merkez Ofis</h3>
                                <p style={{ color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                    {siteConfig.name}
                                </p>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                                    📍 {siteConfig.address}
                                    <br />
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>(Karabağlar / İzmir)</span>
                                </p>

                                <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>7/24 Çağrı Merkezi</h3>
                                <p style={{ marginBottom: '1rem' }}>
                                    <a href={`tel:${siteConfig.phones.primaryLink}`} style={{ color: 'var(--text-primary)', fontSize: '1.3rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        📞 {siteConfig.phones.primary}
                                    </a>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--accent-blue)' }}>Hemen Ulaşın (Öncelikli Hat)</span>
                                </p>
                                <p>
                                    <a href={`tel:${siteConfig.phones.secondaryLink}`} style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        📞 {siteConfig.phones.secondary}
                                    </a>
                                </p>
                            </div>

                            <div style={{ minHeight: '350px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--bg-tertiary)', boxShadow: 'var(--shadow-md)' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12507.575218764048!2d27.1287!3d38.3854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdf85764c5025%3A0x6c6e765582f32764!2sKaraba%C4%9Flar%2C%20%C4%B0zmir!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        <div style={{ marginTop: '3rem' }}>
                            <ContactForm />
                        </div>

                        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--bg-tertiary)' }}>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Çalışma Saatlerimiz</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: '400px', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                <span>Pazartesi - Cuma:</span>
                                <span style={{ fontWeight: 'bold', color: 'var(--accent-blue)' }}>7/24 Açık</span>
                                <span>Cumartesi:</span>
                                <span style={{ fontWeight: 'bold', color: 'var(--accent-blue)' }}>7/24 Açık</span>
                                <span>Pazar:</span>
                                <span style={{ fontWeight: 'bold', color: 'var(--accent-blue)' }}>7/24 Açık</span>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}
