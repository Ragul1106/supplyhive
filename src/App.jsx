import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import ShopPage from "./components/Shop";
import Pen from "./components/Pen";
import School from "./components/School";
import File from "./components/File";
import Paper from "./components/Paper";
import CartPage from "./components/CartPage";
import ProductDescription from "./components/ProductDescription";
import Billing from "./components/Billing";
import SigninPage from "./components/SignIn";
import ContactPage from "./components/Contact";
import MyOrders from "./components/MyOrders";
import Tracking from "./components/Tracking";
import Stepper from "./components/Stepper";
import ScrollToTop from "./components/ScrollToTop";



import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const App = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col font-roboto min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/pen" element={<Pen />} />
            <Route path="/school" element={<School />} />
            <Route path="/files" element={<File />} />
            <Route path="/paper" element={<Paper />} />
            <Route path="/about" element={<About />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/order-summary" element={<MyOrders />} />
            <Route path="/track-order" element={<Tracking />} />
            <Route path="/stepper" element={<Stepper />} />
            <Route path="/product/:id" element={<ProductDescription />} />
          </Routes>
          <Footer />
        </div>
        <ToastContainer />
      </Router>
    </CartProvider>
  );
};

export default App;

