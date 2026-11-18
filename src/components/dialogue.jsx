
"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "./dialogue.module.css";

export default function Dialogue({ currentFood, onClose, closeHref }) {
    const router = useRouter();

    const handleClose = useCallback(() => {
        // Preserve existing intercepted modal behavior
        if (onClose) {
            onClose();
            return;
        }

        // Direct URL visit: return to category page
        if (closeHref) {
            router.replace(closeHref);
        }
    }, [onClose, closeHref, router]);

    useEffect(() => {
        if (!currentFood) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentFood, handleClose]);

    if (!currentFood) return null;

    const level =
        currentFood.overallFodmapLevel?.toLowerCase() || "unknown";

    const colors = {
        low: styles.low,
        medium: styles.medium,
        high: styles.high,
    };

    const levelText = {
        low: "Low FODMAP",
        medium: "Medium FODMAP",
        high: "High FODMAP",
    };

    const sections = currentFood.sections || {};

    const servings =
        sections.servingSizeInformation?.filter(
            (serving) =>
                serving.amount !== null &&
                serving.amount !== undefined &&
                serving.amount !== ""
        ) || [];

    return (
        <div
            className={styles.dialogueOverlay}
            onClick={handleClose}
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
                        className={`${styles.levelSquare} ${colors[level] || ""}`}
                    />

                    <h2
                        id="food-title"
                        className={styles.dialogueTitle}
                    >
                        {currentFood.name} FODMAP Information
                    </h2>

                    <button
                        type="button"
                        className={styles.closeButton}
                        onClick={handleClose}
                        aria-label="Close dialogue"
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
                                className={`${styles.levelBadge} ${colors[level] || ""}`}
                            >
                                {levelText[level] || "Unknown FODMAP level"}
                            </span>

                            {sections.understandingRating?.summary && (
                                <p className={styles.levelDescription}>
                                    {sections.understandingRating.summary}
                                </p>
                            )}

                            {sections.overview && (
                                <div className={styles.foodNote}>
                                    <strong className={styles.noteTitle}>
                                        About {currentFood.name}
                                    </strong>

                                    <p>{sections.overview}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={styles.servingsContainer}>
                        <h3 className={styles.servingsTitle}>
                            Serving Size Information
                        </h3>

                        {servings.length > 0 ? (
                            <div className={styles.servingsList}>
                                {servings.map((serving) => {
                                    const servingColors = {
                                        "Low FODMAP": styles.lowServing,
                                        "Medium FODMAP": styles.mediumServing,
                                        "High FODMAP": styles.highServing,
                                    };

                                    return (
                                        <div
                                            key={serving.level}
                                            className={styles.servingRow}
                                        >
                                            <span
                                                className={`${styles.servingLabel} ${servingColors[serving.level] || ""}`}
                                            >
                                                {serving.level}
                                            </span>

                                            <span className={styles.servingValue}>
                                                {serving.amount}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <p className={styles.noServingInfo}>
                                Serving-size information is not currently
                                available for this food.
                            </p>
                        )}
                    </div>

                    {sections.commonUses?.length > 0 && (
                        <div
                            className={`${styles.infoCard} ${styles.stackedInfoCard}`}
                        >
                            <div>
                                <h3>Common Uses</h3>

                                <ul>
                                    {sections.commonUses.map((use, index) => (
                                        <li key={index}>{use}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {sections.ingredientAwareness && (
                        <div
                            className={`${styles.infoCard} ${styles.stackedInfoCard}`}
                        >
                            <div>
                                <h3>Ingredient Awareness</h3>
                                <p>{sections.ingredientAwareness}</p>
                            </div>
                        </div>
                    )}

                    {sections.disclaimer && (
                        <p className={styles.disclaimer}>
                            {sections.disclaimer}
                        </p>
                    )}

                    {sections.furtherReading?.url && (
                        <div className={styles.foodNote}>
                            <strong className={styles.noteTitle}>
                                Further Reading
                            </strong>

                            <p>
                                {sections.furtherReading.text}{" "}
                                <a
                                    href={sections.furtherReading.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {sections.furtherReading.linkText}
                                </a>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
