import styles from './foodLists.module.css';
import Link from 'next/link';

export default function FoodLists({ filtered }) {
    return (
        <ul className={styles.foodList}>
            {filtered.map((food) => (
                <li
                    key={food.id}
                    className={`${styles.card} ${styles[food.overallFodmapLevel]} ${food.description ? styles.descriptionInfo : ''
                        }`}
                >
                    <Link href={`/category/${food.category}/${food.slug}`}>
                        <img
                            src={`/images/${food.image}`}
                            className={styles.imageStyle}
                            alt={food.name}
                        />

                        <p className={styles.foodName}>{food.name}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
}