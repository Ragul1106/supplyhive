import React, {useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { officeProducts } from "../data/officeData";
import { penProducts } from "../data/penData";
import { SchoolProducts } from "../data/schoolData";
import { fileProducts } from "../data/fileData";
import { paperProducts } from "../data/paperData";
import { FeaturedProductsData } from "../data/featuredProductData";
import { backToSchoolProducts } from "../data/backToSchoolData";
import { useCart } from "../context/CartContext";

const ProductDescription = () => {
   useEffect(() => {
      document.title = 'Product Description | SupplyHive';
    }, []);
  const navigate = useNavigate();
  const { id } = useParams();
  const numId = Number(id);

  const allProducts = React.useMemo(
    () => [...officeProducts, ...penProducts, ...SchoolProducts, 
      ...fileProducts, ...paperProducts, ...backToSchoolProducts, ...FeaturedProductsData],
    []
  );

  const product = allProducts.find((p) => p.id === numId);
  const { addToCart } = useCart();

  if (!product) {
    return <p className="text-center mt-30 text-red-500">Product not found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 mt-20">
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="p-4">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-72 object-contain mb-4"
          />
          <div className="text-center">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-700 font-medium">Rs. {product.price}</p>
            <p className="text-sm text-gray-500">{product.bulkOffer}</p>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-lg md:text-2xl font-bold mb-2 lg:mb-10 text-center">
            Product Description
          </h2>
          <h3 className="font-semibold text-lg md:text-2xl">{product.name}</h3>
          <h3 className="font-semibold text-lg md:text-xl">{product.title}</h3>
          <p className="text-md text-gray-700 mt-2 leading-relaxed">
            {product.description}
          </p>
          <h3 className="text-lg md:text-2xl mt-4 font-semibold">Key Features:</h3>
          <ul className="list-disc list-inside text-md text-gray-700 space-y-1 mt-2">
            {product.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl md:text-2xl font-bold mb-10 text-center">Comments & Review</h2>
          <div className="space-y-6">
            {product.reviews.map((review, idx) => (
              <div key={review.id}>
                <h3 className="font-semibold text-lg mb-4">
                  {idx + 1}. {review.title}
                </h3>
                <p className="font-semibold text-lg">
                  Rating:{" "}
                  {"★".repeat(review.rating) +
                    "☆".repeat(5 - review.rating)}
                </p>
                <p className="text-gray-700 text-md mt-4">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-4 justify-center mt-10">
        <button
          onClick={() => addToCart(product)}
          className="bg-[#097afa] text-white px-6 py-2 cursor-pointer rounded-lg font-semibold hover:bg-blue-700"
        >
          ADD TO CART
        </button>
        <button
          onClick={() =>
            navigate("/billing", {
              state: { mode: "buy-now", item: { ...product, quantity: 1 } },
            })
          }
          className="bg-[#097afa] text-white cursor-pointer px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
