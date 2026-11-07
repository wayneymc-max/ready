import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
    return (
        <main className={styles.notFoundPage}>
            <div className={styles.container}>

                <div className={styles.iconWrapper}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                        <path d="M8 11h6" />
                    </svg>
                </div>

                <span className={styles.label}>
                    FOOD NOT FOUND
                </span>

                <h1 className={styles.errorCode}>
                    404
                </h1>

                <h2 className={styles.title}>
                    Oops! Food not found
                </h2>

                <p className={styles.description}>
                    We couldn't find the food item you're looking for.
                    It may not exist in our food database, or the link
                    might be incorrect.
                </p>

                <Link href="/" className={styles.homeButton}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m3 10 9-7 9 7" />
                        <path d="M9 21V9h6v12" />
                    </svg>

                    Return to homepage
                </Link>

                <div className={styles.footer}>
                    <span className={styles.footerDot}></span>
                    Let's get you back on track.
                </div>

            </div>
        </main>
    )
}