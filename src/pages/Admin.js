import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie/cjs/Cookies'
import AdminFooter from '../components/AdminFooter'
import AdminNav from '../components/AdminNav'
import AdminStaff from '../components/AdminStaff'
import AdminTop from '../components/AdminTop'
import '../css1/bootstrap.min.css'
import url from '../Url'

export default function Admin() {
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
                        <AdminStaff />
                    </div>
                    <AdminFooter />
                </div>
            </div>
        </div>
    )
}
