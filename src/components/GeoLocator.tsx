'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { findNearestDistrict } from '@/utils/geo';

export default function GeoLocator() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLocate = () => {
        setLoading(true);

        if (!navigator.geolocation) {
            alert('Tarayıcınız konum servisini desteklemiyor.');
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const nearest = findNearestDistrict(latitude, longitude);

                if (nearest && nearest.slug) {
                    router.push(`/izmir/${nearest.slug}/cilingir`);
                } else {
                    alert('Size en yakın bölgeyi bulamadık.');
                    setLoading(false);
                }
            },
            (error) => {
                console.error('Konum hatası:', error);
                alert('Konumunuz alınamadı. Lütfen izin verdiğinizden emin olun.');
                setLoading(false);
            }
        );
    };

    return (
        <button
            onClick={handleLocate}
            disabled={loading}
            className={`btn btn-secondary ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
            style={{
                marginTop: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                fontWeight: '600'
            }}
        >
            {loading ? (
                <>
                    <span className="animate-spin">🔄</span> Konum Hesaplanıyor...
                </>
            ) : (
                <>
                    📍 En Yakın Çilingiri Bul
                </>
            )}
        </button>
    );
}
