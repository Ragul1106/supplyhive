import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CookiePolicy = () => {
  useEffect(() => {
    document.title = "Cookie Policy | SupplyHive";
  }, []);

  const navigate = useNavigate();


  return (
    <div className="max-w-7xl mx-auto mt-20 p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
      <p className="text-lg mb-4">Effective Date: 21/08/25</p>

      <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
      <p className="text-lg mb-4">
        Cookies are small text files that are stored on your device when you
        visit our website. They help us provide a better user experience by
        remembering your preferences and enabling essential site functionality.
      </p>

      <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>
      <p className="text-lg mb-4">
        We use the following types of cookies:
        <ul className="list-disc ml-4">
          <li>
            <strong>Essential Cookies:</strong> Necessary for the website to
            function properly.
          </li>
          <li>
            <strong>Performance Cookies:</strong> Help us analyze how visitors
            use our website so we can improve functionality.
          </li>
          <li>
            <strong>Functional Cookies:</strong> Allow us to remember your
            preferences (e.g., language, region).
          </li>
          <li>
            <strong>Advertising Cookies:</strong> Used to deliver relevant ads
            and track ad performance.
          </li>
        </ul>
      </p>

      <h2 className="text-2xl font-bold mb-4">3. How We Use Cookies</h2>
      <p className="text-lg mb-4">
        Cookies are used to:
        <ul className="list-disc ml-4">
          <li>Provide a secure and smooth browsing experience</li>
          <li>Understand how users interact with our website</li>
          <li>Remember your preferences and settings</li>
          <li>Deliver relevant marketing and promotions</li>
        </ul>
      </p>

      <h2 className="text-2xl font-bold mb-4">4. Managing Cookies</h2>
      <p className="text-lg mb-4">
        You can manage or disable cookies through your browser settings.
        However, please note that disabling cookies may affect the functionality
        and performance of our website.
      </p>

      <h2 className="text-2xl font-bold mb-4">5. Third-Party Cookies</h2>
      <p className="text-lg mb-4">
        We may use third-party service providers (such as analytics or
        advertising partners) who set cookies on our website to provide their
        services.
      </p>

      <h2 className="text-2xl font-bold mb-4">6. Your Consent</h2>
      <p className="text-lg mb-4">
        By continuing to use our website, you consent to our use of cookies in
        accordance with this Cookie Policy. You can withdraw your consent at any
        time by adjusting your browser settings.
      </p>

      <h2 className="text-2xl font-bold mb-4">7. Updates to This Policy</h2>
      <p className="text-lg mb-4">
        We may update this Cookie Policy from time to time. Any changes will be
        posted on this page with an updated effective date.
      </p>

      <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
      <p className="text-lg mb-4">
        If you have any questions about this Cookie Policy, please contact us at:
        <ul className="list-disc ml-4">
          <li>
            Email:{" "}
            <a href="mailto:support@Supplyhive.com">
              support@Supplyhive.com
            </a>
          </li>
          <li>Phone: +91-98765-43210</li>
        </ul>
      </p>
      

      <button 
      onClick={() => navigate('/')}
        className="bg-gray-600 hover:bg-blue-500 text-white cursor-pointer px-4 py-2 rounded">
        Back to Home
      </button>
    </div>
  );
};

export default CookiePolicy;
