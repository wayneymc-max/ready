
import styles from "./page.module.css";

export const metadata = {
    title: "Privacy Policy | FODMAP Guide",
    description:
        "Learn how FODMAP Guide handles visitor information, cookies, and privacy.",
};

export default function PrivacyPolicy() {
    return (
        <main className={styles.container}>
            <h1>Privacy Policy</h1>

            <p className={styles.updated}>
                Last updated: November 8, 2026
            </p>

            <p>
                Welcome to FODMAP Guide. Your privacy is important to us.
                This Privacy Policy explains how information may be handled
                when you visit our website.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
                FODMAP Guide does not currently require visitors to create
                accounts or submit personal information to browse the website.
                We do not directly collect personal information through forms.
            </p>

            <h2>2. Cookies and Tracking Technologies</h2>
            <p>
                FODMAP Guide does not currently use Google Analytics or
                advertising cookies. Our hosting provider may use technical
                information necessary to operate, secure, and maintain the
                website.
            </p>

            <h2>3. Third-Party Services</h2>
            <p>
                Our website is hosted by a third-party hosting provider.
                That provider may process technical information, including
                IP addresses and server logs, as necessary to provide
                hosting and security services.
            </p>

            <h2>4. Advertising</h2>
            <p>
                FODMAP Guide does not currently display third-party
                advertisements. If advertising services such as Google
                AdSense are introduced, this Privacy Policy will be updated
                to explain their use of cookies and other technologies.
            </p>

            <h2>5. External Links</h2>
            <p>
                Our website may contain links to external websites.
                We are not responsible for the privacy practices or content
                of those websites.
            </p>

            <h2>6. Children's Privacy</h2>
            <p>
                FODMAP Guide is not specifically directed toward children
                and does not knowingly collect personal information from
                children.
            </p>

            <h2>7. Changes to This Policy</h2>
            <p>
                We may update this Privacy Policy as our website and
                services develop. Any changes will be published on this page.
            </p>

            <h2>8. Contact</h2>
            <p>
                If you have questions about this Privacy Policy, please
                contact us using the contact details provided on our website.
            </p>
        </main>
    );
}
