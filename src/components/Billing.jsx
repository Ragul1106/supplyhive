import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import { SuccessOverlay } from "./SuccessOverlay";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Billing() {
  useEffect(() => {
    document.title = 'Billing | SupplyHive';
  }, []);
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const { state } = useLocation();

  const isBuyNow = state?.mode === "buy-now" && state?.item;
  const items = isBuyNow ? [{ ...state.item }] : cartItems;

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0
  );

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error(" Please enter your name");
      return false;
    }
    if (!formData.address.trim()) {
      toast.error(" Please enter your street address");
      return false;
    }
    if (!formData.city.trim()) {
      toast.error(" Please enter your city");
      return false;
    }
    if (!formData.postalCode.trim()) {
      toast.error(" Please enter your postal code");
      return false;
    }
    return true;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;

    const selectedPayment =
      document.querySelector('input[name="payment"]:checked')?.value ||
      "Cash on Delivery";

    localStorage.setItem("paymentMethod", selectedPayment);
    localStorage.setItem("orderTotal", subtotal);
    localStorage.setItem(
      "orderId",
      "OD" + Math.floor(100000000 + Math.random() * 900000000)
    );

    localStorage.setItem(
      "orderItems",
      JSON.stringify(items)
    );

    setShowSuccess(true);
    const t = setTimeout(() => {
      navigate("/order-summary");
    }, 3000);
    return () => clearTimeout(t);
  };

  return (
    <div className="min-h-screen w-full mt-20 text-gray-900">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-black p-6">
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              Billing Details
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-lg font-medium mb-2">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl bg-[#78A7FF]/80 text-gray-900 placeholder-gray-800 font-medium px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-2">
                  Street Address
                </label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your street address"
                  className="w-full rounded-xl bg-[#78A7FF]/80 text-gray-900 placeholder-gray-800 font-medium px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-2">
                  Town/City
                </label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="w-full rounded-xl bg-[#78A7FF]/80 text-gray-900 placeholder-gray-800 font-medium px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-2">
                  Postal Code
                </label>
                <input
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Enter postal code"
                  className="w-full rounded-xl bg-[#78A7FF]/80 text-gray-900 placeholder-gray-800 font-medium px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="space-y-6">
            <div className="rounded-2xl border-2 border-black">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Your Order</h3>

                <div className="mb-3 flex items-center justify-between text-lg font-semibold">
                  <span>Products</span>
                  <span>Subtotal</span>
                </div>

                {items.length === 0 ? (
                  <p className="text-gray-600">No products in order.</p>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="text-gray-800 flex items-center justify-between text-base mb-2"
                    >
                      <span className="font-semibold">
                        {item.name} x {item.quantity ?? 1}
                      </span>
                      <span className="font-semibold">
                        Rs.{item.price * (item.quantity ?? 1)}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="rounded-b-2xl bg-[#78A7FF] rounded-2xl border-2 border-black text-gray-900">
              <div className="flex items-center justify-between px-4 py-3 text-lg font-semibold">
                <span>Total</span>
                <span>Rs.{subtotal}</span>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-black">
              <div className="p-6 space-y-4">
                <RadioRow label="Cash on Delivery" defaultChecked />
                <RadioRow label="UPI" />
                <RadioRow label="Debit Card" />
                <RadioRow label="Credit Card" />
              </div>
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="mt-8 flex w-full justify-center">
          <button
            onClick={handlePlaceOrder}
            className="rounded-xl cursor-pointer bg-[#1877F2] px-8 py-3 text-white font-semibold hover:bg-[#1467cf] focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Place order
          </button>
        </div>

        {showSuccess && <SuccessOverlay />}
      </div>

      {/* Toastify container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

function RadioRow({ label, defaultChecked = false }) {
  return (
    <label className="flex items-center gap-3 text-gray-800">
      <span className="relative inline-flex h-4 w-4 items-center justify-center">
        <input
          type="radio"
          name="payment"
          value={label}
          defaultChecked={defaultChecked}
          className="peer sr-only"
        />
        <span className="block h-4 w-4 rounded-full border-2 border-gray-400 peer-checked:border-black" />
        <span className="pointer-events-none absolute h-2 w-2 rounded-full bg-green-500 opacity-0 peer-checked:opacity-100" />
      </span>
      <span className="text-base font-medium">{label}</span>
    </label>
  );
}
