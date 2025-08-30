import React, { useState } from "react";
import { Menu } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

import banner from "../assets/images/pw_banner.jpg";
import { penProducts } from "../data/penData";

const categories = [
    "Office Basics",
    "Files & Folders",
    "Paper & Notebooks",
    "Pens & Writing",
    "School Supplies",
];

const priceFilters = [
    { label: "Rs. 50-100", min: 50, max: 100 },
    { label: "Rs. 100-200", min: 100, max: 200 },
    { label: "Rs. 200-300", min: 200, max: 300 },
    { label: "Rs. 300-500", min: 300, max: 500 },
];

const OfficeBasics = () => {
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
            <div className="relative flex items-center mb-4 h-12 px-4">
                <button
                    className="flex items-center text-black font-bold"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <Menu size={20} className="mr-2" />
                    Categories
                </button>

                <h2 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold">
                    Pen & Writtings
                </h2>

                {sidebarOpen && (
                    <div className="absolute left-4 top-12 bg-white shadow-lg rounded-lg w-48 z-30">
                        <ul className="divide-y divide-gray-200">
                            {categories.map((c, i) => (
                                <li key={i}>
                                    <a
                                        href={`/${c
                                            .toLowerCase()
                                            .replace(/ & /g, "-")
                                            .replace(/\s+/g, "-")}`}
                                        className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium"
                                    >
                                        {c}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="flex">
                <div
                    className={`fixed md:static z-20 w-64 p-4 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                        } md:translate-x-0 transition-transform duration-300`}
                >
                    <div className="bg-[#097afa] px-6 py-2 mb-10 rounded-xl text-white">
                        <h2 className="text-lg font-bold mb-4">Categories</h2>
                        <ul className="space-y-2 mb-6">
                            <li className="cursor-pointer hover:underline">
                                <Link to="/shop">Office Basics</Link>
                            </li>
                            <li className="cursor-pointer hover:underline">
                                <Link to="/files">Files & Folders</Link>
                            </li>
                            <li className="cursor-pointer hover:underline">
                                <Link to="/paper">Paper & Notebooks</Link>
                            </li>
                            <li className="cursor-pointer hover:underline">
                                <Link to="/pen">Pens & Writing</Link>
                            </li>
                            <li className="cursor-pointer hover:underline">
                                <Link to="/school">School Supplies</Link>
                            </li>
                        </ul>
                    </div>


                    <div className="bg-[#097afa] px-6 py-2 mb-10 rounded-xl text-white">
                        <h2 className="text-lg font-bold mb-2">Filter by Price</h2>
                        <div className="space-y-2 ms-5">
                            {priceFilters.map((filter, i) => (
                                <label
                                    key={i}
                                    className="flex items-center space-x-2 cursor-pointer"
                                >
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
                </div>

                <div className="flex-1 p-4 md:px-8">
                    <p className="mb-4 text-gray-600">
                        Showing Result 1-{filteredProducts.length} of{" "}
                        {filteredProducts.length} results
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProducts.map((p) => (
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
            </div>
        </div>
    );
};

export default OfficeBasics;
