import React from 'react'

export default function Admin_top() {
    return (
        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
            <div className="container-fluid">
                <button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button">
                    <i className="fas fa-bars"></i>
                </button>
                <ul className="navbar-nav flex-nowrap ms-auto">
                    {/* <div className="d-none d-sm-block topbar-divider"></div> */}
                    <li className="nav-item dropdown no-arrow">
                        <div className="nav-item dropdown no-arrow">
                            <a className="dropdown-toggle nav-link" href="#">
                                <span className="d-none d-lg-inline me-2 text-gray-600 small">Valerie Luna</span>
                                <img className="border rounded-circle img-profile" src="assets1/img/avatars/avatar1.jpeg" />
                            </a>
                        </div>

                    </li>
                </ul>
            </div>
        </nav>
    )
}
