import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DrinkData from '../data/DrinkData'
import AdminSmNav from './AdminSmNav'
import url from "../Url";


export default function AdminProduct() {
  const [listDrink, setListDrink] = useState([]);

  useEffect(() => {
    getListDrink();
  }, []);


  // lấy tất cả đồ uống
  const getListDrink = async () => {
    await fetch(url + "drink/list")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        var data = res.data;
        //setCheck(check + 1);z
        setListDrink(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  const drinks = listDrink.map((val) => {
    return (
      <tr>
        <td >
          <img className="rounded-circle me-2" width="30" height="30" src={val.image} />
        </td>
        <td>{val.name}</td>
        <td>{val.price}</td>
        <td>
          <Link type="button" className="btn btn-success text-light btn-sm">Update</Link>
        </td>
        <td>
          <Link type="button" className="btn btn-danger text-light btn-sm">Detele</Link>
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
                <Link className="btn btn-primary" type="button">Adding</Link>
              </div>
            </div>
          </div>
          <div className="table-responsive table mt-4" id="dataTable" role="grid" aria-describedby="dataTable_info">
            <table className="table my-0" id="dataTable">
              <thead className='mb-5'>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead >
              <tbody  >
                {/* {DrinkData.map((val) => {
                  return (
                    <tr>
                      <td>
                        <img className="rounded-circle me-2" width="30" height="30" src={val.img} />{val.name}</td>
                      <td>{val.price}</td>
                      <td>{val.desc}</td>
                      <td>
                        <Link type="button" className="btn btn-success text-light btn-sm">Update</Link>
                      </td>
                      <td>
                        <Link type="button" className="btn btn-danger text-light btn-sm">Detele</Link>
                      </td>
                    </tr>
                  )
                })} */}
                {drinks}

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
