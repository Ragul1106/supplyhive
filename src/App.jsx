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


import Team from "./components/Team";
import Partner from "./components/Partner";
import Career from "./components/Careers";
import RideWithUsPage from "./components/RideWithUs";
import HelpAndSupport from "./components/HelpAndSupport";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SupplyhiveCorporate from "./components/SupplyhiveCorporate";
import TermsAndConditions from "./components/TermsAndConditions";
import CookiePolicy from "./components/CookiePolicy";
import ScrollToTop from "./components/ScrollToTop";

import DummyPage from "./components/DummyPage";

import { Toaster } from "sonner";


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
            <Route path="/product/:id" element={<ProductDescription />} />

            <Route path="/team" element={<Team />} />
            <Route path="/corporate" element={<SupplyhiveCorporate />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/help" element={<HelpAndSupport />} />
            <Route path="/ride" element={<RideWithUsPage />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />

            <Route path="/coimbatore" element={<DummyPage />} />
            <Route path="/bengaluru" element={<DummyPage />} />
            <Route path="/chennai" element={<DummyPage />} />
            <Route path="/kolkata" element={<DummyPage />} />






          </Routes>
          <Footer />
        </div>
        <Toaster richColors position="top-center" />
      </Router>
    </CartProvider>
  );
};

export default App;

