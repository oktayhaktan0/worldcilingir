import Header from '@/components/Header';
import { siteConfig } from '@/config/site';

export const metadata = {
    title: 'İzmir Kilit Değişimi - Göbek ve Barel Değiştirme',
    description: 'Evinizin güvenliğini arttırın. Kale Kilit, Yale, Multilock kilit değişimi ve montajı. İzmir garantili göbek değiştirme servisi.',
};

export default function LockChangePage() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
                <div className="container" style={{ paddingBottom: '4rem' }}>

                    <div className="clean-card" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--text-primary)', textAlign: 'center' }}>
                            İzmir Kilit Değişimi & Montajı
                        </h1>

                        <img
                            src="/hero.png"
                            alt="Kilit Değişimi"
                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}
                        />

                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Yeni bir eve mi taşındınız? Yoksa eski kilidiniz artık güven vermiyor mu?
                            World Çilingir olarak, dünya standartlarında kilit markalarının yetkili satışı ve montajını yapıyoruz.
                            Evinizin güvenliğini şansa bırakmayın.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                            <div style={{ border: '1px solid var(--bg-tertiary)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                                <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-blue)' }}>Standart Barel</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Ekonomik ve temel güvenlik. İç oda kapıları veya düşük riskli bölgeler için uygundur.</p>
                                <div style={{ fontWeight: 'bold' }}>Markalar: Yuma, Kale (Baz)</div>
                            </div>
                            <div style={{ border: '1px solid var(--accent-gold)', padding: '1.5rem', borderRadius: 'var(--radius-md)', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '-10px', right: '10px', background: 'var(--accent-gold)', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 'bold' }}>ÖNERİLEN</div>
                                <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Yüksek Güvenlikli (Tuzaklı)</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Zorlamaya karşı kırılsa bile açılmayan, tuzaklı sistem. Hırsızlara karşı en etkili caydırıcıdır.</p>
                                <div style={{ fontWeight: 'bold' }}>Markalar: Kale Tuzaklı, Yale</div>
                            </div>
                            <div style={{ border: '1px solid var(--bg-tertiary)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                                <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-blue)' }}>Zırhlı ve Kartlı Sistemler</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Maymuncukla açılması imkansız, kartlı veya patentli anahtar sistemleri.</p>
                                <div style={{ fontWeight: 'bold' }}>Markalar: Multilock, Keso</div>
                            </div>
                        </div>

                        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Neden Kilit Değiştirmelisiniz?</h2>
                        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '3rem' }}>
                            <li>Yeni eve taşındığınızda eski anahtarların kimde olduğunu bilemezsiniz.</li>
                            <li>Anahtarınızı kaybettiyseniz veya çaldırdıysanız risk altındasınızdır.</li>
                            <li>Kilidiniz takılıyor veya zor dönüyorsa her an bozulup sizi kapıda bırakabilir.</li>
                            <li>Eski tip bareller hırsızlık tekniklerine karşı savunmasızdır.</li>
                        </ul>

                        <div style={{ textAlign: 'center' }}>
                            <a href={`tel:${siteConfig.phones.primaryLink}`} className="btn btn-primary btn-pulse" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                                🛠️ Kilit Değişimi Talep Et
                            </a>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}
