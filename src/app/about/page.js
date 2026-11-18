
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
    title: "About Us | FODMAP Guide",
    description:
        "Discover the purpose of FODMAP Guide, how our food directory works, what information it provides, and its educational approach to FODMAP foods.",
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return (
        <main className={styles.container}>

            {/* Navigation */}
            <nav className={styles.topNavigation} aria-label="Main navigation">
                <Link href="/" className={styles.homeLink}>
                    <Image
                        src="/FodMaps.jpg"
                        alt="FODMAP Guide logo"
                        width={25}
                        height={25}
                        className={styles.navLogo}
                    />
                    <span>Home</span>
                </Link>

                <Link href="/category" className={styles.directoryLink}>
                    Food Directory
                </Link>
            </nav>

            {/* Introduction */}
            <header className={styles.hero}>
                <span className={styles.eyebrow}>ABOUT OUR WEBSITE</span>

                <h1>About FODMAP Guide</h1>

                <p>
                    FODMAP Guide is an informational website created to
                    make general information about FODMAP foods easier
                    to explore, understand, and navigate. Our food
                    directory brings different food groups together
                    in one organized place, helping visitors find
                    information about individual foods and their
                    classifications.
                </p>
            </header>

            {/* Main content */}
            <div className={styles.content}>

                <section className={styles.contentSection}>
                    <h2>Why We Created FODMAP Guide</h2>

                    <p>
                        Learning about FODMAP foods can involve looking
                        through different food groups, understanding
                        ingredient information, and paying attention
                        to serving sizes. Finding relevant information
                        about individual foods is not always straightforward.
                    </p>

                    <p>
                        We created FODMAP Guide to bring this information
                        into a structured directory. Instead of browsing
                        through unrelated lists, visitors can explore
                        categories and find individual food profiles
                        in a consistent format.
                    </p>

                    <p>
                        Our aim is to make general food information
                        easier to access while encouraging visitors
                        to understand that dietary needs and food
                        tolerance are individual.
                    </p>
                </section>

                <section className={styles.contentSection}>
                    <h2>What You Can Find on This Website</h2>

                    <p>
                        The FODMAP food directory is organized into
                        several categories covering a variety of
                        everyday foods.
                    </p>

                    <ul className={styles.featureList}>
                        <li>
                            <strong>Food categories:</strong> Browse
                            fruits, vegetables, bread and cereals,
                            proteins, dairy products, drinks, nuts,
                            seeds, snacks, and condiments.
                        </li>

                        <li>
                            <strong>Individual food profiles:</strong>
                            Explore descriptions and general information
                            about specific foods.
                        </li>

                        <li>
                            <strong>FODMAP classifications:</strong>
                            Find the classification displayed for
                            individual foods in our directory.
                        </li>

                        <li>
                            <strong>Serving information:</strong>
                            Review available low, medium, and high
                            serving-size information where provided.
                        </li>

                        <li>
                            <strong>Additional food information:</strong>
                            Read relevant notes about common uses
                            and ingredient considerations where available.
                        </li>
                    </ul>

                    <Link href="/category" className={styles.contentLink}>
                        Explore all food categories →
                    </Link>
                </section>

                <section className={styles.contentSection}>
                    <h2>Understanding FODMAP Information</h2>

                    <p>
                        FODMAP is an abbreviation for fermentable
                        oligosaccharides, disaccharides, monosaccharides,
                        and polyols. These are groups of short-chain
                        carbohydrates found in a variety of foods.
                    </p>

                    <p>
                        The low-FODMAP approach is commonly discussed
                        in relation to digestive health, particularly
                        for people with irritable bowel syndrome (IBS).
                        However, the amount of a particular food,
                        its ingredients, and an individual's tolerance
                        can all be relevant when interpreting food
                        information.
                    </p>

                    <p>
                        A classification or serving-size entry on
                        this website should therefore be understood
                        as general reference information, rather than
                        a guarantee that a food will be suitable
                        for every individual.
                    </p>
                </section>

                <section className={styles.contentSection}>
                    <h2>Our Approach to Food Information</h2>

                    <p>
                        We aim to present food information in a clear
                        and consistent format. Each food profile is
                        intended to help visitors identify the food,
                        understand its general description, and review
                        the serving information available in the guide.
                    </p>

                    <p>
                        Not every food has the same amount of
                        information available. Some profiles may
                        include additional ingredient notes or
                        common uses, while others may contain only
                        basic descriptive and serving information.
                    </p>

                    <p>
                        FODMAP information can depend on food variety,
                        preparation, ingredients, and portion size.
                        Visitors should consult reliable specialist
                        resources and qualified professionals when
                        they need information for personal dietary
                        decisions.
                    </p>
                </section>

                <section className={styles.contentSection}>
                    <h2>Is FODMAP Guide a Medical Resource?</h2>

                    <p>
                        No. FODMAP Guide is an educational and
                        informational website. It does not diagnose
                        medical conditions, provide treatment,
                        prescribe diets, or replace consultations
                        with doctors or registered dietitians.
                    </p>

                    <p>
                        The low-FODMAP approach can involve several
                        stages, including restriction, food
                        reintroduction, and personalization. These
                        stages should be undertaken with appropriate
                        professional guidance rather than relying
                        solely on an online food directory.
                    </p>
                </section>

                <section className={styles.contactSection}>
                    <h2>Questions or Feedback?</h2>

                    <p>
                        We welcome feedback about the website and
                        its information. If you have a question,
                        notice an issue, or would like to contact
                        us, please visit our contact page.
                    </p>

                    <Link href="/contact" className={styles.contactButton}>
                        Contact FODMAP Guide →
                    </Link>
                </section>

            </div>

            {/* Medical notice */}
            <aside className={styles.disclaimer}>
                <h2>Important Disclaimer</h2>

                <p>
                    All information on FODMAP Guide is provided
                    for general educational purposes only. It is
                    not medical advice and should not be used as
                    a substitute for professional assessment,
                    diagnosis, or treatment. Food tolerance varies
                    between individuals. Consult a qualified
                    healthcare professional or registered dietitian
                    before making significant dietary changes or
                    starting a low-FODMAP diet.
                </p>
            </aside>

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
                        <Link href="/">Home</Link>
                        <Link href="/category">Food Directory</Link>
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
