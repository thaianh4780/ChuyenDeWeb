import React from 'react'
import { Link } from 'react-router-dom'

export default function Admin_nav() {
  return (
    <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-1">
      <div class="container-fluid d-flex flex-column p-0">
        <Link class="navbar-brand d-flex justify-content-start align-items-center sidebar-brand m-0" to="/">
          <div class="sidebar-brand-text mx-3">
            <span class="fs-3" >Brand</span></div>
        </Link>
        <hr class="sidebar-divider my-0" />
        <ul class="navbar-nav text-light" id="accordionSidebar">
          <li class="nav-item">
            <Link class="nav-link active" to="/admin" >
              <span class="fs-5" >Staff</span>
              {/* <hr class="border border-light border-2 opacity-50" style={{marginTop:"-1%", }} ></hr> */}
            </Link>
            <Link class="nav-link active" to="/product" >
              <span class="fs-5" >Product</span>
              {/* <hr class="border border-light border-2 opacity-50" style={{marginTop:"-1%", }} ></hr> */}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
