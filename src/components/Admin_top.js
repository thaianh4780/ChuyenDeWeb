import React from 'react'

export default function Admin_top() {
    return (
        <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
            <div class="container-fluid">
                <button class="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button">
                    <i class="fas fa-bars"></i>
                </button>
                <ul class="navbar-nav flex-nowrap ms-auto">
                    {/* <div class="d-none d-sm-block topbar-divider"></div> */}
                    <li class="nav-item dropdown no-arrow">
                        <div class="nav-item dropdown no-arrow">
                            <a class="dropdown-toggle nav-link" href="#">
                                <span class="d-none d-lg-inline me-2 text-gray-600 small">Valerie Luna</span>
                                <img class="border rounded-circle img-profile" src="assets1/img/avatars/avatar1.jpeg" />
                            </a>
                        </div>

                    </li>
                </ul>
            </div>
        </nav>
    )
}
