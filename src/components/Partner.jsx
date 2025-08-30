import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import l1 from "../assets/images/l1.jpg";
import l2 from "../assets/images/l2.webp";
import l3 from "../assets/images/l3.webp";
import l4 from "../assets/images/l4.webp";

const partners = [
  { name: "TechCorp", logo: l1 },
  { name: "BizWorld", logo: l2 },
  { name: "CloudNet", logo: l3 },
  { name: "SoftPro", logo: l4 },
];

export default function PartnerPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your partner request has been received! 🎉 We'll contact you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white mt-20 min-h-screen">
      <section className="text-center py-20 bg-indigo-600 text-white">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Become a SupplyHive Partner
        </motion.h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Join forces with SupplyHive to deliver smarter supply chain solutions worldwide.
        </p>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10 text-indigo-700">
          Our Trusted Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-4"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-36 object-cover mb-3"
              />
              <p className="text-2xl font-medium text-gray-700">{partner.name}</p>
            </motion.div>
          ))}
        </div>
      </section>


      <section className="bg-indigo-50 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10 text-indigo-700">
          Why Partner with SupplyHive?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">Grow Revenue</h3>
            <p className="text-gray-600">
              Access new opportunities and expand your business through our partner ecosystem.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">Global Reach</h3>
            <p className="text-gray-600">
              Connect with clients and partners worldwide through our trusted network.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">Dedicated Support</h3>
            <p className="text-gray-600">
              Get exclusive partner support, training, and co-marketing opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">
          Become a Partner
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-5"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Tell us about your partnership idea"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Submit Partner Request
          </button>
        </form>
      </section>
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Partnership = () => {
//   useEffect(() => {
//     document.title = "Partnership | Supplyhive";
//   }, []);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     organization: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const isValidName = (name) => /^[A-Za-z\s]+$/.test(name);
//   const isValidEmail = (email) =>
//     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { fullName, organization, email, message } = formData;

//     if (!fullName.trim() || !organization.trim() || !email.trim() || !message.trim()) {
//       toast.error("⚠️ Please fill out all fields before submitting.");
//       return;
//     }

//     if (!isValidName(fullName)) {
//       toast.error("⚠️ Name should only contain letters and spaces.");
//       return;
//     }

//     if (!isValidEmail(email)) {
//       toast.error("⚠️ Please enter a valid email address.");
//       return;
//     }

//     toast.success("✅ Partnership request submitted! We will call you soon.");

//     setFormData({
//       fullName: "",
//       organization: "",
//       email: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="bg-[#fdf6f9] min-h-screen py-12 px-6 sm:px-12 lg:px-20">
//       <div className="text-center mb-12">
//         <h1 className="text-3xl sm:text-4xl font-bold text-[#6F145F] mb-4">
//           Partner with Supplyhive
//         </h1>
//         <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto">
//           At Supplyhive, we believe in building meaningful collaborations to
//           expand our impact in the mental wellness and therapy ecosystem. Join
//           us as a partner and contribute to transforming lives.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8 mb-16">
//         <div className="bg-white shadow-md rounded-2xl p-6">
//           <h2 className="text-xl font-semibold text-[#6F145F] mb-3">
//             Why Partner With Us?
//           </h2>
//           <ul className="list-disc list-inside text-gray-700 space-y-2">
//             <li>Access to our growing community of therapy seekers.</li>
//             <li>Collaborate with certified therapists and experts.</li>
//             <li>Co-branding opportunities on workshops & webinars.</li>
//             <li>Data-driven insights for better engagement.</li>
//           </ul>
//         </div>

//         <div className="bg-white shadow-md rounded-2xl p-6">
//           <h2 className="text-xl font-semibold text-[#6F145F] mb-3">
//             Who Can Partner?
//           </h2>
//           <ul className="list-disc list-inside text-gray-700 space-y-2">
//             <li>Healthcare organizations</li>
//             <li>Corporate wellness programs</li>
//             <li>Universities & educational institutions</li>
//             <li>Non-profit organizations</li>
//             <li>Individual mental health professionals</li>
//           </ul>
//         </div>
//       </div>

//       <div className="bg-white shadow-md rounded-2xl p-8 max-w-3xl mx-auto">
//         <h2 className="text-2xl font-semibold text-[#6F145F] mb-6 text-center">
//           Partnership Inquiry Form
//         </h2>
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6F145F]"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Organization / Company
//             </label>
//             <input
//               type="text"
//               name="organization"
//               value={formData.organization}
//               onChange={handleChange}
//               placeholder="Enter your organization name"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6F145F]"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6F145F]"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Message
//             </label>
//             <textarea
//               rows="4"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Tell us how you would like to collaborate"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6F145F]"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="bg-[#6F145F] text-white cursor-pointer font-semibold px-6 py-3 rounded-lg hover:bg-[#4a0f42] transition"
//           >
//             Submit Partnership Request
//           </button>
//         </form>
//       </div>

//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// };

// export default Partnership;
