import Header from '@/components/Header';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: 'İzmir Kasa Çilingiri - Çelik Kasa Açma Hizmeti',
    description: 'Şifresini unuttuğunuz veya anahtarını kaybettiğiniz çelik kasalarınızı açıyoruz. İzmir kasa çilingiri, dijital ve mekanik kasa açma.',
};

export default function SafeLocksmithPage() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
                <div className="container" style={{ paddingBottom: '4rem' }}>

                    <div className="clean-card" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💰</div>
                            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Kasa Çilingiri</h1>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                                Değerli eşyalarınızın güvende olduğu kasanızı açamıyor musunuz? Profesyonel kasa ustamız yardımınıza hazır.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gap: '2rem', margin: '3rem 0' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'var(--accent-blue-light)', color: 'var(--accent-blue)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>1</div>
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem' }}>Dijital (Şifreli) Kasa Açma</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>Pili biten veya şifresi unutulan elektronik kasaları, özel dekoder cihazlarımızla açmayı deniyoruz. Mümkün değilse minimal delme işlemiyle açım sağlıyoruz.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'var(--accent-blue-light)', color: 'var(--accent-blue)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>2</div>
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem' }}>Mekanik (Anahtarlı) Kasa Açma</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>Anahtarı kaybolan çelik kasalarınız için maymuncuk sistemleri ile açım yapıyoruz. Kasa kilidiniz zarar görmeden anahtar kopyalama hizmeti de sunuyoruz.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'var(--accent-blue-light)', color: 'var(--accent-blue)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>3</div>
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem' }}>Otel ve Ofis Kasaları</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>Yale, Kale, Masis ve ithal marka tüm para kasalarında deneyimliyiz.</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '1rem' }}>Güvenlik Protokolü</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                Kasa açma işlemi sadece mülk sahibi veya yetkili kişinin nezaretinde, kimlik tutanağı ile yapılmaktadır. Güvenliğiniz bizim için her şeyden önemlidir.
                            </p>
                            <a href={`tel:${siteConfig.phones.primaryLink}`} className="btn btn-primary btn-pulse">
                                📞 Kasa Ustası Çağır
                            </a>
                        </div>

                    </div>

                </div>
            </main>
        </>
    );
}
