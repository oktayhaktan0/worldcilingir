import Link from 'next/link';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DistrictGrid from '@/components/DistrictGrid';
import styles from './home.module.css';
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': siteConfig.name,
            'url': siteConfig.url,
            'logo': `${siteConfig.url}/icon.png`,
            'contactPoint': {
              '@type': 'ContactPoint',
              'telephone': siteConfig.phones.primaryLink,
              'contactType': 'customer service',
              'areaServed': 'TR',
              'availableLanguage': 'Turkish'
            }
          })
        }}
      />
      <Header />
      <Hero />

      <section className="animate-slide-up" style={{ padding: '3rem 0', background: 'var(--accent-blue-light)', marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-blue)' }}>15+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Yıllık Tecrübe</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-blue)' }}>30+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Hizmet Bölgesi</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-blue)' }}>10K+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Mutlu Müşteri</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-gol)' }}>15dk</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Ortalama Varış</div>
          </div>
        </div>
      </section>

      <section className={`${styles.features} animate-slide-up`} id="services">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Profesyonel Çilingir Hizmetleri</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              İzmir'in en köklü çilingir firması olarak, kapı açmadan kilit değişimine, oto çilingirden kasa açmaya kadar geniş bir yelpazede hizmet sunuyoruz.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={`${styles.featureCard} animate-float`} style={{ animationDelay: '0.2s' }}>
              <div className={styles.icon}>🔓</div>
              <h3>Kapı ve Kasa Açma</h3>
              <p>Çelik kapı, demir kapı, oda kapısı veya çelik kasa fark etmeksizin; anahtarınızı kaybettiyseniz veya içeride unuttuysanız hasarsız açma garantisi veriyoruz. Özel maymuncuk setlerimizle zarar vermeden işlem yapıyoruz.</p>
            </div>
            <div className={`${styles.featureCard} animate-float`} style={{ animationDelay: '0.4s' }}>
              <div className={styles.icon}>🚗</div>
              <h3>Oto Çilingir</h3>
              <p>Volkswagen, BMW, Audi, Mercedes, Fiat ve tüm marka araçlarınız için profesyonel oto çilingir hizmeti. Aracınızın boyasına veya kilidine zarar vermeden kapı açımı yapıyoruz.</p>
            </div>
            <div className={`${styles.featureCard} animate-float`} style={{ animationDelay: '0.6s' }}>
              <div className={styles.icon}>🛡️</div>
              <h3>Kilit Değişimi</h3>
              <p>Taşındığınız evin kilidini değiştirmek mi istiyorsunuz? Kale Kilit, Yale, Multilock gibi dünya markalarının montajını ve satışını yapıyoruz. Yüksek güvenlikli bareller ile evinizi koruyun.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="animate-slide-up" style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nasıl Çalışıyoruz?</h2>
          <div className={styles.processGrid}>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold', color: 'var(--accent-gold)' }}>1</div>
              <h3 style={{ fontSize: '1.25rem' }}>Bizi Arayın</h3>
              <p style={{ color: 'var(--text-secondary)' }}>0530 350 86 07 numarasından çağrı merkezimize ulaşın ve konumunuzu bildirin.</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold', color: 'var(--accent-gold)' }}>2</div>
              <h3 style={{ fontSize: '1.25rem' }}>15 Dk'da Varış</h3>
              <p style={{ color: 'var(--text-secondary)' }}>En yakın motorlu ekibimiz trafik takılmadan 15 dakika içinde adresinize ulaşsın.</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold', color: 'var(--accent-gold)' }}>3</div>
              <h3 style={{ fontSize: '1.25rem' }}>Profesyonel İşlem</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Kapınızı hasarsız açalım veya kilit işleminizi garantili şekilde gerçekleştirelim.</p>
            </div>
          </div>
        </div>
      </section>



      <DistrictGrid />



      <section className="animate-slide-up" style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Müşterilerimiz Ne Diyor?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="clean-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-secondary)' }}>"Gece yarısı kapıda kaldım, World Çilingir'i aradım. Gerçekten 15 dakikada geldiler ve kapı kilidime zarar vermeden açtılar. Teşekkürler!"</p>
              <div style={{ fontWeight: 'bold' }}>Ahmet Y. - Karşıyaka</div>
            </div>
            <div className="clean-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-secondary)' }}>"Ofisimiz için göbek değişimi lazımdı. Gelen usta çok profesyoneldi, Kale kilit taktı ve garanti belgesini teslim etti."</p>
              <div style={{ fontWeight: 'bold' }}>Selin K. - Alsancak</div>
            </div>
            <div className="clean-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-secondary)' }}>"Otomobilimin anahtarını bagajda unuttum. Pazar günü olmasına rağmen hemen geldiler. Fiyatları da gayet makul."</p>
              <div style={{ fontWeight: 'bold' }}>Murat D. - Bornova</div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <Link href="/bolgeler">Hizmet Bölgeleri</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/hakkimizda">Hakkımızda</Link>
            <Link href="/iletisim">İletişim</Link>
          </div>
          <div style={{ marginBottom: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--bg-tertiary)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              World Çilingir, İzmir genelinde 7/24 hizmet veren profesyonel bir çilingir firmasıdır. Kapı açma, kilit değişimi, oto çilingir ve kasa çilingiri hizmetleri sunmaktayız.
            </p>
          </div>
          <p style={{ fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{siteConfig.name}</p>
          <p style={{ marginBottom: '1rem' }}>{siteConfig.address}</p>
          <p>© 2024 Tüm Hakları Saklıdır.</p>
        </div>
      </footer>
    </main>
  );
}
