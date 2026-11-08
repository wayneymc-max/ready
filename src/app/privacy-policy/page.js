
import styles from "./page.module.css";

export const metadata = {
    title: "Privacy Policy | FODMAP Guide",
    description:
        "Learn how FODMAP Guide handles visitor information, cookies, advertising, and privacy.",
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

            <p>
                Our hosting provider and third-party services may process
                technical information, such as IP addresses, browser
                information, device information, and server logs, as necessary
                to operate and maintain the website.
            </p>

            <h2>2. Cookies and Tracking Technologies</h2>
            <p>
                FODMAP Guide may use cookies and similar technologies
                provided by third-party services. These technologies may
                help operate the website, improve its functionality, and
                support advertising services.
            </p>

            <p>
                Third-party providers may use cookies to collect information
                about visitors' browsing activity. Visitors can manage
                cookies through their browser settings and available
                consent preferences.
            </p>

            <h2>3. Third-Party Services</h2>
            <p>
                Our website is hosted by a third-party hosting provider.
                That provider may process technical information, including
                IP addresses and server logs, as necessary to provide
                hosting, security, and website maintenance services.
            </p>

            <h2>4. Advertising and Google AdSense</h2>
            <p>
                FODMAP Guide may display advertisements provided by
                third-party advertising services, including Google AdSense.
            </p>

            <p>
                Google and its advertising partners may use cookies and
                similar technologies to serve advertisements, measure
                advertising performance, and improve advertising services.
            </p>

            <p>
                Third-party vendors, including Google, may use cookies to
                serve advertisements based on a visitor's previous visits
                to this website or other websites.
            </p>

            <p>
                Visitors can manage or opt out of personalized advertising
                through Google's Ads Settings:
                {" "}
                <a
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Google Ads Settings
                </a>.
            </p>

            <p>
                Visitors can also learn more about opting out of
                personalized advertising from participating third-party
                advertising companies through:
                {" "}
                <a
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Your Ad Choices
                </a>.
            </p>

            <p>
                To learn more about how Google uses information from
                websites and apps that use its services, visit:
                {" "}
                <a
                    href="https://policies.google.com/technologies/partner-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    How Google uses information from sites or apps that use
                    its services
                </a>.
            </p>

            <h2>5. External Links</h2>
            <p>
                Our website may contain links to external websites.
                We are not responsible for the privacy practices or content
                of those websites. Visitors should review the privacy
                policies of external websites they visit.
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
                services develop. Any changes will be published on this page,
                together with an updated revision date.
            </p>

            <h2>8. Contact</h2>
            <p>
                If you have questions about this Privacy Policy, please
                contact us using the contact details provided on our website.
            </p>
        </main>
    );
}
