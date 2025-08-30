import React, { useState } from "react";
import { Menu } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

import banner from "../assets/images/pw_banner.jpg";
import { penProducts } from "../data/penData";

const priceFilters = [
    { label: "Rs. 50-100", min: 50, max: 100 },
    { label: "Rs. 100-200", min: 100, max: 200 },
    { label: "Rs. 200-300", min: 200, max: 300 },
    { label: "Rs. 300-500", min: 300, max: 500 },
];

const Pen = () => {
    const [selectedPrices, setSelectedPrices] = useState([priceFilters[0].label]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [addedId, setAddedId] = useState(null);

    const { addToCart } = useCart();

    const toggleFilter = (label) => {
        setSelectedPrices((prev) =>
            prev.includes(label)
                ? prev.filter((item) => item !== label)
                : [...prev, label]
        );
    };

    const filteredProducts = penProducts.filter((p) => {
        if (selectedPrices.length === 0) return true;
        return selectedPrices.some((label) => {
            const filter = priceFilters.find((f) => f.label === label);
            return p.price >= filter.min && p.price <= filter.max;
        });
    });

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedId(product.id);
        setTimeout(() => setAddedId(null), 2000);
    };

    return (
        <div className="min-h-screen mt-30">
            <div className="w-full mb-6">
                <img
                    src={banner}
                    alt="Office Banner"
                    className="w-full p-2 md:h-90 max-w-5xl mx-auto rounded-2xl"
                />
                <p className="text-center mt-3 text-lg font-semibold text-gray-700">
                    "Where Ideas Begin – Shop Smart, Stay Sharp!"
                </p>
            </div>
            <div className="flex items-center justify-between relative">
                    
                    <button
                      className="flex items-center text-black font-bold px-5 md:static absolute left-2 top-2 md:top-auto md:left-auto"
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                      <Menu size={20} className="mr-2" />
                      Categories
                    </button>

                    <h2 className="text-lg font-bold mx-auto hidden md:block">
                      Pen & Writting
                    </h2>

                    <h2 className="text-lg font-bold text-center w-full mt-12 md:hidden">
                      Pen & Writting
                    </h2>
                  </div>

                <div className="relative md:grid md:grid-cols-[16rem_1fr]">
                        {sidebarOpen && (
                          <div
                            className="fixed inset-0 bg-black/40 z-30 md:hidden"
                            onClick={() => setSidebarOpen(false)}
                            aria-hidden="true"
                          />
                        )}

                        <aside
                          className={`p-4 z-40 transition-transform duration-300
                    ${sidebarOpen ? "translate-x-0 translate-y-23 md:translate-y-0" : "-translate-x-full"} 
                    fixed inset-y-0 left-0 md:static md:translate-x-0 md:w-64`}
                          role="complementary"
                          aria-label="Sidebar navigation and filters"
                        >
                
                          <div className="bg-[#097afa] px-6 py-2 mb-10 rounded-xl text-white">
                            <div className="flex items-center justify-between mb-4">
                            
                              <button
                                className="md:hidden cursor-pointer text-gray-500 hover:text-gray-700"
                                onClick={() => setSidebarOpen(false)}
                              >
                                ✕
                              </button>
                            </div>
                            <ul className="space-y-2">
                              <li><Link to="/shop" className="cursor-pointer hover:underline" onClick={() => setSidebarOpen(false)}>Office Basics</Link></li>
                              <li><Link to="/files" className="cursor-pointer hover:underline" onClick={() => setSidebarOpen(false)}>Files & Folders</Link></li>
                              <li><Link to="/paper" className="cursor-pointer hover:underline" onClick={() => setSidebarOpen(false)}>Paper & Notebooks</Link></li>
                              <li><Link to="/pen" className="cursor-pointer text-black font-bold hover:underline" onClick={() => setSidebarOpen(false)}>Pens & Writing</Link></li>
                              <li><Link to="/school" className="cursor-pointer hover:underline" onClick={() => setSidebarOpen(false)}>School Supplies</Link></li>
                            </ul>
                          </div>
                
                          <div className="bg-[#097afa] px-6 py-2 mb-10 rounded-xl text-white">
                            <h2 className="text-lg font-bold mb-2">Filter by Price</h2>
                            <div className="space-y-2">
                              {priceFilters.map((filter, i) => (
                                <label key={i} className="flex items-center space-x-2 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={selectedPrices.includes(filter.label)}
                                    onChange={() => toggleFilter(filter.label)}
                                    className="form-checkbox text-blue-500"
                                  />
                                  <span>{filter.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </aside>
                
                
                        {/* Products */}
                        <main className="relative z-10 md:z-auto flex-1 p-4 md:px-8">
                          <p className="mb-4 text-gray-600">
                            Showing Result 1-{filteredProducts.length} of {filteredProducts.length} results
                          </p>
                
                          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredProducts.map((p) => (
                              <div
                                key={p.id}
                                className="relative overflow-visible bg-[#7aabf5] rounded-xl shadow-md hover:shadow-lg transition"
                              >
                                <Link to={`/product/${p.id}`}>
                                  <img
                                    src={p.img}
                                    alt={p.name}
                                    className="w-full h-48 rounded-b-2xl object-cover"
                                  />
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
                
                                  <div className="relative inline-block">
                                    <button
                                      onClick={() => handleAddToCart(p)}
                                      className="mt-3 bg-white cursor-pointer px-4 py-2 rounded-lg font-semibold border hover:bg-gray-100"
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
                        </main>
                      </div>
        </div>
    );
};

export default Pen;
