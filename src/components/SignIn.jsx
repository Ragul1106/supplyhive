import React from "react";
import banner from "../assets/images/signin.jpg";

export default function SigninPage() {
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
          <div className="w-full max-w-md rounded-2xl border-2 border-gray-400  p-6">
            <h3 className="text-center text-lg font-medium text-gray-800 mb-6">
              Signin
            </h3>

            <form className="space-y-5">

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black placeholder:text-center text-gray-900 placeholder-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black placeholder:text-center text-gray-900 placeholder-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black text-gray-900 placeholder-gray-800 placeholder:text-center outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="OTP"
                  className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black text-gray-900 placeholder-gray-800 placeholder:text-center outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-2 rounded-xl cursor-pointer bg-[#097AFA] px-5 py-2 text-black text-sm font-semibold hover:bg-[#1467cf] focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Submit now
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
