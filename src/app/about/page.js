
import styles from "./page.module.css";

export const metadata = {
    title: "About Us | FODMAP Guide",
    description:
        "Learn about FODMAP Guide and its goal of making low FODMAP food information easier to understand.",
};

export default function AboutPage() {
    return (
        <main className={styles.container}>
            <h1>About FODMAP Guide</h1>

            <p>
                Welcome to FODMAP Guide, a resource designed to make
                information about FODMAP foods easier to explore and
                understand.
            </p>

            <h2>Our Purpose</h2>
            <p>
                Finding suitable foods while following a low FODMAP
                approach can be confusing. Our goal is to organize food
                information in one place, making it easier to browse
                different categories and learn about FODMAP levels.
            </p>

            <h2>Explore Food Information</h2>
            <p>
                You can explore foods across categories such as fruits,
                vegetables, grains, proteins, dairy products, drinks,
                nuts, seeds, and more.
            </p>

            <h2>Educational Information</h2>
            <p>
                FODMAP Guide is intended for general educational
                purposes only. It does not provide medical advice,
                diagnosis, or treatment. Food tolerance can vary from
                person to person, so consult a qualified healthcare
                professional or registered dietitian for personal
                guidance.
            </p>

            <h2>Our Goal</h2>
            <p>
                We aim to make food information clear, organized,
                and accessible so visitors can make more informed
                decisions about what they eat.
            </p>
        </main>
    );
}
