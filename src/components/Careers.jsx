import React from "react";
import { motion } from "framer-motion";

export default function Careers() {
  return (
    <div className="w-full mt-20">
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold"
        >
          Join Our Team at SupplyHive 🚀
        </motion.h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          We’re building the future of supply chain management.  
          Come shape it with us!
        </p>
      </section>

      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Work With Us?</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At SupplyHive, we value creativity, collaboration, and growth.  
          Together, we thrive as a team while making an impact globally.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-600">Innovation</h3>
            <p className="mt-3 text-gray-500">
              Work on cutting-edge tech solving real-world problems.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-500">Growth</h3>
            <p className="mt-3 text-gray-500">
              Learn, grow, and achieve your career goals with us.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-500">Team Spirit</h3>
            <p className="mt-3 text-gray-500">
              Be part of a supportive and collaborative work culture.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Open Roles 🎯
        </h2>
        <div className="mt-10 max-w-4xl mx-auto space-y-6">
          <div className="p-6 border rounded-xl hover:shadow-lg transition flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-purple-600">Frontend Developer</h3>
              <p className="text-gray-500">Remote · Full-Time</p>
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              Apply Now
            </button>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-pink-500">Backend Engineer</h3>
              <p className="text-gray-500">India · Full-Time</p>
            </div>
            <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
              Apply Now
            </button>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-indigo-500">UI/UX Designer</h3>
              <p className="text-gray-500">Hybrid · Contract</p>
            </div>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Perks & Benefits 💡
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600">Health Insurance</h3>
            <p className="mt-3 text-gray-500">Comprehensive medical coverage.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-green-600">Work Flexibility</h3>
            <p className="mt-3 text-gray-500">Remote-friendly & hybrid options.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-orange-500">Learning Stipend</h3>
            <p className="mt-3 text-gray-500">Funds for courses & certifications.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <h2 className="text-3xl font-bold">Ready to Make an Impact?</h2>
        <p className="mt-4">Join SupplyHive and let’s build the future together!</p>
        <button className="mt-6 px-6 py-3 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:bg-gray-100 transition">
          Explore Careers
        </button>
      </section>
    </div>
  );
}
