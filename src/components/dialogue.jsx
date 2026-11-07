'use client'

import styles from './dialogue.module.css'
import { useEffect, useState } from "react";

export default function Dialogue({ currentFood }) {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        setOpen(true);
    }, [currentFood]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    if (!currentFood || !open) return null;

    const level = currentFood.overallFodmapLevel?.toLowerCase();

    const colors = {
        low: styles.low,
        medium: styles.medium,
        high: styles.high
    };

    const levelText = {
        low: "low FODMAP",
        medium: "medium FODMAP",
        high: "high FODMAP"
    };

    // Serving sizes
    const servings = [
        {
            label: "Low",
            value: currentFood.lowFodmapServing,
            color: styles.lowServing
        },
        {
            label: "Medium",
            value: currentFood.mediumFodmapServing,
            color: styles.mediumServing
        },
        {
            label: "High",
            value: currentFood.highFodmapServing,
            color: styles.highServing
        }
    ].filter(serving => serving.value);

    return (
        <div
            className={styles.dialogueOverlay}
            onClick={() => setOpen(false)}
        >
            <div
                className={styles.dialogueContainer}
                role="dialog"
                aria-modal="true"
                aria-labelledby="food-title"
                onClick={(e) => e.stopPropagation()}
            >

                <div className={styles.dragHandle}></div>

                {/* HEADER */}
                <div className={styles.dialogueHeader}>

                    <div className={`${styles.levelSquare} ${colors[level] || ''}`}></div>

                    <h2 id="food-title" className={styles.dialogueTitle}>
                        {currentFood.name}
                    </h2>

                    <button
                        className={styles.closeButton}
                        onClick={() => setOpen(false)}
                        aria-label="Close"
                    >
                        &times;
                    </button>

                </div>

                {/* BODY */}
                <div className={styles.dialogueBody}>

                    {/* FOOD INFORMATION */}
                    <div className={styles.infoCard}>

                        {currentFood.image && (
                            <img
                                src={`/images/${currentFood.image}`}
                                alt={currentFood.name}
                                className={styles.dialogueImage}
                            />
                        )}

                        <div className={styles.foodInfo}>

                            <span className={`${styles.levelBadge} ${colors[level] || ''}`}>
                                {levelText[level] || "Unknown FODMAP level"}
                            </span>

                            <p className={styles.levelDescription}>
                                Normal servings of this food contain{" "}
                                <strong>
                                    {levelText[level] || "unknown FODMAP"}
                                </strong>{" "}
                                levels.
                            </p>

                            {currentFood.description && (
                                <p className={styles.foodNote}>
                                    <strong>Note:</strong>{" "}
                                    {currentFood.description}
                                </p>
                            )}

                        </div>

                    </div>

                    {/* SERVING SIZES */}
                    {servings.length > 0 && (
                        <div className={styles.servingsContainer}>

                            <h3 className={styles.servingsTitle}>
                                Serving Sizes
                            </h3>

                            <div className={styles.servingsList}>

                                {servings.map((serving) => (
                                    <div
                                        key={serving.label}
                                        className={styles.servingRow}
                                    >

                                        <span className={`${styles.servingLabel} ${serving.color}`}>
                                            {serving.label}
                                        </span>

                                        <span className={styles.servingValue}>
                                            {serving.value}
                                        </span>

                                    </div>
                                ))}

                            </div>

                        </div>
                    )}

                </div>

            </div>
        </div>
    );
}