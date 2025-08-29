import React from "react";
import img1 from "../assets/images/diary.jpg"; 
import img2 from "../assets/images/dairy_pen.jpg";
import img3 from "../assets/images/notepad.jpg";

export default function SchoolTools() {
  return (
    <section className="w-full bg-white px-4 py-12 md:py-16 lg:py-20">
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
          Tools For School, Fuel For Success
        </h2>
        <p className="mt-4 text-black text-sm md:text-lg">
          We Provide quality stationary and school supplies to support learning, creativity, and organization. From
          <br />
          Classrooms to home desks, we're here to help students and educators stay prepared and inspired.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-7xl mx-auto">
        <div className="rounded-lg overflow-hidden shadow-sm">
          <img
            src={img1}
            alt="Tools1"
            className="w-full h-56 sm:h-64 md:h-72 object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm">
          <img
            src={img2}
            alt="Tools2"
            className="w-full h-56 sm:h-64 md:h-72 object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm">
          <img
            src={img3}
            alt="Tools3"
            className="w-full h-56 sm:h-64 md:h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
