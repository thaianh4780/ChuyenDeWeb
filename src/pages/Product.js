import React from 'react'
import { Link } from 'react-router-dom'
import AdminFooter from '../components/AdminFooter'
import AdminNav from '../components/AdminNav'
import AdminProduct from '../components/AdminProduct'
import AdminTop from '../components/AdminTop'
import '../css1/bootstrap.min.css'

export default function Product() {
    return (
        <div id="page-top">
            <div id="wrapper">
                <AdminNav/>
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <AdminTop />
                        <AdminProduct />
                    </div>
                    <AdminFooter />
                </div>
            </div>
        </div>
    )
}
