import React from 'react'
import { Link } from 'react-router-dom'
import "./../"

export default function AdminNav() {
  return (
    <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-1">
      <div className="container-fluid d-flex flex-column p-0">
        <Link className="navbar-brand d-flex justify-content-start align-items-center sidebar-brand m-0" to="/">
          <div className="sidebar-brand-text mx-3">
            <i className="fa-solid fa-coffee-bean text-white"></i>
            <span className="fs-3" > Brand</span>
          </div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <ul className="navbar-nav text-light" id="accordionSidebar">
          <li className="nav-item">
            <Link className="nav-link active" to="/admin" >
              <span className="fs-5" >Staff</span>
              {/* <hr className="border border-light border-2 opacity-50" style={{marginTop:"-1%", }} ></hr> */}
            </Link>
            <Link className="nav-link active" to="/product" >
              <span className="fs-5" >Product</span>
              {/* <hr className="border border-light border-2 opacity-50" style={{marginTop:"-1%", }} ></hr> */}
            </Link>
            {/* <Link className="nav-link active" to="/login" >
              <span className="fs-5" >Log Out</span>
              <hr className="border border-light border-2 opacity-50" style={{marginTop:"-1%", }} ></hr>
            </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  )
}
  