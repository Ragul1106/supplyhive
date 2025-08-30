import React,{useEffect} from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import noteImg from "../assets/images/sticky_notes.png";

export default function CartPage() {
   useEffect(() => {
      document.title = 'Cart | SupplyHive';
    }, []);
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-full mx-auto p-6 mt-20">
      <h1 className="text-2xl font-bold text-center mb-6">My Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          <div className="overflow-x-auto border border-black rounded-lg">
            <table className="w-full border-none">
              <thead>
                <tr className="text-center">
                  <th className="p-3">Product</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Unit Price</th>
                  <th className="p-3">Total Price</th>
                  <th className="p-3"></th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item) => (
                   <tr key={item.id} className="align-top">

                    <td className="p-3 align-top">
                      <div className="flex flex-col items-center">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-33 h-20 object-cover rounded mb-2"
                        />
                        <h2 className="font-semibold">{item.name}</h2>
                        <p className="font-bold">Rs.{item.price}</p>
                        <p className="text-sm text-green-600">{item.bulkOffer}</p>
                      </div>
                    </td>

                    <td className="p-3">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1">
                          <div className="border rounded bg-gray-100 w-10 text-start">
                            <button aria-label="Increase quantity"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-full py-1 cursor-pointer hover:bg-gray-200 text-green-600">
                              +
                            </button>
                          </div>
                          <div className="border rounded bg-gray-100 w-10 text-center">
                            <button aria-label="Decrease quantity"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className={`w-full py-1  hover:bg-gray-200 text-red-600 ${item.quantity <= 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                              disabled={item.quantity <= 1} >
                              -
                            </button>
                          </div>
                        </div>
                        <div className="mt-1 border rounded bg-gray-200 w-21 text-center py-1 font-medium">
                          {item.quantity}
                        </div>
                      </div>
                    </td>

                    <td className="p-3 align-top text-center font-medium">
                      Rs.{item.price}
                    </td>

                    <td className="p-3 align-top text-center font-medium">
                      Rs.{item.price * item.quantity}
                    </td>

                    <td className="p-3 align-top">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 cursor-pointer hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
            <div className="text-lg font-semibold w-full md:w-1/2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs.{subtotal}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span>Total</span>
                <span>Rs.{subtotal}</span>
              </div>
              <button
                onClick={() => navigate("/billing")}
                className="mt-4 cursor-pointer w-full bg-[#097afa] text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Proceed to Checkout
              </button>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <img
                src={noteImg}
                alt="Note"
                className="w-48 md:w-96 object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}