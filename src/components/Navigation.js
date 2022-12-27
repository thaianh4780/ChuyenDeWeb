import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <>
            <nav class="navbar navbar-dark navbar-expand-lg bg-dark py-lg-4" id="mainNav">
                <div class="container">
                    <a class="navbar-brand text-uppercase d-lg-none text-expanded" href="#">Brand</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navbarResponsive">
                        <span class="visually-hidden">Toggle navigation</span>
                        <span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to="login" >Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}
