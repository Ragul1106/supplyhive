import React from "react";
import { useNavigate } from "react-router-dom";

export default function CorporatePage() {
    const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br mt-20 from-blue-50 to-purple-100 min-h-screen">
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">
          SupplyHive Corporate
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Building strong partnerships and innovative solutions for a sustainable future.
        </p>
      </section>

      <section className="bg-white rounded-2xl shadow-lg p-10 mx-6 md:mx-20 mb-12">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-4">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At SupplyHive, we empower organizations by creating transparent, inclusive, 
          and innovative supply chain solutions. We work with global partners to drive 
          growth and sustainability, ensuring long-term success for both businesses and communities.
        </p>
      </section>

      <section className="px-6 md:px-20 mb-16">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Integrity</h3>
            <p className="text-gray-600">
              We build trust through honesty, fairness, and respect in every interaction.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Innovation</h3>
            <p className="text-gray-600">
              We embrace new ideas and technologies to solve real-world challenges.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We prioritize eco-friendly and socially responsible solutions for a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-6 mx-4 md:px-20 text-center rounded-t-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Partnering for Global Impact
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          SupplyHive collaborates with corporations, suppliers, and communities worldwide
          to create an inclusive and impactful ecosystem. Together, we can achieve sustainable growth.
        </p>
        <button onClick={() => navigate("/")} className="bg-white cursor-pointer text-purple-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
          Back to Home
        </button>
      </section>
    </div>
  );
}
