
import Link from "next/link";
import foods from "@/data/foods.json";
import FoodSection from "@/components/foodSection";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export default async function CategoryPage({ params }) {
    const { category } = await params;

    const filtered = foods.filter(
        food => food.category === category
    );

    if (filtered.length === 0) {
        notFound();
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.content}>
                <FoodSection
                    filtered={filtered}
                    categoryName={category}
                />
            </div>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerBrand}>
                        <Link href="/" className={styles.footerLogo}>
                            FODMAP Guide
                        </Link>

                        <p>
                            Making FODMAP food information easier
                            to explore and understand.
                        </p>
                    </div>

                    <nav className={styles.footerLinks}>
                        <Link href="/about">About Us</Link>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/contact">Contact Us</Link>
                    </nav>
                </div>

                <div className={styles.footerBottom}>
                    © {new Date().getFullYear()} FODMAP Guide.
                    All rights reserved.
                </div>
            </footer>
        </div>
    );
}
