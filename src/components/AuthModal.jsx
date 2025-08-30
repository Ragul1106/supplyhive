import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthModal({ onClose }) {
  const panelRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" || e.key === "Enter") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const first = panelRef.current?.querySelector("input");
    first?.focus();
  }, []);

  const handleCreateAccount = () => {
    // close first, then navigate
    onClose();
    // ensure state update queues, then navigate
    setTimeout(() => navigate("/signin"), 0);
  };

  return (
    <div className="fixed inset-0 z- pointer-events-none">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/40 pointer-events-auto"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* panel */}
      <div className="absolute inset-0 flex items-start justify-center pt-24 sm:pt-28">
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          className="mx-4 w-full max-w-md rounded-2xl bg-white shadow-2xl border border-gray-200 pointer-events-auto"
        >
          <div className="px-6 pt-6">
            <h2 className="text-2xl font-semibold text-center">Signin</h2>
            <button
              onClick={handleCreateAccount}
              className="text-center text-2xl block mx-auto cursor-pointer text-red-500 mt-1"
            >
              Create an Account
            </button>
          </div>

          <div className="px-6 pb-6 pt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User name
            </label>
            <input
              type="text"
              placeholder="User name"
              className="w-full rounded-xl border border-black bg-[#78A7FF]/80 text-gray-900 placeholder-gray-800 font-medium px-4 py-5 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-black bg-[#78A7FF]/80 text-gray-900 placeholder-gray-800 font-medium px-4 py-5 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="button"
              onClick={onClose}
              className="mt-5 cursor-pointer mx-auto block w-max rounded-xl bg-[#097AFA] px-6 py-3 text-black font-semibold hover:bg-[#1467cf] focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Submit now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
