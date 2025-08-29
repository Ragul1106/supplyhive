import React, { useState } from "react";
import { useCart } from "../context/CartContext";

import pencilImg from "../assets/images/color_pencil.jpg";
import calcImg from "../assets/images/dairy_pen.jpg";
import notebookImg from "../assets/images/notepad.jpg";

const products = [
  {
    id: 1,
    name: "Pencil",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: pencilImg,
    rating: 5,
  },
  {
    id: 2,
    name: "Scientific Calculator",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: calcImg,
    rating: 5,
  },
  {
    id: 3,
    name: "Scientific Calculator",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: notebookImg,
    rating: 5,
  },
];

const BackToSchool = () => {
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowModal(product.id);
    setTimeout(() => setShowModal(null), 2000);
  };

  return (
    <div className="py-10 px-4">

      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Back to School
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-[#7aabf5] text-center">
              <h3 className="font-semibold">{p.name}</h3>

              <div className="flex justify-center my-2">
                {Array.from({ length: p.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-3xl">
                    ★
                  </span>
                ))}
              </div>

              <p className="font-bold">Rs. {p.price}</p>
              <p className="text-sm font-medium">{p.bulkOffer}</p>

              <button
                onClick={() => handleAddToCart(p)}
                className="mt-3 bg-white px-6 py-2 rounded-lg font-semibold border hover:bg-gray-100 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed bottom-5 right-5 bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-lg font-medium z-50">
          Added to Cart
        </div>
      )}
    </div>
  );
};

export default BackToSchool;
