import React from 'react'

export default function Admin_sm_nav() {
    return (
        <div class="row mx-2 mt-4">
            <div class="col-md-6 align-self-center">
            </div>
            <div class="col-md-6 ">
                <nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <a class="page-link" aria-label="Previous" href="#">
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>
                        <li class="page-item active">
                            <a class="page-link" href="#">1
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" aria-label="Next" href="#">
                                <span aria-hidden="true">»</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
