import React from 'react'
import AdminNav from './AdminNav'
import AdminTop from './AdminTop'

export default function AdminBody() {
  return (
    <div id="page-top">
    <div id="wrapper">
        <AdminNav/>
        <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
               <AdminTop/>
            </div>
            <footer className="bg-white sticky-footer">
            </footer>
        </div>
    </div>
</div>
  )
}
