'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { siteConfig } from '@/config/site';
import Image from 'next/image';

import CommandPalette from './CommandPalette';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt={siteConfig.name}
                        width={200}
                        height={50}
                        priority
                        style={{ width: 'auto', height: '50px', objectFit: 'contain' }}
                    />
                </Link>

                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>Ana Sayfa</Link>
                    <div className={styles.dropdown}>
                        <span className={styles.navLink} style={{ cursor: 'pointer' }}>Hizmetler ▾</span>
                        <div className={styles.dropdownContent}>
                            <Link href="/hizmetler/oto-cilingir">Oto Çilingir</Link>
                            <Link href="/hizmetler/kasa-cilingir">Kasa Çilingiri</Link>
                            <Link href="/hizmetler/kilit-degisimi">Kilit Değişimi</Link>
                        </div>
                    </div>
                    <Link href="/bolgeler" className={styles.navLink}>Bölgeler</Link>
                    <Link href="/hakkimizda" className={styles.navLink}>Hakkımızda</Link>
                    <Link href="/iletisim" className={styles.navLink}>İletişim</Link>
                </nav>

                <div className={styles.actions}>
                    <button
                        onClick={() => setSearchOpen(true)}
                        aria-label="Arama Yap"
                        style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', marginRight: '0.5rem' }}
                    >
                        🔍
                    </button>

                    <a href={`tel:${siteConfig.phones.primaryLink}`} className={`${styles.callBtn} btn-pulse`}>
                        <span style={{ fontSize: '1.2rem' }}>📞</span> <span className={styles.phoneText}>{siteConfig.phones.primary}</span>
                    </a>

                    <button
                        className={styles.mobileToggle}
                        onClick={toggleMobileMenu}
                        aria-label="Menüyü Aç"
                    >
                        <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
                        <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
                        <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
                    </button>
                </div>
            </div>

            <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

            <div className={`${styles.mobileMenuOverlay} ${mobileMenuOpen ? styles.open : ''}`}>
                <button className={styles.closeBtn} onClick={closeMobileMenu}>✕</button>
                <Link href="/" className={styles.mobileNavLink} onClick={closeMobileMenu}>Ana Sayfa</Link>
                <Link href="/hizmetler/oto-cilingir" className={styles.mobileNavLink} onClick={closeMobileMenu}>Oto Çilingir</Link>
                <Link href="/hizmetler/kasa-cilingir" className={styles.mobileNavLink} onClick={closeMobileMenu}>Kasa Çilingiri</Link>
                <Link href="/hizmetler/kilit-degisimi" className={styles.mobileNavLink} onClick={closeMobileMenu}>Kilit Değişimi</Link>
                <Link href="/bolgeler" className={styles.mobileNavLink} onClick={closeMobileMenu}>Bölgeler</Link>
                <Link href="/hakkimizda" className={styles.mobileNavLink} onClick={closeMobileMenu}>Hakkımızda</Link>
                <Link href="/iletisim" className={styles.mobileNavLink} onClick={closeMobileMenu}>İletişim</Link>
            </div>
        </header >
    );
}
