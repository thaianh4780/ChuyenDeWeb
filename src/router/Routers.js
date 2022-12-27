import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// đường dẫn trang


export default function Routers() {
  const url = "/book-ticket";

  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home/>}>
          
          </Route>
          {/* <Route path={"detail:id"} element={<DetailPage />} />
          <Route path={"/search"} key="keyword" element={<SearchScreen />} />

          <Route path={url + ""} element={<OrderFood />} />

          <Route path={url + "/seatschair"} element={<SeatsChairs />} />
          <Route path={url + "/seatschair/payment"} element={<Payment />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}