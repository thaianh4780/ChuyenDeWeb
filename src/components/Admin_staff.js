import React from 'react'
import { Link } from 'react-router-dom'
import StaffData from '../data/StaffData'
import Admin_sm_nav from './Admin_sm_nav'

export default function Admin_staff() {
  return (
    <div class="container-fluid">
      <h3 class="text-dark mb-4">&#8205; </h3>
      <div class="card shadow">
        <div class="card-body">
          <div class="row my-2 ">
            <div class="col-md-6 text-nowrap">
              <div class="text-md-start dataTables_filter" id="dataTable_filter">
                <label class="form-label">
                  <input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search" />
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-grid gap-2 d-md-block text-md-end">
                <Link class="btn btn-primary  " type="button">Adding </Link>
              </div>
            </div>
          </div>
          <div class="table-responsive table mt-4" id="dataTable" role="grid" aria-describedby="dataTable_info">
            <table class="table my-0" id="dataTable">
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
                    <tr>
                      <td>{val.name}</td>
                      <td>{val.salary}</td>
                      <td>{val.number}</td>
                      <td>
                        <Link type="button" class="btn btn-success  text-light btn-sm">Update</Link>
                      </td>
                      <td>
                        <Link type="button" class="btn btn-danger   text-light btn-sm">Detele</Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot>
              </tfoot>
            </table>
          </div>
          <Admin_sm_nav />
        </div>
      </div>
    </div>
  )
}
