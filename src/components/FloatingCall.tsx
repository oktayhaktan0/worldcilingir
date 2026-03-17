'use client';
import styles from './FloatingCall.module.css';
import { siteConfig } from '@/config/site';

export default function FloatingCall() {
    return (
        <a href={`tel:${siteConfig.phones.primaryLink}`} className={`${styles.floatBtn} btn-pulse`} aria-label="Hemen Ara">
            📞
        </a>
    );
}
