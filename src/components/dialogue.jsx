
'use client';

import styles from './dialogue.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dialogue({
    currentFood,
    isIntercepted = false,
}) {
    const router = useRouter();

    const closeDialogue = () => {
        if (isIntercepted) {
            router.back();
        } else {
            router.replace(`/category/${currentFood.category}`);
        }
    };

    // Prevent background scrolling without changing its width.
    useEffect(() => {
        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        const previousOverflow = document.body.style.overflow;
        const previousOverscroll = document.body.style.overscrollBehavior;
        const previousPaddingRight = document.body.style.paddingRight;

        document.body.style.overflow = 'hidden';
        document.body.style.overscrollBehavior = 'none';

        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeDialogue();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.body.style.overscrollBehavior = previousOverscroll;
            document.body.style.paddingRight = previousPaddingRight;

            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentFood, isIntercepted]);

    if (!currentFood) return null;

    const level = currentFood.overallFodmapLevel?.toLowerCase();

    const colors = {
        low: styles.low,
        medium: styles.medium,
        high: styles.high,
    };

    const levelText = {
        low: 'low FODMAP',
        medium: 'medium FODMAP',
        high: 'high FODMAP',
    };

    const servings = [
        {
            label: 'Low',
            value: currentFood.lowFodmapServing,
            color: styles.lowServing,
        },
        {
            label: 'Medium',
            value: currentFood.mediumFodmapServing,
            color: styles.mediumServing,
        },
        {
            label: 'High',
            value: currentFood.highFodmapServing,
            color: styles.highServing,
        },
    ].filter((serving) => serving.value);

    return (
        <div
            className={styles.dialogueOverlay}
            onClick={closeDialogue}
        >
            <div
                className={styles.dialogueContainer}
                role="dialog"
                aria-modal="true"
                aria-labelledby="food-title"
                onClick={(event) => event.stopPropagation()}
            >
                <div className={styles.dragHandle}></div>

                <div className={styles.dialogueHeader}>
                    <div
                        className={`${styles.levelSquare} ${colors[level] || ''}`}
                    ></div>

                    <h2
                        id="food-title"
                        className={styles.dialogueTitle}
                    >
                        {currentFood.name}
                    </h2>

                    <button
                        className={styles.closeButton}
                        onClick={closeDialogue}
                        aria-label="Close"
                    >
                        &times;
                    </button>
                </div>

                <div className={styles.dialogueBody}>
                    <div className={styles.infoCard}>
                        {currentFood.image && (
                            <img
                                src={`/images/${currentFood.image}`}
                                alt={currentFood.name}
                                className={styles.dialogueImage}
                            />
                        )}

                        <div className={styles.foodInfo}>
                            <span
                                className={`${styles.levelBadge} ${colors[level] || ''}`}
                            >
                                {levelText[level] || 'Unknown FODMAP level'}
                            </span>

                            <p className={styles.levelDescription}>
                                This food is currently classified as{' '}
                                <strong>
                                    {levelText[level] || 'unknown FODMAP'}
                                </strong>{' '}
                                in this guide.
                            </p>

                            {currentFood.description && (
                                <div className={styles.foodNote}>
                                    <strong className={styles.noteTitle}>
                                        About this food
                                    </strong>
                                    <p>{currentFood.description}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={styles.servingsContainer}>
                        <h3 className={styles.servingsTitle}>
                            Serving Sizes
                        </h3>

                        {servings.length > 0 ? (
                            <div className={styles.servingsList}>
                                {servings.map((serving) => (
                                    <div
                                        key={serving.label}
                                        className={styles.servingRow}
                                    >
                                        <span
                                            className={`${styles.servingLabel} ${serving.color}`}
                                        >
                                            {serving.label}
                                        </span>

                                        <span className={styles.servingValue}>
                                            {serving.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className={styles.noServingInfo}>
                                Serving-size information is currently
                                unavailable for this food.
                            </p>
                        )}
                    </div>

                    <p className={styles.disclaimer}>
                        FODMAP content may vary depending on ingredients,
                        preparation and serving size. Individual tolerance
                        may differ.
                    </p>
                </div>
            </div>
        </div>
    );
}
