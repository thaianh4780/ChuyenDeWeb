import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// đường dẫn trang
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import NotFound from '../pages/404NotFound'
import Login from "../pages/Login";
import Product from "../pages/Product";
import ProductAdding from "../pages/ProductAdding";
import StaffAdding from "../pages/StaffAdding";
import StaffUpdating from "../pages/StaffUpdating";
import ProductUpdating from "../pages/ProductUpdating";
import Total from "../pages/Total";

export default function Routers() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/total"} element={<Total/>}/>
          <Route path={"/productadding"} element={<ProductAdding/>}/>
          <Route path={"/productupdating/:id"} element={<ProductUpdating/>}/>
          <Route path={"/staffadding"} element={<StaffAdding/>}/>
          <Route path={"/staffupdating/:id"} element={<StaffUpdating/>}/>
          <Route path={"/admin"} element={<Admin/>}/>
          <Route path={"/product"} element={<Product/>}/>
          <Route path={"/login"} element={<Login/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}