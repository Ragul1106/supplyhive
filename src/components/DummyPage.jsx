// src/pages/DummyPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function DummyPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const title = state?.title || "Coming soon";
  const description =
    state?.description ||
    "This page is a placeholder. Content will be available here soon.";
  const img = state?.img || "https://picsum.photos/800/400";
  const cta = state?.cta || "Back to Home";
  const onClick = () => (state?.onClick ? state.onClick() : navigate("/"));

  return (
    <div className="min-h-screen w-full mt-24 px-4 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        {title}
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mb-8">
        {description}
      </p>

      <div className="relative w-full max-w-3xl">
        <img
          src={img}
          alt={title}
          className="w-full h-64 sm:h-80 object-cover rounded-xl shadow"
        />
        {/* optional floating button on image */}
        {/* <button className="absolute bottom-3 right-3 bg-white/90 px-4 py-2 rounded-lg shadow text-sm">
          Learn more
        </button> */}
      </div>

      <button
        type="button"
        onClick={onClick}
        className="mt-8 rounded-xl bg-[#097AFA] px-6 py-3 text-white font-semibold hover:bg-[#1467cf] focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        {cta}
      </button>
    </div>
  );
}
