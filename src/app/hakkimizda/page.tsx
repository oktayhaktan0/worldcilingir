import Header from '@/components/Header';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: 'Hakkımızda - World Çilingir | İzmir Kurumsal Çilingir',
    description: 'World Çilingir olarak İzmir genelinde 10 yılı aşkın süredir profesyonel çilingir hizmeti veriyoruz. Güvenilir, hızlı ve sertifikalı ustalarımızla 7/24 yanınızdayız.',
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
                <div className="container" style={{ paddingBottom: '4rem' }}>
                    <div className="clean-card" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
                        <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem', color: 'var(--text-primary)' }}>
                            Hakkımızda
                        </h1>

                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.8' }}>
                            <strong>World Çilingir</strong>, İzmir'in Karabağlar ilçesinde temelleri atılan ve dürüst esnaflık ilkesiyle kısa sürede tüm İzmir'e yayılan kurumsal bir çilingir firmasıdır.
                            Geleneksel çilingirlik zanaatını modern teknolojiyle birleştirerek, ev ve araç güvenliğiniz için profesyonel çözümler üretiyoruz.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                            <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📜</div>
                                <h3 style={{ fontSize: '1.2rem' }}>Oda Kayıtlı</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>İzmir Anahtarcılar ve Çilingirler Odası Resmi Üyesi</p>
                            </div>
                            <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎓</div>
                                <h3 style={{ fontSize: '1.2rem' }}>Ustalık Belgeli</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Mesleki Yeterlilik ve Ustalık Belgesine Sahip Kadro</p>
                            </div>
                            <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📄</div>
                                <h3 style={{ fontSize: '1.2rem' }}>Vergi Levhalı</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Kurumsal ve Faturalı Hizmet</p>
                            </div>
                        </div>

                        <h2 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}>İlkelerimiz</h2>
                        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: '2', marginBottom: '3rem' }}>
                            <li>✅ <strong>Şeffaflık:</strong> Telefonda ne fiyat verdiysek, kapıda o fiyat geçerlidir.</li>
                            <li>✅ <strong>Hız:</strong> "Geliyorum" diyip saatlerce bekletmek yok. Ortalama 15 dakika varış süresi.</li>
                            <li>✅ <strong>Güvenlik:</strong> Evinizin/aracınızın kilidini açarken kimlik teyidi yapıyor, güvenliğinizi riske atmıyoruz.</li>
                            <li>✅ <strong>Teknoloji:</strong> Maymuncuk ve açma ekipmanlarımız her zaman son teknolojidir, kapınıza zarar vermez.</li>
                        </ul>

                        <div style={{ padding: '2rem', background: 'var(--accent-blue-light)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                            <h3 style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }}>Sizin Güvenliğiniz, Bizim İşimiz</h3>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                                Kapıda kaldığınızda veya kilidinizi değiştirmek istediğinizde, karşınızda dürüst ve işinin ehli bir muhatap bulmak hakkınız.
                            </p>
                            <a href={`tel:${siteConfig.phones.primaryLink}`} className="btn btn-primary btn-pulse">
                                📞 Hemen Tanışalım: {siteConfig.phones.primary}
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
