import React,{useEffect} from "react";
import { useCart } from "../context/CartContext";
import TrackingActions from "./TrackingActions";
import banner from '../assets/images/tracking_banner.jpg';

export default function Tracking() {
   useEffect(() => {
      document.title = 'Tracking | SupplyHive';
    }, []);
  const { cartItems } = useCart();
  const paymentMethod =
    localStorage.getItem("paymentMethod") || "Cash on Delivery";
  const orderId = localStorage.getItem("orderId") || "OD123456789";
  const orderTotal =
    localStorage.getItem("orderTotal") ||
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const today = new Date();
  const deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + 4);

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  const steps = [
    { label: `Order Confirmed, ${formatDate(today)}`, status: "done" },
    { label: "Shipped", status: "done" },
    { label: "Out for Delivery", status: "pending" },
    {
      label: `Delivery, ${formatDate(deliveryDate)} by 11 PM`,
      status: "pending",
    },
  ];

  return (
    <div className="min-h-screen w-full mt-30 text-gray-900">
      <div className="w-full mb-6">
        <img
          src={banner}
          alt="Banner"
          className="w-full p-2 md:h-100 object-contain md:object-cover max-w-5xl mx-auto rounded-lg "
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl mb-10 font-bold">
          Order ID : {orderId}
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-gray-600">
          Seller : Supplyhive
        </p>
        <p className="text-sm md:text-lg lg:text-xl text-gray-600 mb-6">
          Rs.{orderTotal}
        </p>

        <TrackingActions steps={steps} />

        <div className="flex flex-col items-center mt-10 w-full">
          <div className="border-2 border-gray-400 rounded-xl p-4 mb-2 w-[80%] md:w-[50%]">
            <h2 className="text-md md:text-xl lg:text-2xl font-bold mb-4">
              Your Order
            </h2>
            <div className="grid grid-cols-2 text-sm md:text-lg lg:text-xl mb-2">
              <span>Products</span>
              <span className="text-right">Subtotal</span>
            </div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-2 text-sm md:text-lg  font-semibold"
              >
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span className="text-right">
                  Rs.{item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-[#097afa] rounded-lg px-6 py-3 font-bold text-lg flex justify-between items-center w-[80%] md:w-[50%]">
            <span>Total</span>
            <span>Rs.{orderTotal}</span>
          </div>
          <div className="mt-6">
            <p className="flex items-center space-x-2">
              <span className="w-3 h-3 border-2 border-black rounded-full inline-block bg-[#10f836]"></span>
              <span className="text-sm md:text-lg lg:text-xl">
                {paymentMethod}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
