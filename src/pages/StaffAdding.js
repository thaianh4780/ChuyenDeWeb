import React from 'react'
import AdminFooter from '../components/AdminFooter'
import AdminNav from '../components/AdminNav'
import AdminStaff from '../components/AdminStaff'
import AdminTop from '../components/AdminTop'
import StaffForm from '../components/StaffForm'
import '../css1/bootstrap.min.css'

export default function StaffAdding() {
    return (
        <div id="page-top">
            <div id="wrapper">
                <AdminNav />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <AdminTop />
                        <StaffForm/>
                    </div>
                    <AdminFooter />
                </div>
            </div>
        </div>
    )
}
