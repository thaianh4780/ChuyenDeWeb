import React, { useEffect, useState } from "react";
import AdminFooter from '../components/AdminFooter'
import AdminNav from '../components/AdminNav'
import AdminTop from '../components/AdminTop'
import ProductForm from '../components/ProductForm'
import '../css1/bootstrap.min.css'
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductfAdding() {
    return (
        <div id="page-top">
            <div id="wrapper">
                <AdminNav />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <AdminTop />
                        <ProductForm />
                    </div>
                    <AdminFooter />
                </div>
            </div>
        </div>
    )
}
