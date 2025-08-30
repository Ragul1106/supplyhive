import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function HelpSupport() {
   useEffect(() => {
      document.title = 'Help & Support | SupplyHive';
    }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your ticket is received. We will solve your issue in a few hours.");
    setFormData({ name: "", email: "", issue: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mt-20 from-gray-50 to-blue-50 flex items-center justify-center px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Help & Support
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Submit your issue below and our team will get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Issue</label>
            <textarea
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Describe your issue"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 cursor-pointer rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Submit Ticket
          </button>
        </form>
      </div>
    </div>
  );
}
