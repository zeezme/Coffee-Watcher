import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/landingPage/LandingPage";
import { ProductManagement } from "../pages/productManagement/ProductManagement";
import { ProductInput } from "../pages/productInput/ProductInput";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/productmanagement" element={<ProductManagement />} />
      <Route path="/productinput" element={<ProductInput />} />
    </Routes>
  );
}
