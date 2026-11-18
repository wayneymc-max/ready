
import styles from "./page.module.css";

export const metadata = {
    title: "Contact Us | FODMAP Guide",
    description:
        "Contact FODMAP Guide with questions, feedback, or suggestions about the website.",
    alternates: {
        canonical: "https://fodmapguide.com/contact",
    },
};

export default function ContactPage() {
    return (
        <main className={styles.container}>
            <h1>Contact Us</h1>

            <p>
                Have a question, suggestion, or feedback about FODMAP Guide?
                We'd love to hear from you.
            </p>

            <h2>Get in Touch</h2>

            <p>
                For general inquiries, feedback, or website-related questions,
                you can reach us by email:
            </p>

            <p>
                <a
                    className={styles.email}
                    href="mailto:wayneymc@gmail.com"
                >
                    wayneymc@gmail.com
                </a>
            </p>

            <p>
                We appreciate your feedback and suggestions as we continue
                improving FODMAP Guide.
            </p>
        </main>
    );
}
