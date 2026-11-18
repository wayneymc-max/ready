import Link from "next/link";
import OverAll from "@/components/overAll";
import styles from "./page.module.css";
import Image from "next/image";
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

export const metadata = {
    title: "FODMAP Food Categories | Explore the Food Guide",
    description:
        "Explore the FODMAP food directory by category. Browse fruits, vegetables, grains, proteins, dairy, drinks, nuts, snacks and more, with food information and serving-size details.",
    alternates: {
        canonical: "/category",
    },
    openGraph: {
        title: "FODMAP Food Categories | FODMAP Guide",
        description:
            "Browse food categories and explore FODMAP classifications, serving information and ingredient guidance.",
        url: "/category",
        type: "website",
        siteName: "FODMAP Guide",
    },
};

const faqs = [
    {
        question: "Does FODMAP Guide replace a doctor or dietitian?",
        answer:
            "No. FODMAP Guide is an educational food-information resource. It does not diagnose medical conditions, provide individual treatment, or replace advice from a qualified healthcare professional. If you have ongoing digestive symptoms or are considering dietary changes, speak with a doctor or registered dietitian.",
    },
    {
        question: "What does FODMAP mean?",
        answer:
            "FODMAP stands for fermentable oligosaccharides, disaccharides, monosaccharides and polyols. These are types of short-chain carbohydrates found in a variety of foods. Some people experience digestive symptoms when consuming certain FODMAPs, and individual responses can differ.",
    },
    {
        question: "Why do serving sizes matter?",
        answer:
            "The amount of a food eaten can affect the amount of FODMAPs consumed. A food may have different classifications at different serving sizes. Always read the serving information alongside the food classification rather than relying on a simple low, medium or high label.",
    },
    {
        question: "Does a low FODMAP classification mean a food is suitable for everyone?",
        answer:
            "No. Food tolerance varies from person to person, and a low FODMAP classification does not guarantee that a food will suit everyone. Allergies, other dietary requirements, medical conditions and individual tolerance also matter.",
    },
    {
        question: "How can I find information about a particular food?",
        answer:
            "Start by selecting a category such as fruits, vegetables, grains or drinks. Browse the available foods and select an item to view its information, including its description, classification and any available serving-size details.",
    },
    {
        question: "What information does FODMAP Guide provide?",
        answer:
            "FODMAP Guide organizes food information into categories and provides food descriptions, FODMAP classifications, available serving-size details and ingredient-awareness information. The amount of information available can vary between foods.",
    },
    {
        question: "Can FODMAP information change?",
        answer:
            "Food composition, product ingredients, serving sizes and research information can vary. Packaged products may also differ between brands. Check product labels and consult reliable, up-to-date resources when making dietary decisions.",
    },
];

export default function CategoryPage() {
    return (

        <main className={styles.pageContainer}>

            {/* INTRODUCTION */}

            <section className={styles.introSection}>
                <div className={styles.introContent}>
                    <span className={styles.eyebrow}>
                        EXPLORE THE FOOD DIRECTORY
                    </span>

                    <h1 className={styles.categoriesTitle}>
                        Explore FODMAP Food Categories
                    </h1>

                    <p className={styles.introText}>
                        Understanding the FODMAP content of everyday foods
                        can be an important part of learning about the
                        low FODMAP diet. Our food directory brings
                        information together in one place, making it
                        easier to browse different food groups and
                        explore individual ingredients.
                    </p>

                    <p className={styles.introText}>
                        Choose a category below to explore fruits,
                        vegetables, grains, proteins, dairy products,
                        drinks, snacks and more. Each food entry provides
                        information to help you understand its listed
                        FODMAP classification and available serving-size
                        details.
                    </p>

                    <div className={styles.introNote}>
                        <strong>Helpful to know:</strong> FODMAP
                        classifications and serving information should
                        be considered together. Portion size and
                        individual tolerance can make a difference.
                    </div>
                </div>
            </section>

            {/* FOOD CATEGORIES */}

            <section className={styles.categoriesSection}>
                <div className={styles.sectionHeading}>
                    <span className={styles.eyebrow}>
                        BROWSE THE DIRECTORY
                    </span>

                    <h2>Our Food Categories</h2>

                    <p>
                        Select a food group to discover the foods
                        included in our directory and explore their
                        individual information.
                    </p>
                </div>

                <OverAll foods={foods} />
            </section>

            {/* HOW TO USE THE GUIDE */}

            <section className={styles.guideSection}>
                <div className={styles.sectionHeading}>
                    <span className={styles.eyebrow}>
                        GETTING STARTED
                    </span>

                    <h2>How to Use the FODMAP Food Guide</h2>

                    <p>
                        The directory is designed to make food
                        information easier to browse and understand.
                        You can use these simple steps to explore it.
                    </p>
                </div>

                <div className={styles.guideGrid}>
                    <article className={styles.guideCard}>
                        <span className={styles.stepNumber}>01</span>
                        <h3>Choose a food category</h3>
                        <p>
                            Start with a category that matches the
                            food you want to explore, such as fruits,
                            vegetables, grains or drinks.
                        </p>
                    </article>

                    <article className={styles.guideCard}>
                        <span className={styles.stepNumber}>02</span>
                        <h3>Explore individual foods</h3>
                        <p>
                            Browse the available foods and open an
                            entry to read its description and
                            additional ingredient information.
                        </p>
                    </article>

                    <article className={styles.guideCard}>
                        <span className={styles.stepNumber}>03</span>
                        <h3>Review serving information</h3>
                        <p>
                            Where serving information is available,
                            review it alongside the classification.
                            Do not assume that every portion has
                            the same FODMAP content.
                        </p>
                    </article>
                </div>
            </section>

            {/* ABOUT FODMAP GUIDE */}

            <section className={styles.aboutSection}>
                <div className={styles.aboutContent}>
                    <span className={styles.eyebrow}>
                        ABOUT THIS RESOURCE
                    </span>

                    <h2>About FODMAP Guide</h2>

                    <p>
                        FODMAP Guide is an independent food-information
                        directory created to make it easier to explore
                        everyday foods and understand the terminology
                        used when discussing FODMAP content.
                    </p>

                    <p>
                        Rather than presenting food names alone, the
                        directory brings together descriptions,
                        classifications, serving-size information
                        and ingredient-awareness notes where
                        available. Our aim is to make this
                        information easier to navigate and understand.
                    </p>

                    <p>
                        The guide is intended for general educational
                        purposes. It is not a medical service, and
                        its information should not be used as a
                        substitute for personalized dietary advice.
                    </p>

                    <Link href="/about" className={styles.aboutLink}>
                        Learn more about FODMAP Guide
                        <span aria-hidden="true"> →</span>
                    </Link>
                </div>
            </section>

            {/* FAQ */}

            <section className={styles.faqSection}>
                <div className={styles.sectionHeading}>
                    <span className={styles.eyebrow}>
                        COMMON QUESTIONS
                    </span>

                    <h2>Frequently Asked Questions</h2>

                    <p>
                        Find answers to common questions about
                        FODMAP information, serving sizes and
                        how to use this directory.
                    </p>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <details
                            className={styles.faqItem}
                            key={faq.question}
                        >
                            <summary>
                                <span>{faq.question}</span>
                                <span
                                    className={styles.faqIcon}
                                    aria-hidden="true"
                                >
                                    +
                                </span>
                            </summary>

                            <p>{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* MEDICAL INFORMATION */}

            <section className={styles.medicalNotice}>
                <h2>Important Health Information</h2>

                <p>
                    The information on FODMAP Guide is provided
                    for general educational purposes only. It
                    is not intended to diagnose, treat or prevent
                    any medical condition. Food classifications
                    and serving information may not reflect
                    individual tolerance or every commercially
                    available product.
                </p>

                <p>
                    Consult a qualified healthcare professional
                    or registered dietitian for advice about
                    digestive symptoms, dietary restrictions
                    or whether a particular diet is appropriate
                    for your circumstances.
                </p>
            </section>

            {/* FOOTER */}

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
                        <Link href="/">Home</Link>
                        <Link href="/category">Food Categories</Link>
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