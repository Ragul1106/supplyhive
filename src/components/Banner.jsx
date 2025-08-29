import React from "react";
import bannerImg1 from "../assets/images/banner_img1.jpg";
import bannerImg2 from "../assets/images/banner_img2.jpg";
import bannerBag from "../assets/images/banner_img_bag.png";

export default function Banner() {
  return (
    <div className="relative w-full max-w-[1350px] mx-auto bg-white overflow-hidden mt-20 md:px-3 ">

      <div className="flex flex-col items-center gap-6 lg:hidden">
        <p className="text-center text-base sm:text-lg font-medium text-black">
          "Your Partner in Paper and Beyond."
        </p>

        <img
          src={bannerImg1}
          alt="Paper Products"
          className="w-[220px] sm:w-[300px] rounded-md shadow-md"
        />

        <div className="bg-[#f43333] px-6 py-3 rounded-xl text-base sm:text-lg font-semibold text-white text-center shadow-lg">
          Upto 50% off on <br /> Bulk Order
        </div>

        <div className="flex -space-x-16">
          <img
            src={bannerBag}
            alt="Bag"
            className="w-[150px] sm:w-[200px]"
          />
          <img
            src={bannerBag}
            alt="Bag"
            className="w-[150px] sm:w-[200px]"
          />
        </div>

        <img
          src={bannerImg2}
          alt="Stationery"
          className="w-[220px] sm:w-[320px] rounded-md shadow-md"
        />

        <p className="text-center text-base sm:text-lg font-medium text-black">
          "Quality Supplies. Delivered in Bulk."
        </p>
      </div>

      <div className="hidden lg:block relative h-[500px]">
        <p className="absolute top-[50px] left-[20px] text-3xl font-medium text-black leading-relaxed">
          "Your Partner in Paper and Beyond."
        </p>

        <img
          src={bannerImg1}
          alt="Paper Products"
          className="absolute top-[150px] left-0 w-[380px] h-auto object-cover rounded-md shadow-md"
        />

        <div className="absolute top-[100px] left-[470px] bg-[#f43333] px-6 py-2 rounded-xl text-3xl font-semibold text-black text-center leading-tight shadow-lg">
          Upto 50% off on <br /> Bulk Order
        </div>

        <div className="absolute top-[180px] left-[330px] flex z-10">
          <img
            src={bannerBag}
            alt="Bag"
            className="w-[320px] h-auto"
          />
          <img
            src={bannerBag}
            alt="Bag"
            className="w-[320px] h-auto -ml-[100px]"
          />
        </div>

        <img
          src={bannerImg2}
          alt="Stationery"
          className="absolute top-[20px] right-[20px] w-[440px] h-auto object-cover rounded-md shadow-md"
        />

        <p className="absolute bottom-[40px] left-[580px] text-3xl font-medium text-black leading-relaxed">
          "Quality Supplies. Delivered in Bulk."
        </p>
      </div>
    </div>
  );
}
