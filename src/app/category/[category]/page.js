
import Link from "next/link";
import foods from "@/data/foods.json";
import FoodSection from "@/components/foodSection";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

const categoryNames = {
    fruits: "Fruits",
    vegetables: "Vegetables",
    "bread-cereals": "Bread & Cereals",
    proteins: "Proteins",
    dairies: "Dairy",
    drinks: "Drinks",
    "oils-fats": "Oils & Fats",
    "nuts-seeds": "Nuts & Seeds",
    snacks: "Snacks",
    "condiments-spreads": "Condiments & Spreads",
};

export async function generateMetadata({ params }) {
    const { category } = await params;

    const categoryName = categoryNames[category];

    if (!categoryName) {
        return {
            title: "Category Not Found",
        };
    }

    return {
        title: `${categoryName} FODMAP Foods`,

        description:
            `Explore ${categoryName.toLowerCase()} and their FODMAP levels, serving sizes, and food information.`,

        alternates: {
            canonical: `/category/${category}`,
        },

        openGraph: {
            title: `${categoryName} FODMAP Foods | FODMAP Food Guide`,
            description:
                `Explore ${categoryName.toLowerCase()} and their FODMAP levels, serving sizes, and food information.`,
            url: `/category/${category}`,
            type: "website",
            siteName: "FODMAP Food Guide",
        },
    };
}

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
