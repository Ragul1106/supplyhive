import React, { useState } from "react";
import banner from "../assets/images/signin.jpg";
import { useAuth } from "../context/AuthContext";

export default function SigninPage() {
  const { register } = useAuth();

  const [step, setStep] = useState(1); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleBasicSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !otp) {
      setError("All fields are required");
      return;
    }
    setError("");
    setStep(2); 
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      setError("Both password fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, email, phone, password });
    localStorage.setItem("users", JSON.stringify(users));

    register({ name, email, phone, password });

    setName("");
    setEmail("");
    setPhone("");
    setOtp("");
    setPassword("");
    setConfirmPassword("");
    setStep(1);
    setError("");
    alert("Registration successful! Please login.");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 mt-20">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-2xl overflow-hidden">
          <img
            src={banner}
            alt="Stationery banner"
            className="w-full h-56 md:h-84 object-cover"
          />
        </div>

        <p className="text-center text-xl md:text-2xl mt-10 text-gray-800">
          "Your Perfect Stationery Partner Is Just a Message Away."
        </p>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-md rounded-2xl border-2 border-gray-400 p-6">
            <h3 className="text-center text-lg font-medium text-gray-800 mb-6">
              Signin
            </h3>

            {step === 1 && (
              <form className="space-y-5" onSubmit={handleBasicSubmit}>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black placeholder:text-center text-gray-900 placeholder-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="email"
                    placeholder="Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black placeholder:text-center text-gray-900 placeholder-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black text-gray-900 placeholder-gray-800 placeholder:text-center outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    placeholder="OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black text-gray-900 placeholder-gray-800 placeholder:text-center outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="mt-2 rounded-xl cursor-pointer bg-[#097AFA] px-5 py-2 text-black text-sm font-semibold hover:bg-[#1467cf] focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    Next
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form className="space-y-5" onSubmit={handlePasswordSubmit}>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black text-gray-900 placeholder-gray-800 placeholder:text-center outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black text-gray-900 placeholder-gray-800 placeholder:text-center outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="mt-2 rounded-xl cursor-pointer bg-[#097AFA] px-5 py-2 text-black text-sm font-semibold hover:bg-[#1467cf] focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    Register
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



// import React, {useEffect} from "react";
// import banner from "../assets/images/signin.jpg";

// export default function SigninPage() {
//   useEffect(() => {
//     document.title = 'Sign In | SupplyHive';
//   }, []);
//   return (
//     <div className="min-h-screen bg-white text-gray-900 mt-20">
//       <div className="mx-auto max-w-5xl px-4 py-10">
//         <div className="rounded-2xl overflow-hidden">

//           <img
//             src={banner}
//             alt="Stationery banner"
//             className="w-full h-56 md:h-84 object-cover"
//           />
//         </div>

//         <p className="text-center text-xl md:text-2xl mt-10 text-gray-800">
//           "Your Perfect Stationery Partner Is Just a Message Away."
//         </p>

//         <div className="mt-10 flex justify-center">
//           <div className="w-full max-w-md rounded-2xl border-2 border-gray-400  p-6">
//             <h3 className="text-center text-lg font-medium text-gray-800 mb-6">
//               Signin
//             </h3>

//             <form className="space-y-5">

//               <div className="grid grid-cols-2 gap-6">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black placeholder:text-center text-gray-900 placeholder-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email ID"
//                   className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black placeholder:text-center text-gray-900 placeholder-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-6">
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black text-gray-900 placeholder-gray-800 placeholder:text-center outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 <input
//                   type="text"
//                   placeholder="OTP"
//                   className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black text-gray-900 placeholder-gray-800 placeholder:text-center outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>

//               <div className="flex justify-center">
//                 <button
//                   type="submit"
//                   className="mt-2 rounded-xl cursor-pointer bg-[#097AFA] px-5 py-2 text-black text-sm font-semibold hover:bg-[#1467cf] focus:outline-none focus:ring-4 focus:ring-blue-300"
//                 >
//                   Submit now
//                 </button>
//               </div>
//             </form>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
