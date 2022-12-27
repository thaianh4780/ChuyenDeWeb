import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// đường dẫn trang
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import NotFound from '../pages/404NotFound'
import Login from "../pages/Login";

export default function Routers() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/admin"} element={<Admin/>}/>
          <Route path={"/login"} element={<Login/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}