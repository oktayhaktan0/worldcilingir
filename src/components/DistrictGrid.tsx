import Link from 'next/link';
import { districts } from '@/data/districts';
import styles from './DistrictGrid.module.css';

export default function DistrictGrid() {
    return (
        <section className={styles.section} id="districts">
            <h2 className={styles.title}>
                İzmir'in <span>Tüm İlçelerinde</span> Hizmetinizdeyiz
            </h2>
            <div className={styles.grid}>
                {districts.map((district) => (
                    <Link
                        key={district.slug}
                        href={`/izmir/${district.slug}/cilingir`}
                        className={styles.card}
                        title={`${district.name} Çilingir`}
                    >
                        {district.name}
                    </Link>
                ))}
            </div>
        </section>
    );
}
