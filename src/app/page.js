
import Link from "next/link";
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

export default function HomePage() {
  return (
    <main className={styles.homeContainer}>

      {/* Hero section */}
      <section className={styles.hero}>
        <span className={styles.heroLabel}>
          YOUR GUIDE TO FODMAP FOODS
        </span>

        <h1>
          Understand your food.
          <span> Make informed choices.</span>
        </h1>

        <p className={styles.heroDescription}>
          Welcome to your FODMAP food guide! Whether you're
          learning about FODMAPs or exploring different foods,
          we're here to make food information easier to
          understand and navigate.
        </p>
      </section>

      {/* Categories */}
      <section className={styles.categoriesSection}>
        <div className={styles.categoriesHeading}>
          <span className={styles.sectionLabel}>
            EXPLORE OUR FOOD GUIDE
          </span>

          <h2>Explore food categories</h2>

          <p>
            Browse our food categories to discover different
            foods and learn more about their FODMAP levels,
            descriptions, and serving information.
          </p>
        </div>

        <div className={styles.categoriesContainer}>
          {foods.map((food) => (
            <Link
              href={`/category/${food}`}
              key={food}
              className={styles.categoryButton}
            >
              {food.replaceAll("-", " ")}
            </Link>
          ))}
        </div>
      </section>

      {/* What are FODMAPs */}
      <section className={styles.introSection}>
        <span className={styles.sectionLabel}>
          LEARN THE BASICS
        </span>

        <h2>What are FODMAPs?</h2>

        <p>
          FODMAPs are certain types of short-chain carbohydrates
          found in many everyday foods. They can be poorly
          absorbed in the small intestine and may cause digestive
          symptoms such as bloating, gas, and abdominal discomfort
          in some people, particularly those with IBS
          (Irritable Bowel Syndrome).
        </p>

        <p>
          The low-FODMAP approach helps identify which foods
          may trigger symptoms and which may be better tolerated.
          It involves a structured process of food restriction,
          reintroduction, and personalization.
        </p>
      </section>

      {/* Disclaimer */}
      <section className={styles.disclaimer}>
        <h3>Important health information</h3>

        <p>
          <em>
            This website is intended for educational and
            informational purposes only and should not be
            considered medical advice. Food tolerance can
            vary from person to person. If you experience
            persistent digestive symptoms, consult a
            qualified healthcare professional for proper
            assessment and guidance. Before starting a
            low-FODMAP diet or making significant dietary
            changes, seek advice from a registered dietitian
            or healthcare professional. A low-FODMAP diet
            is not intended to be followed strictly
            long-term without professional guidance.
          </em>
        </p>
      </section>

      {/* Footer */}
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

          <nav
            className={styles.footerLinks}
            aria-label="Footer navigation"
          >
            <Link href="/about">About Us</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <p>
            © {new Date().getFullYear()} FODMAP Guide.
            All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
