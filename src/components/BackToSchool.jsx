import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import { backToSchoolProducts } from "../data/backToSchoolData";

const BackToSchool = () => {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <div className="py-10 px-4">

      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Back to School
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {backToSchoolProducts.map((p) => (
          <div
            key={p.id}
            className="relative overflow-visible bg-white rounded-xl shadow-md hover:shadow-lg transition"
          >
            <Link to={`/product/${p.id}`}>
              <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
            </Link>

            <div className="p-4 bg-[#7aabf5] text-center">
              <Link to={`/product/${p.id}`}>
                <h3 className="font-semibold hover:underline">{p.name}</h3>
              </Link>

              <div className="flex justify-center my-2">
                {Array.from({ length: p.rating }).map((_, i) => (
                  <span key={i} className="text-[#fae823] text-4xl">★</span>
                ))}
              </div>

              <p className="font-bold">Rs. {p.price}</p>
              <p className="font-bold text-sm">{p.bulkOffer}</p>

              {/* Anchor wrapper for the popover */}
              <div className="relative inline-block">
                <button
                  onClick={() => handleAddToCart(p)}
                  className="mt-3 bg-white px-4 py-2 rounded-lg font-semibold border hover:bg-gray-100"
                >
                  Add to Cart
                </button>

                {addedId === p.id && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-green-100 text-green-800 px-3 py-1.5 rounded-lg shadow font-medium whitespace-nowrap z-20">
                    Added to Cart
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackToSchool;
