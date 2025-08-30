import React, {useEffect} from "react";
import banner from "../assets/images/diary.jpg";

function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[2000] bg-gray-900 text-white text-sm px-4 py-2 rounded shadow">
      {message}
    </div>
  );
}

function ReviewModal({ open, onClose, onSubmit, productName }) {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  const [comment, setComment] = React.useState("");

  React.useEffect(() => {
    if (open) {
      setRating(0);
      setHover(0);
      setComment("");
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = () => {
    if (rating === 0 && comment.trim().length === 0) return;
    onSubmit({ rating, comment, productName });
  };

  return (
    <div className="fixed inset-0 z-[1200]">
      <div
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
        onClick={onClose}
      />
      <div className="absolute inset-0 flex items-start justify-center pt-24 sm:pt-28">
        <div className="mx-4 w-full max-w-md rounded-2xl bg-white shadow-2xl border border-gray-200">
          <div className="px-6 pt-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-center">Rate & Review</h2>
            {productName && (
              <p className="text-center text-gray-600 mt-1">{productName}</p>
            )}
          </div>

          <div className="px-6 pb-6 pt-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  type="button"
                  onMouseEnter={() => setHover(s)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(s)}
                  aria-label={`Rate ${s} star${s > 1 ? "s" : ""}`}
                  className="text-3xl"
                >
                  <span className={((hover || rating) >= s) ? "text-yellow-400" : "text-gray-300"}>
                    ★
                  </span>
                </button>
              ))}
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Review
            </label>
            <textarea
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share thoughts about the product..."
              className="w-full rounded-xl bg-gray-100 text-gray-900 placeholder-gray-500 font-medium px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="mt-5 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border px-4 cursor-pointer py-2 font-semibold hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="rounded-lg bg-[#1877F2] px-4 cursor-pointer py-2 text-white font-semibold hover:bg-[#1467cf] focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyOrders() {
  useEffect(() => {
    document.title = "My Orders | SupplyHive";
  }, []);

  const [orders, setOrders] = React.useState([]);
  const [reviewOpen, setReviewOpen] = React.useState(false);
  const [reviewProduct, setReviewProduct] = React.useState(null);
  const [toast, setToast] = React.useState("");

  // Load placed orders from localStorage
  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("orderItems") || "[]");
    setOrders(saved);
  }, []);

  const openReview = (productName) => {
    setReviewProduct(productName || null);
    setReviewOpen(true);
  };

  const handleReviewSubmit = ({ rating, comment, productName }) => {
    // save review if needed
    setReviewOpen(false);
    setToast("Thank you for your review");
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <div className="min-h-screen w-full bg-white mt-30 text-gray-900 ">
      <div className="w-full mb-6">
        <img
          src={banner}
          alt="Banner"
          className="w-full p-2 md:h-120 object-contain md:object-cover max-w-5xl mx-auto rounded-lg "
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center">My Orders</h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-600">No orders placed yet.</p>
        ) : (
          <div className="border-2 border-gray-400 rounded-xl overflow-hidden p-4">
            <div className="grid grid-cols-4 text-center font-bold py-3 rounded-t-xl">
              <span>Product</span>
              <span>Quantity</span>
              <span>Unit Price</span>
              <span>Total Price</span>
            </div>

            {orders.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-4 items-center text-center py-6 px-3"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-30 h-24 object-contain rounded mb-2"
                  />
                  <h2 className="font-medium">{item.name}</h2>
                  <p className="font-bold">Rs.{item.price}</p>
                </div>

                <span>{item.quantity}</span>
                <span>Rs.{item.price}</span>
                <span>Rs.{item.price * item.quantity}</span>
              </div>
            ))}

            <div className="px-6 py-4 lg:py-0 text-center">
              <p className="text-gray-700">
                Delivery expected by{" "}
                <span className="font-semibold">September 1</span>
              </p>
              <p
                className="mt-2 cursor-pointer"
                onClick={() => openReview(orders[0]?.name || "Purchased product")}
              >
                <span className="text-yellow-500 ">⭐</span>{" "}
                Rate and Review the Product
              </p>
            </div>
          </div>
        )}
      </div>

      <ReviewModal
        open={reviewOpen}
        onClose={() => setReviewOpen(false)}
        onSubmit={handleReviewSubmit}
        productName={reviewProduct}
      />
      <Toast message={toast} />
    </div>
  );
}



// import React, {useEffect} from "react";
// import { useCart } from "../context/CartContext";
// import banner from "../assets/images/diary.jpg";

// export default function MyOrders() {
//   useEffect(() => {
//     document.title = 'My Orders | SupplyHive';
//   }, []);
//   const { cartItems } = useCart();

//   return (
//     <div className="min-h-screen w-full bg-white mt-30 text-gray-900 ">
//       <div className="w-full mb-6">
//         <img
//           src={banner}
//           alt="Banner"
//           className="w-full p-2 md:h-120 object-contain md:object-cover max-w-5xl mx-auto rounded-lg "
//         />
//       </div>
//       <div className="mx-auto max-w-5xl px-6 py-10">

//         <h1 className="text-3xl font-bold mb-8 text-center">My Orders</h1>

//         {cartItems.length === 0 ? (
//           <p className="text-center text-gray-600">No orders placed yet.</p>
//         ) : (
//           <div className="border-2 border-gray-400 rounded-xl overflow-hidden p-4">
//             <div className="grid grid-cols-4 text-center font-bold bg-gray-100 py-3 rounded-t-xl">
//               <span>Product</span>
//               <span>Quantity</span>
//               <span>Unit Price</span>
//               <span>Total Price</span>
//             </div>

//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="grid grid-cols-4 items-center text-center py-6 px-3"
//               >
//                 <div className="flex flex-col items-center">
//                   <img
//                     src={item.img}
//                     alt={item.name}
//                     className="w-30 h-24 object-contain rounded mb-2"
//                   />
//                   <h2 className="font-medium">{item.name}</h2>
//                   <p className="font-bold">Rs.{item.price}</p>
//                 </div>

//                 <span>{item.quantity}</span>

//                 <span>Rs.{item.price}</span>

//                 <span>Rs.{item.price * item.quantity}</span>
//               </div>
//             ))}
//             <div className="px-6 py-4 lg:py-0 text-center">
//               <p className="text-gray-700">
//                 Delivery expected by <span className="font-semibold">September 1</span>
//               </p>
//               <p className="mt-2 cursor-pointer">
//                 <span className="text-yellow-500 ">⭐</span> Rate and Review the Product
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="mt-8 flex w-full justify-center">
//       </div>
//     </div>
//   );
// }


