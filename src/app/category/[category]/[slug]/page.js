import foods from "@/data/foods.json";
import FoodSection from "@/components/foodSection";
import Dialogue from "@/components/dialogue";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

export async function generateMetadata({ params }) {
    const { category, slug } = await params;

    const currentFood = foods.find(
        (food) => food.category === category && food.slug === slug
    );

    if (!currentFood) {
        return {};
    }

    const canonicalUrl = `https://fodmapguide.com/category/${category}/${slug}`;

    return {
        title: `${currentFood.name} | FODMAP Guide`,
        description:
            currentFood.description ||
            `Learn about the FODMAP level and serving information for ${currentFood.name}.`,
        alternates: {
            canonical: canonicalUrl,
        },
    };
}

export default async function FoodPage({ params }) {
    const { category, slug } = await params;

    const filtered = foods.filter(
        (food) => food.category === category
    );

    const currentFood = filtered.find(
        (food) => food.slug === slug
    );

    if (!currentFood) {
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

            <Dialogue currentFood={currentFood} />

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