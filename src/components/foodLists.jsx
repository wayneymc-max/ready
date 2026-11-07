import styles from './foodLists.module.css'
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';


export default function FoodLists
    ({ filtered }) {
    const dispatch = useDispatch();

    return (
        <ul className={styles.foodList}>
            {
                filtered.map(food =>
                    <li key={food.id} className={`${styles.card} ${styles[food.overallFodmapLevel]} ${food.description && styles.descriptionInfo}`}>
                        <Link
                            key={food.id}
                            href={`/category/${food.category}/${food.slug}`}


                        >
                            <img src={`/images/${food.image}`} className={styles.imageStyle} alt={food.name} />
                            <p className={styles.foodName}>{food.name}</p>
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}