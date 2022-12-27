/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

import "../css/NotFoundPage.css";
<meta name="viewport" content="width=device-width, initial-scale=1.0" />;

export default function NotFound() {
  // eslint-disable-next-line no-unused-vars
  const [Width, setWidth] = useState(window.innerWidth);
  const [Height, setHeight] = useState(window.innerHeight);
  const backgroundA = require("../../src/assets/Notfound.jpg");
  return (
    <div
      className="bg"
      style={{
        width: Width,
        height: Height,
      }}
    >
      {/* header */}
      {/* <Header /> */}
      {/* end */}
      {/* 404 */}
      <div
        id="page-center"
        style={{
          paddingTop: 250,
        }}
      >
        <div id="wrapper">
          <div className="container-fluid">
            <div className="text-center mt-5">
              <div className="error mx-auto" data-text="404">
                <p className="m-0" style={{ color: "white" }}>
                  404
                </p>
              </div>
              <p className="text-light mb-5 lead">Page Not Found</p>
              <Link
                className="text-light mb-5"
                to={{
                  pathname: "/",
                }}
                style={{textDecoration: "none",
                paddingBottom: "50px"}}
              >
                Home
              </Link>
              <Link
                className="text-light mb-5"
                to={{
                  pathname: "/seatschair",
                }}
                style={{textDecoration: "none",
                paddingBottom: "50px"}}
              >
                Test
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
      {/* <Footer /> */}
    </div>
  );
}
