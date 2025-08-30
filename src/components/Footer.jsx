import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import playstore from "../assets/images/playstore.png";
import appstore from "../assets/images/applestore.png";
import chennai from "../assets/images/chennai.avif";
import Bengaluru from "../assets/images/bengaluru.jpg";
import Coimbatore from "../assets/images/kolkata.jpg";
import kolkata from "../assets/images/kolkata.jpg";

export default function Footer() {
  const S = (title, img, cta = "Back to Home", description) => ({
    state: {
      title,
      img: img || "https://picsum.photos/800/400",
      cta,
      description:
        description ||
        "This is a placeholder page. We’ll add full content here soon.",
    },
  });

  return (
    <footer className="bg-white mt-10 border-t border-gray-200 px-6 sm:px-10 lg:px-20 xl:px-28 py-12">
      <div className="mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
          <img
            src={logo}
            alt="Supplyhive Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 lg:w-15 lg:h-15 rounded-full object-cover border-2 border-black mb-3 sm:mb-0"
          />
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold leading-snug">
            Supplyhive <br />
            <span className="text-xs sm:text-sm text-gray-600 font-normal">
              2025 Supplyhive Limited
            </span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 md:gap-16 text-sm sm:text-base">
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/about" {...S("About us", "https://picsum.photos/id/1015/800/400")} className="hover:text-black transition">
                About us
              </Link>
            </li>
            <li>
              <Link to="/corporate" {...S("Supplyhive corporate", "https://picsum.photos/id/1003/800/400")} className="hover:text-black transition">
                Supplyhive corporate
              </Link>
            </li>
            <li>
              <Link to="/careers" {...S("Careers", "https://picsum.photos/id/1011/800/400", "View openings")} className="hover:text-black transition">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/team" {...S("Team", "https://picsum.photos/id/1027/800/400")} className="hover:text-black transition">
                Team
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact us</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/help" {...S("Help & Support", "https://picsum.photos/id/1062/800/400", "Contact us")} className="hover:text-black transition">
                Help & Support
              </Link>
            </li>
            <li>
              <Link to="/partner" {...S("Partner with us", "https://picsum.photos/id/1025/800/400", "Get in touch")} className="hover:text-black transition">
                Partner with us
              </Link>
            </li>
            <li>
              <Link to="/ride" {...S("Ride with us", "https://picsum.photos/id/1043/800/400", "Apply now")} className="hover:text-black transition">
                Ride with us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Available in</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/coimbatore" {...S("Available in Coimbatore", Coimbatore)} className="hover:text-black transition">
                Coimbatore
              </Link>
            </li>
            <li>
              <Link to="/bengaluru" {...S("Available in Bengaluru", Bengaluru)} className="hover:text-black transition">
                Bengaluru
              </Link>
            </li>
            <li>
              <Link to="/chennai" {...S("Available in Chennai", chennai)} className="hover:text-black transition">
                Chennai
              </Link>
            </li>
            <li>
              <Link to="/kolkata" {...S("Available in Kolkata", kolkata)} className="hover:text-black transition">
                Kolkata
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/terms" {...S("Terms & Conditions", "https://picsum.photos/id/1020/800/400", "Back to Home", "Review our terms and conditions.")} className="hover:text-black transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/cookies" {...S("Cookie policy", "https://picsum.photos/id/1050/800/400", "Back to Home", "Learn how we use cookies.")} className="hover:text-black transition">
                Cookie policy
              </Link>
            </li>
            <li>
              <Link to="/privacy" {...S("Privacy Policy", "https://picsum.photos/id/1057/800/400", "Back to Home", "Read about how we handle data.")} className="hover:text-black transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/location" {...S("Location", "https://picsum.photos/id/1021/800/400", "Find stores")} className="hover:text-black transition">
                Location
              </Link>
            </li>
            <li>
              <Link to="/email" {...S("Email", "https://picsum.photos/id/1060/800/400", "Write to us")} className="hover:text-black transition">
                Email
              </Link>
            </li>
            <li>
              <Link to="/social" {...S("Social Media", "https://picsum.photos/id/1019/800/400", "Follow us")} className="hover:text-black transition">
                Social Media
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-6 mt-10 mx-10 justify-center md:justify-end">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={26} className="hover:text-pink-500 transition" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={26} className="hover:text-blue-600 transition" />
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={26} className="hover:text-green-500 transition" />
        </a>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-800 font-medium text-sm sm:text-base text-center md:text-left">
          For better experience, download the app now
        </p>

        <div className="flex gap-4">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src={playstore} alt="Google Play" className="h-10 sm:h-12" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src={appstore} alt="App Store" className="h-10 sm:h-12" />
          </a>
        </div>
      </div>
    </footer>
  );
}


// import { Link } from "react-router-dom";
// import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
// import logo from "../assets/images/logo.png";
// import playstore from "../assets/images/playstore.png";
// import appstore from "../assets/images/applestore.png";

// export default function Footer() {
//   return (
//     <footer className="bg-white mt-10 border-t border-gray-200 px-6 sm:px-10 lg:px-20 xl:px-28 py-12">
//       <div className="mb-10">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
//           <img
//             src={logo}
//             alt="Supplyhive Logo"
//             className="w-14 h-14 sm:w-16 sm:h-16 lg:w-15 lg:h-15 rounded-full object-cover border-2 border-black mb-3 sm:mb-0"
//           />
//           <h2 className="text-lg sm:text-xl lg:text-2xl font-bold leading-snug">
//             Supplyhive <br />
//             <span className="text-xs sm:text-sm text-gray-600 font-normal">
//               2025 Supplyhive Limited
//             </span>
//           </h2>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 md:gap-16 text-sm sm:text-base">
//         <div>
//           <h3 className="font-semibold mb-4">Company</h3>
//           <ul className="space-y-2 text-gray-600">
//             <li>
//               <Link to="/about" className="text-gray-600 hover:text-black transition">About us</Link>
//             </li>
//             <li>
//               <Link to="/corporate" className="text-gray-600 hover:text-black transition">Supplyhive corporate</Link>
//             </li>
//             <li>
//               <Link to="/careers" className="text-gray-600 hover:text-black transition">Careers</Link>
//             </li>
//             <li>
//               <Link to="/team" className="text-gray-600 hover:text-black transition">Team</Link>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-semibold mb-4">Contact us</h3>
//           <ul className="space-y-2 text-gray-600">
//             <li>
//               <Link to="/support" className="text-gray-600 hover:text-black transition">Help & Support</Link>
//             </li>
//             <li>
//               <Link to="/partner" className="text-gray-600 hover:text-black transition">Partner with us</Link>
//             </li>
//             <li>
//               <Link to="/ride" className="text-gray-600 hover:text-black transition">Ride with us</Link>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-semibold mb-4">Available in</h3>
//           <ul className="space-y-2 text-gray-600">
//             <li>
//               <Link to="/coimbatore" className="text-gray-600 hover:text-black transition">Coimbatore</Link>
//             </li>
//             <li>
//               <Link to="/bengaluru" className="text-gray-600 hover:text-black transition">Bengaluru</Link>
//             </li>
//             <li>
//               <Link to="/chennai" className="text-gray-600 hover:text-black transition">Chennai</Link>
//             </li>
//             <li>
//               <Link to="/kolkata" className="text-gray-600 hover:text-black transition">Kolkata</Link>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-semibold mb-4">Legal</h3>
//           <ul className="space-y-2 text-gray-600">
//             <li>
//               <Link to="/terms" className="text-gray-600 hover:text-black transition">Terms & Conditions</Link>
//             </li>
//             <li>
//               <Link to="/cookies" className="text-gray-600 hover:text-black transition">Cookie policy</Link>
//             </li>
//             <li>
//               <Link to="/privacy" className="text-gray-600 hover:text-black transition">Privacy Policy</Link>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-semibold mb-4">Information</h3>
//           <ul className="space-y-2 text-gray-600">
//             <li>
//               <Link to="/location" className="text-gray-600 hover:text-black transition">Location</Link>
//             </li>
//             <li>
//               <Link to="/email" className="text-gray-600 hover:text-black transition">Email</Link>
//             </li>
//             <li>
//               <Link to="/social" className="text-gray-600 hover:text-black transition">Social Media</Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="flex gap-6 mt-10 mx-10 justify-center md:justify-end">
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//           <FaInstagram size={26} className="hover:text-pink-500 transition" />
//         </a>
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//           <FaFacebook size={26} className="hover:text-blue-600 transition" />
//         </a>
//         <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
//           <FaWhatsapp size={26} className="hover:text-green-500 transition" />
//         </a>
//       </div>

//       <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
//         <p className="text-gray-800 font-medium text-sm sm:text-base text-center md:text-left">
//           For better experience, download the app now
//         </p>

//         <div className="flex gap-4">
//           <a
//             href="https://play.google.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={playstore}
//               alt="Google Play"
//               className="h-10 sm:h-12"
//             />
//           </a>
//           <a
//             href="https://www.apple.com/app-store/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={appstore}
//               alt="App Store"
//               className="h-10 sm:h-12"
//             />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }
