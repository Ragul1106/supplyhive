import React, {useEffect} from "react";
import phone from "../assets/images/phone.jpg";
import map from "../assets/images/map.jpg";
import {
    MapPinIcon,
    EnvelopeIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {

     useEffect(() => {
        document.title = 'Contact Us | SupplyHive';
      }, []);
    const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been submitted! We’ll get back to you soon.");
  };
    return (
        <div className="min-h-screen bg-white text-gray-900 mt-20">
            <div className="mx-auto max-w-5xl px-4 py-8">
                <div className="rounded-2xl overflow-hidden">
                    <img
                        src={phone}
                        alt="Contact banner"
                        className="w-full h-48 md:h-100 object-cover"
                    />
                </div>

                <p className="mt-6 text-center text-xl md:text-2xl text-gray-800">
                    "Your Perfect Stationery Partner Is Just a Message Away."
                </p>

                <div className="mt-6 rounded-xl border border-blue-200 bg-[#D3DFF8] px-4 py-4">
                    <h3 className="text-center text-sm font-medium text-gray-800 mb-4">
                        Contact Details
                    </h3>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="rounded-xl bg-[#097AFA] p-4 text-black">
                            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg ">
                                <MapPinIcon className="h-6 w-6" />
                            </div>
                            <div className="text-center text-xs">
                                <div className="font-semibold mb-1">Location</div>
                                <p>789 Beechwood Ave,</p>
                                <p>Sarasota, FL 34231</p>
                            </div>
                        </div>

                        <div className="rounded-xl bg-[#097AFA] p-4 text-black">
                            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg ">
                                <EnvelopeIcon className="h-6 w-6" />
                            </div>
                            <div className="text-center text-xs">
                                <div className="font-semibold mb-1">E-mail</div>
                                <p>example@gmail.com</p>
                                <p>debra.holt@example.com</p>
                            </div>
                        </div>

                        <div className="rounded-xl bg-[#097AFA] p-4 text-black">
                            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg">
                                <PhoneIcon className="h-6 w-6" />
                            </div>
                            <div className="text-center text-xs">
                                <div className="font-semibold mb-1">Contact</div>
                                <p>079457286332</p>
                                <p>016457896333</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 rounded-2xl overflow-hidden">
                    <img
                        src={map}
                        alt="Our locations map"
                        className="w-full h-100 object-cover"
                    />
                </div>

                <div className="mt-6 rounded-2xl border border-black bg-white shadow-sm">
                    <h4 className="text-center text-lg font-bold">
                        Have a List? We’ve Got the Stationery—Contact Us Now!
                    </h4>
                    <p className="mt-1 text-center text-lg text-black">Write Us</p>
                    <p className="mt-1 text-center text-lg w-full text-black">
                        We are always happy to be of service; be sure to listen to the prompt to help direct to the right person.
                    </p>

                    <form
                     onSubmit={handleSubmit}
                     className="mt-8 space-y-6 flex flex-col justify-center">
                        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-10 place-items-center sm:grid-cols-2">
              
                            <label className="w-full max-w-xs text-start ">
                                <span className="mb-2 block text-lg font-medium text-gray-800">Name</span>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="h-11 w-full rounded-xl bg-[#75AEEF] px-4 text-sm font-medium text-gray-900 placeholder:text-center sm:placeholder:text-center outline-none border border-black focus:ring-2 focus:ring-blue-400"
                                />
                            </label>

                  
                            <label className="w-full max-w-xs text-start">
                                <span className="mb-2 block text-lg font-medium text-gray-800">Email</span>
                                <input
                                    type="email"
                                    placeholder="Email ID"
                                    className="h-11 w-full rounded-xl bg-[#75AEEF] px-4 text-sm font-medium text-gray-900 placeholder:text-center sm:placeholder:text-center outline-none border border-black focus:ring-2 focus:ring-blue-400"
                                />
                            </label>

         
                            <label className="w-full max-w-xs text-start">
                                <span className="mb-2 block text-lg font-medium text-gray-800">Phone Number</span>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="h-11 w-full rounded-xl bg-[#75AEEF] px-4 text-sm font-medium text-gray-900 placeholder:text-center sm:placeholder:text-center outline-none border border-black focus:ring-2 focus:ring-blue-400"
                                />
                            </label>

                            <label className="w-full max-w-xs text-start">
                                <span className="mb-2 block text-lg font-medium text-gray-800">Message</span>
                                <input
                                    type="text"
                                    placeholder="Message"
                                    className="h-11 w-full rounded-xl bg-[#75AEEF] px-4 text-sm font-medium text-gray-900 placeholder:text-center sm:placeholder:text-center outline-none border border-black focus:ring-2 focus:ring-blue-400"
                                />
                            </label>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="mt-2 mb-5 rounded-xl cursor-pointer bg-[#097AFA] px-5 py-2 text-black text-sm font-semibold hover:bg-[#1467cf] focus:outline-none focus:ring-4 focus:ring-blue-300"
                            >
                                Submit now
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
}
