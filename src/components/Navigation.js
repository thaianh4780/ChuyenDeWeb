import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark py-lg-4" id="mainNav">
                <div className="container">
                    <a className="navbar-brand text-uppercase d-lg-none text-expanded" href="#">Brand</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarResponsive">
                        <span className="visually-hidden">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="login" >Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}
