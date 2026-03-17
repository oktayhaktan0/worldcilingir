import Header from '@/components/Header';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: 'İzmir Oto Çilingir - Hasarsız Araba Kapısı Açma',
    description: 'İzmir\'de oto çilingir hizmeti. Anahtarı içeride kalan arabanızı hasarsız açıyoruz. BMW, Mercedes, Audi, Volkswagen ve tüm markalar için 7/24 servis.',
};

export default function AutoLocksmithPage() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
                <div className="container" style={{ paddingBottom: '4rem' }}>

                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>İzmir Profesyonel Oto Çilingir</h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                            Aracınızın anahtarını mı kaybettiniz veya içeride mi unuttunuz? Panik yapmayın.
                            Son teknoloji ekipmanlarımızla aracınıza <strong>en ufak bir zarar vermeden</strong> kapısını açıyoruz.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        <div className="clean-card" style={{ padding: '2rem' }}>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-blue)' }}>Modelli Araç Uzmanlığı</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Sadece eski model araçlar değil, yüksek güvenlikli <strong>BMW, Mercedes, Audi, Range Rover</strong> gibi araçların kilit sistemlerini bozmadan açma garantisi veriyoruz.
                            </p>
                        </div>
                        <div className="clean-card" style={{ padding: '2rem' }}>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-blue)' }}>7/24 Yol Yardım</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Otoparkta, yol kenarında veya benzinlikte... Nerede kaldıysanız motorlu ekibimizle 15 dakikada yanınızdayız.
                            </p>
                        </div>
                        <div className="clean-card" style={{ padding: '2rem' }}>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-blue)' }}>Bagaj Açma</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Anahtarı bagajda unuttuysanız, özel aparatlarımızla sadece bagaj kilidine müdahale ederek sorunu çözüyoruz.
                            </p>
                        </div>
                    </div>

                    {/* Brands List */}
                    <div style={{ background: 'var(--bg-secondary)', padding: '3rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>Hizmet Verdiğimiz Araç Markaları</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>
                            <span>Volkswagen</span> • <span>Audi</span> • <span>BMW</span> • <span>Mercedes-Benz</span> •
                            <span>Ford</span> • <span>Fiat</span> • <span>Renault</span> • <span>Toyota</span> •
                            <span>Honda</span> • <span>Hyundai</span> • <span>Opel</span> • <span>Peugeot</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Arabanızın başında beklemeyin, hemen arayın!</p>
                        <a href={`tel:${siteConfig.phones.primaryLink}`} className="btn btn-primary btn-pulse" style={{ fontSize: '1.3rem', padding: '1rem 2.5rem' }}>
                            🚗 Oto Çilingir Çağır
                        </a>
                    </div>

                </div>
            </main>
        </>
    );
}
