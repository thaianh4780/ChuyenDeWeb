import React from 'react'

export default function AdminSmNav() {
    return (
        <div className="row mx-2 mt-4">
            <div className="col-md-6 align-self-center">
            </div>
            <div className="col-md-6 ">
                <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link" aria-label="Previous" href="#">
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="#">1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" aria-label="Next" href="#">
                                <span aria-hidden="true">»</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
