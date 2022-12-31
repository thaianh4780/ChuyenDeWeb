import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StaffData from '../data/StaffData'
import url from '../Url';
import AdminSmNav from './AdminSmNav'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminStaff() {
  const notificate = (err) => {
    toast.error(err, {
      position: "top-center",
      autoClose: 600,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    getListUser();
  }, []);

  // lấy tất cả nhan vien 
  //get list user
  const getListUser = async () => {
    await fetch(url + "user/all")
      .then((res) => res.json())
      .then((res) => {
        var data = res;
        setListUser(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  const deleteUser = (id) => {
    fetch(url + "user/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res)
      .then((data) => {
        if (data.error) {
          notificate(data.error);
        } else {
          notificate(data);
        }
      });
  };

  const staffs = listUser.map((val) => {
    return (
      <tr key={val.id} >
        <td>{val.user_name}</td>
        <td>{val.full_name}</td>
        <td>{val.phone}</td>
        <td>
          <Link type="button" className="btn btn-success  text-light btn-sm" to={`/staffupdating/${val._id}`} >
            <i className="fa-solid fa-square-pen pe-1"></i>
            Update
          </Link>
        </td>
        <td>
          <button type="button" className="btn btn-danger   text-light btn-sm" onClick={() => { deleteUser(val._id) }}>
            <i className="fa-solid fa-trash pe-1"></i>
            Detele
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="container-fluid">
      <h3 className="text-dark mb-4">&#8205; </h3>
      <div className="card shadow">
        <div className="card-body">
          <div className="row my-2 ">
            <div className="col-md-6 text-nowrap">
              <div className="text-md-start dataTables_filter" id="dataTable_filter">
                <label className="form-label">
                  <input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search" />
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-grid gap-2 d-md-block text-md-end">
                <Link className="btn btn-primary  " type="button" to="/staffadding" >
                  <i className="fa-solid fa-circle-plus mx-2"></i>
                  Adding
                </Link>
              </div>
            </div>
          </div>
          <div className="table-responsive table mt-4" id="dataTable" role="grid" aria-describedby="dataTable_info">
            <table className="table my-0" id="dataTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Full Name</th>
                  <th>Phone Number</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {staffs}
              </tbody>
              <tfoot>
              </tfoot>
            </table>
          </div>
          <AdminSmNav />
        </div>
      </div>
    </div>
  )
}
