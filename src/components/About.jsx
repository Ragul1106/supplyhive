import React from "react";
import SchoolTools from "../components/SchoolTools";
import PenPencil from "../components/PenPencil";
import AllStationery from "../components/AllStationery";
import TeamSection from "../components/TeamSection";
import Bag from "../components/bag";
import banner from "../assets/images/about_banner.jpg";

export default function About() {

  return (
      <div className="min-h-screen mt-30 ">
           <div className="w-full mb-6">
             <img
               src={banner}
               alt="Banner"
               className="w-full h-96 max-w-5xl mx-auto rounded-lg shadow-md"
             />
             <h2 className="text-center mt-16 text-lg md:text-3xl font-semibold">
               "Smart Supplies for Bright Futures"
             </h2>
           </div>
        <SchoolTools />
        <PenPencil />
        <Bag /> 
        <AllStationery />
        <TeamSection />
    </div>
  );
}
