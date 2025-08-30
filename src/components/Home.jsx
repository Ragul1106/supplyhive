import React, {useEffect} from "react";
import Banner from '../components/Banner'
import StationerySection from '../components/StationerySection'
import ProductCategories from '../components/ProductCategories'
import Trending from '../components/Trending'
import Testimonial from "../components/Testimonial";
import TeamSection from "../components/TeamSection";
import BackToSchool from "../components/BackToSchool";
import FeaturedProduct from "../components/FeaturedProduct";

export default function Home() {
   useEffect(() => {
      document.title = 'Home | SupplyHive';
    }, []);

  return (
     <> 
     <Banner />
     <StationerySection />
     <ProductCategories />
     <FeaturedProduct />
     <Trending />
     <Testimonial />
     <BackToSchool />
     <TeamSection />
    </>
  );
}







// {sidebarOpen && (
//           <div className="absolute left-4 top-12 bg-white  rounded-lg w-48 z-30">
//             <div className="bg-[#097afa] px-6 py-2 mb-10 rounded-xl text-white">
//               <h2 className="text-lg font-bold mb-4">Categories</h2>
//               <ul className="space-y-2 mb-6">
//                 {categories.map((c, i) => (
//                   <li key={i} className="cursor-pointer hover:underline">{c}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}