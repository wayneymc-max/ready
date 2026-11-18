
import styles from "./foodLists.module.css";

export default function FoodLists({ filtered, onFoodClick }) {
    return (
        <ul className={styles.foodList}>
            {filtered.map((food) => (
                <li
                    key={food.id}
                    className={[
                        styles.card,
                        styles[food.overallFodmapLevel?.toLowerCase()],
                        food.description && styles.descriptionInfo,
                    ]
                        .filter(Boolean)
                        .join(" ")}
                >
                    <button
                        type="button"
                        className={styles.foodButton}
                        onClick={() => onFoodClick(food)}
                        aria-label={`View FODMAP information for ${food.name}`}
                    >
                        {food.image ? (
                            <img
                                src={`/images/${food.image}`}
                                className={styles.imageStyle}
                                alt={food.name}
                                loading="lazy"
                            />
                        ) : (
                            <span className={styles.imagePlaceholder}>
                                {food.name}
                            </span>
                        )}

                        <p className={styles.foodName}>
                            {food.name}
                        </p>
                    </button>
                </li>
            ))}
        </ul>
    );
}
