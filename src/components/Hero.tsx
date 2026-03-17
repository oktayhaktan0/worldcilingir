import Image from 'next/image';
import styles from './Hero.module.css';
import { siteConfig } from '@/config/site';
import GeoLocator from './GeoLocator';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden', top: 0, left: 0, zIndex: 0 }}>
                <div className="animate-float" style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '500px',
                    height: '500px',
                    background: 'linear-gradient(135deg, #e0f2fe 0%, #fff 100%)',
                    borderRadius: '50%',
                    opacity: 0.6,
                    filter: 'blur(60px)',
                    animationDelay: '0s'
                }}></div>
                <div className="animate-float" style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-10%',
                    width: '300px',
                    height: '300px',
                    background: 'linear-gradient(135deg, #fef3c7 0%, #fff 100%)',
                    borderRadius: '50%',
                    opacity: 0.6,
                    filter: 'blur(40px)',
                    animationDelay: '1s'
                }}></div>
            </div>

            <div className={styles.bg}>
                <Image
                    src="/hero.png"
                    alt="World Çilingir - İzmir Profesyonel Çilingir Hizmeti"
                    fill
                    priority
                    className={styles.bgImage}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={`${styles.content} animate-slide-up`}>
                <div className={styles.badge}>📍 İzmir'in Tümü • 15 Dk Varış</div>
                <h1 className={styles.title}>
                    Kapıda Kaldıysanız <br />
                    <span>Profesyonel Çözüm</span>
                </h1>
                <p className={styles.description}>
                    İzmir geneli 7/24 acil çilingir hizmeti. Hasarsız kapı açma, kilit değişimi ve oto çilingir hizmetlerinde World Çilingir güvencesi.
                </p>

                <div className={styles.buttonGroup}>
                    <a href={`tel:${siteConfig.phones.primaryLink}`} className="btn btn-primary btn-pulse">
                        Hemen Ara: {siteConfig.phones.primary}
                    </a>
                    <a href="/hizmetler" className="btn btn-secondary">
                        Hizmetlerimiz
                    </a>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                    <GeoLocator />
                </div>

                <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}> </div>
            </div>
        </section>
    );
}

