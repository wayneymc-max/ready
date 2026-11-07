'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import styles from './error.module.css'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <main className={styles.errorPage}>
            <div className={styles.errorContainer}>

                <div className={styles.iconWrapper}>
                    <span className={styles.errorIcon}>!</span>
                </div>

                <span className={styles.errorLabel}>
                    ERROR
                </span>

                <h1 className={styles.title}>
                    Something went wrong
                </h1>

                <p className={styles.description}>
                    Sorry, something unexpected happened.
                    Please try again. If the problem continues,
                    return to the homepage.
                </p>

                <div className={styles.actions}>
                    <button
                        className={styles.retryButton}
                        onClick={() => reset()}
                    >
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
                            <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
                            <path d="M3 3v5h5" />
                        </svg>

                        Try again
                    </button>

                    <Link
                        href="/"
                        className={styles.homeButton}
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        </main>
    )
}