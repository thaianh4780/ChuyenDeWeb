import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie/cjs/Cookies'
import url from '../Url'
import AdminFooter from '../components/AdminFooter'
import AdminNav from '../components/AdminNav'
import AdminStaff from '../components/AdminStaff'
import AdminTop from '../components/AdminTop'
import StaffForm from '../components/StaffForm'
import '../css1/bootstrap.min.css'

export default function StaffUpdating() {
    const navigate = useNavigate()
    const cookie = new Cookies();
    useEffect(()=>{
        if (!cookie.get('token')) {
            return navigate('../login', { replace: true })
          } else {
             fetch(url + 'user/check/' + cookie.get('token'))
              .then((res) => res.json())
              .then((res) => {
                if (res.error) {
                  console.log(res.error);
                  return navigate('../login', { replace: true })
                }
              })
              .catch((err) => console.log("ERR", err));
          }  
    }, [])
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
