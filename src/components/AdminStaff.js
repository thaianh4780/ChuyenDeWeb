import React from 'react'
import { Link } from 'react-router-dom'
import StaffData from '../data/StaffData'
import AdminSmNav from './AdminSmNav'

export default function AdminStaff() {
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
                <Link className="btn btn-primary  " type="button">Adding </Link>
              </div>
            </div>
          </div>
          <div className="table-responsive table mt-4" id="dataTable" role="grid" aria-describedby="dataTable_info">
            <table className="table my-0" id="dataTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Phone Number</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {StaffData.map((val) => {
                  return (
                    <tr key={val.id} >
                      <td>{val.name}</td>
                      <td>{val.salary}</td>
                      <td>{val.number}</td>
                      <td>
                        <Link type="button" className="btn btn-success  text-light btn-sm">Update</Link>
                      </td>
                      <td>
                        <Link type="button" className="btn btn-danger   text-light btn-sm">Detele</Link>
                      </td>
                    </tr>
                  )
                })}
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
