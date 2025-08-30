import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = 'Terms & Conditions | SupplyHive';
  }, []);

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-24 py-10 mt-20 md:mt-20 lg:mt-20 bg-white ">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Terms & Conditions – SupplyHive
      </h1>
      <p className="text-base text-gray-600 mb-6">
        <span className="font-semibold">Effective Date:</span> 21/08/25
      </p>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Welcome to <span className="font-semibold">SupplyHive</span>. By accessing 
        our website, booking a session, or using our therapy services, you agree 
        to the terms and conditions outlined below. Please read them carefully. 
        If you do not agree, we kindly request that you discontinue using our services.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1. General
      </h2>
      <div className="text-lg text-gray-700 space-y-4 mb-8">
        <p>
          Dee Plus provides online and offline therapy sessions delivered by certified 
          professionals. All services are subject to therapist availability and scheduling.
        </p>
        <p>
          Service descriptions, fees, and availability may be updated from time to time 
          without prior notice.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        2. Bookings & Payments
      </h2>
      <div className="text-lg text-gray-700 space-y-4 mb-8">
        <p>
          Therapy sessions can be booked through our official website or customer support team. 
          Payments must be made in full at the time of booking.
        </p>
        <p>
          We accept major debit/credit cards, UPI, and net banking. All transactions are 
          processed securely through trusted payment gateways.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        3. Cancellations & Rescheduling
      </h2>
      <div className="text-lg text-gray-700 space-y-4 mb-8">
        <p>
          Sessions may be cancelled or rescheduled up to 24 hours before the appointment. 
          Cancellations made after this period may not be eligible for refunds.
        </p>
        <p>
          Emergency cancellations will be considered on a case-by-case basis.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        4. Confidentiality
      </h2>
      <div className="text-lg text-gray-700 space-y-4 mb-8">
        <p>
          All therapy sessions are private and confidential. Dee Plus and its therapists 
          follow professional ethical guidelines to protect client information.
        </p>
        <p>
          Exceptions to confidentiality apply only in cases of immediate harm or as required 
          by law.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        5. Limitation of Services
      </h2>
      <div className="text-lg text-gray-700 space-y-4 mb-8">
        <p>
          Dee Plus provides therapy and wellness support but does not replace emergency 
          medical care. If you are in crisis or require urgent assistance, please contact 
          local emergency services immediately.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        6. Intellectual Property
      </h2>
      <div className="text-lg text-gray-700 space-y-4 mb-8">
        <p>
          All content, images, and resources on the Dee Plus website are the property 
          of Dee Plus and may not be used, copied, or reproduced without prior 
          written consent.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        7. Contact Us
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        For any questions regarding our Terms & Conditions, please contact us at{" "}
        <a href="mailto:support@Supplyhive.com" className="text-blue-600 hover:underline">
          support@Supplyhive.com
        </a>{" "}
        or call <strong>+91-98765-43210</strong>.
      </p>
      
<button
                onClick={() => navigate('/')}
                className="bg-gray-600 hover:bg-blue-500 text-white cursor-pointer px-4 py-2 rounded"
            >
                Back to Home
            </button>
    </div>
  );
};

export default TermsAndConditions;
