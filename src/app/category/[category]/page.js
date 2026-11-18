
import Link from "next/link";
import foods from "@/data/foods.json";
import FoodSection from "@/components/foodSection";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

const categoryContent = {
    fruits: {
        name: "Fruits",
        description:
            "Explore fruits and their FODMAP classifications, including serving-size information and useful food descriptions. Learn how different fruits fit into a low FODMAP food guide.",
    },
    vegetables: {
        name: "Vegetables",
        description:
            "Discover vegetable FODMAP classifications and available serving-size information. Explore different vegetables and compare their information in one place.",
    },
    "bread-cereals": {
        name: "Bread & Cereals",
        description:
            "Explore breads, cereals, grains and other grain-based foods. Find their FODMAP classifications and available serving information.",
    },
    proteins: {
        name: "Proteins",
        description:
            "Browse protein foods, including meat, fish, eggs and plant-based options. Explore food information and FODMAP classifications.",
    },
    dairies: {
        name: "Dairy",
        description:
            "Explore dairy products and alternatives, with FODMAP classifications and available serving-size information.",
    },
    drinks: {
        name: "Drinks",
        description:
            "Discover information about beverages, including their FODMAP classifications and available serving information.",
    },
    "oils-fats": {
        name: "Oils & Fats",
        description:
            "Browse oils, fats and related food products. Explore their food information and FODMAP classifications.",
    },
    "nuts-seeds": {
        name: "Nuts & Seeds",
        description:
            "Explore nuts and seeds, their FODMAP classifications and available serving-size information.",
    },
    snacks: {
        name: "Snacks",
        description:
            "Discover snack foods and explore their FODMAP classifications, ingredients and available serving information.",
    },
    "condiments-spreads": {
        name: "Condiments & Spreads",
        description:
            "Explore condiments, sauces, spreads and seasonings. Check their food information and FODMAP classifications.",
    },
};

export async function generateMetadata({ params }) {
    const { category } = await params;
    const content = categoryContent[category];

    if (!content) {
        return {
            title: "Category Not Found | FODMAP Guide",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const title = `${content.name} FODMAP Foods | FODMAP Guide`;
    const url = `https://fodmapguide.com/category/${category}`;

    return {
        title,
        description: content.description,

        alternates: {
            canonical: url,
        },

        openGraph: {
            title,
            description: content.description,
            url,
            type: "website",
            siteName: "FODMAP Guide",
        },
    };
}

export default async function CategoryPage({ params }) {
    const { category } = await params;
    const content = categoryContent[category];

    if (!content) {
        notFound();
    }

    const filtered = foods.filter(
        (food) => food.category === category
    );

    if (filtered.length === 0) {
        notFound();
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.content}>



                <FoodSection
                    filtered={filtered}
                    categoryName={content.name}
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
