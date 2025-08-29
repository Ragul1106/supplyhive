import React from "react";
import noteImg from "../assets/images/notebookset.jpg";
import pinkStationery from "../assets/images/exampad.jpg";
import redSet from "../assets/images/diary.jpg";
import redSet2 from "../assets/images/diary.jpg";
import painting from "../assets/images/drawing-material.jpg";
import scissors from "../assets/images/scissors.jpg";

export default function Trending() {
  const products = [
    { id: 1, img: noteImg, alt: "Notebook Set" },
    { id: 2, img: pinkStationery, alt: "Pink Stationery" },
    { id: 3, img: redSet, alt: "Red Set 1" },
    { id: 4, img: redSet2, alt: "Red Set 2" },
    { id: 5, img: painting, alt: "Painting Tools" },
    { id: 6, img: scissors, alt: "Scissors Set" },
  ];

  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-8">
        Trending
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.alt}
              className="w-full h-48 sm:h-64 lg:h-72 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
