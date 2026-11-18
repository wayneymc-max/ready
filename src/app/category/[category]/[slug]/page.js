
import Link from "next/link";
import foods from "@/data/foods.json";
import { getEnrichedFood } from "@/utils/foodUtils";
import FoodSection from "@/components/foodSection";
import Dialogue from "@/components/dialogue";
import { notFound } from "next/navigation";
import styles from "../page.module.css";

const SITE_URL = "https://fodmapguide.com";

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
    const { category, slug } = await params;

    const currentFood = foods.find(
        food => food.category === category && food.slug === slug
    );

    if (!currentFood) {
        return {
            title: "Food Not Found | FODMAP Guide",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const title = `${currentFood.name} FODMAP Information | FODMAP Guide`;
    const description = currentFood.description ||
        `Learn about the FODMAP classification and serving information for ${currentFood.name}.`;

    const url = `https://fodmapguide.com/category/${category}/${slug}`;

    return {
        title,
        description,

        alternates: {
            canonical: url,
        },

        openGraph: {
            title,
            description,
            url,
            type: "article",
            siteName: "FODMAP Guide",
        },
    };
}

export default async function FoodPage({ params }) {
    const { category, slug } = await params;

    const categoryName = categoryNames[category];

    if (!categoryName) {
        notFound();
    }

    const filtered = foods.filter(
        (food) => food.category === category
    );

    const currentFood = filtered.find(
        (food) => food.slug === slug
    );

    if (!currentFood) {
        notFound();
    }

    // Use your existing utility to combine foods.json and extra.json
    const enrichedFood = getEnrichedFood(currentFood);

    if (!enrichedFood) {
        notFound();
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.content}>
                <FoodSection
                    filtered={filtered}
                    categoryName={categoryName}
                />

                <section className={styles.categoryInformation}>
                    <h2>Understanding FODMAP Food Information</h2>

                    <p>
                        FODMAP classifications and serving-size
                        information can help people understand the
                        foods they are exploring. The information
                        displayed in this guide is educational and
                        should not replace individual dietary advice.
                    </p>

                    <p>
                        For further information about FODMAP research
                        and the low FODMAP diet, visit{" "}
                        <a
                            href="https://www.monashfodmap.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Monash University FODMAP
                        </a>.
                    </p>
                </section>
            </div>

            <Dialogue
                currentFood={enrichedFood}
                closeHref={`/category/${category}`}
            />

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
