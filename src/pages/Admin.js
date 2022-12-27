import React from 'react'
import { Link } from 'react-router-dom'
import Admin_footer from '../components/Admin_footer'
import Admin_nav from '../components/Admin_nav'
import Admin_staff from '../components/Admin_staff'
import Admin_top from '../components/Admin_top'
import '../css1/bootstrap.min.css'
export default function Admin() {
    return (
        <div id="page-top">
            <div id="wrapper">
                <Admin_nav />
                <div class="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <Admin_top />
                        <Admin_staff />
                    </div>
                    <Admin_footer />
                </div>
            </div>
        </div>
    )
}
