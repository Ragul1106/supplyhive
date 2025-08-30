import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Privacy Policy | SupplyHive";
    }, []);

    return (
        <div className="max-w-7xl mx-auto mt-20 p-4 md:p-6 lg:p-8">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg mb-6">Effective Date: 21/08/25</p>

            <h2 className="text-2xl font-bold mb-4">1. Collection of Personal Data</h2>
            <p className="text-lg mb-2">
                We collect personal data from you when you:
            </p>
            <ul className="list-disc ml-6 mb-6 text-lg">
                <li>Register or create an account on our website</li>
                <li>Place an order or make a purchase</li>
                <li>Contact us via email, phone, or support form</li>
                <li>Subscribe to our newsletters or marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">2. Use of Personal Data</h2>
            <p className="text-lg mb-2">We use your personal data to:</p>
            <ul className="list-disc ml-6 mb-6 text-lg">
                <li>Provide and deliver our products and services</li>
                <li>Process transactions and manage your orders</li>
                <li>Communicate with you regarding your purchases and inquiries</li>
                <li>Improve our website, services, and customer experience</li>
                <li>Send you relevant updates, offers, and promotional content</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">3. Protection of Personal Data</h2>
            <p className="text-lg mb-2">
                We take appropriate technical and organizational measures to safeguard
                your personal data, including:
            </p>
            <ul className="list-disc ml-6 mb-6 text-lg">
                <li>Secure servers and encrypted databases</li>
                <li>Encryption of sensitive data such as payment information</li>
                <li>Access control and authentication procedures</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">4. Sharing of Personal Data</h2>
            <p className="text-lg mb-2">We do not sell or rent your data. We may share personal data only in the following cases:</p>
            <ul className="list-disc ml-6 mb-6 text-lg">
                <li>With your explicit consent</li>
                <li>With trusted third-party providers (e.g., payment gateways, shipping partners)</li>
                <li>When required by law, regulation, or government request</li>
                <li>To protect the safety, rights, or property of SupplyHive and our users</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="text-lg mb-2">As a user, you have the right to:</p>
            <ul className="list-disc ml-6 mb-6 text-lg">
                <li>Access and request a copy of the personal data we hold about you</li>
                <li>Request corrections or updates to inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing and promotional communications</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
            <p className="text-lg mb-6">
                We retain your personal data only for as long as necessary to fulfill
                the purposes outlined in this policy or as required by law. Once data is
                no longer needed, it will be securely deleted or anonymized.
            </p>

            <h2 className="text-2xl font-bold mb-4">7. Third-Party Services</h2>
            <p className="text-lg mb-6">
                Our website may contain links to third-party services or websites. We
                are not responsible for the privacy practices of these third parties and
                encourage you to review their policies before sharing personal
                information.
            </p>

            <h2 className="text-2xl font-bold mb-4">8. Changes to this Policy</h2>
            <p className="text-lg mb-6">
                We may update this Privacy Policy from time to time. Any changes will be
                posted on this page with the updated effective date. Continued use of
                our services after changes implies your acceptance of the revised
                policy.
            </p>

            <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
            <p className="text-lg mb-2">
                If you have any questions, concerns, or requests regarding this Privacy
                Policy, please contact us:
            </p>
            <ul className="list-disc ml-6 mb-6 text-lg">
                <li>
                    Email:{" "}
                    <a
                        href="mailto:support@SupplyHive.com"
                        className="text-blue-600 underline"
                    >
                        support@SupplyHive.com
                    </a>
                </li>
                <li>Phone: +91-98765-43210</li>
            </ul>

            <button
                onClick={() => navigate('/')}
                className="bg-gray-600 hover:bg-blue-500 text-white cursor-pointer px-4 py-2 rounded"
            >
                Back to Home
            </button>
        </div>
    );
};

export default PrivacyPolicy;
