import Link from "next/link";
import OverAll from "@/components/overAll";
import styles from "./page.module.css";

const foods = [
    "fruits",
    "vegetables",
    "bread-cereals",
    "proteins",
    "dairies",
    "drinks",
    "oils-fats",
    "nuts-seeds",
    "snacks",
    "condiments-spreads",
];

export default function Home() {
    return (
        <main className={styles.pageContainer}>

            <h1 className={styles.categoriesTitle}>
                Our Food Categories
            </h1>

            <OverAll foods={foods} />

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
        </main>
    );
}