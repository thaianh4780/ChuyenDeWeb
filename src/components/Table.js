import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import url from '../Url';
import MoreProduct from './MoreProduct'
import { FaCalendarCheck } from "react-icons/fa";


export default function Table() {
    const [tables, setTables] = useState([]);
    const [check, setCheck] = useState(false);
    const [type, setType] = useState("");
    const [listArea, setListArea] = useState([]);
    const [area, setArea] = useState();

    useEffect(() => {
        getListArea();
    }, [])

    const getListArea = async () => {
        await fetch(url + "area/list")
            .then((res) => res.json())
            .then((res) => {
                setListArea(res.data);
            })
            .catch((err) => console.log("ERR", err));
    };

    const updateStatus = async (item) => {
        // console.log(item);
        let status = true;
        if (item.status == true) {
            status = false;
        } else {
            status = true;
        };
        const table = {
            name: item.name,
            status: status,
            area: item.area
        }
        // console.log(table);
        await fetch(url + 'table/update/status/' + item._id, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(table),
        }).then(res => res.json()).then(res => {
            if (res.error) {
                return console.log(res.error);
            } else {
                return localStorage.setItem('table', JSON.stringify(table));
            }
        })
    }

    const dataArea = listArea.map((item) => {
        return <div key={item._id}>
            <a className="dropdown-item text-capitalize ps-2" onClick={() => handleChangeType(item._id)} >{item.name}</a>
        </div>
    });

    const getTablebyArea = async (id) => {
        if (type != "") {
            await fetch(url + "table/area/" + id)
                .then((res) => res.json())
                .then((res) => {
                    setTables(res.data);
                })
                .catch((err) => console.log("ERR", err));
        }
    };

    const handleChangeType = (id) => {
        getTablebyArea(id);
        setType(id);
    }

    const dropdown = listArea.map((item) => {
        if (type == item._id) {
            return item.name;
        }
    });

    useEffect(() => {
        if (type) {
        } else {
            getTables();
        }
    }, [type, check]);

    const getTables = async () => {
        await fetch(url + "table/list")
            .then((res) => res.json())
            .then((res) => {
                var data = res.data;
                setTables(data);
            })
            .catch((err) => console.log("ERR", err));
    };
    return (
        <div style={{ backgroundImage: `url("assets/img/bg.jpg")`, }} className="py-5 ">
            <div className="posion-fixed d-block position-fixed top-0 end-0 mx-5 my-5 text-center " style={{ width: 50 }}>
                <Link to="/login" className="text-decoration-none text-dark " >
                    <button className="btn rounded-circle" style={{ height: 50, width: 50, textAlign: 'center', justifyContent: 'center', }}>
                        <i className="fa-solid fa-house-user"></i>
                    </button>
                </Link>
            </div>
            <div className="container ">
                <div className="row pb-1">
                    <div className="col-12">
                        <div className="row text-center d-flex align-items-center bg-white rounded-3  justify-content-center mx-5 " >
                            <div className="col-10 rounded-start   " style={{ marginTop: "-.5%" }}>
                                <h1 className=' pt-5'>TableChoosing</h1>
                                <div className="d-flex my-2 justify-content-between col-4 mb-4">
                                    <div className="dropdown">
                                        <a className="btn btn-outline-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {type != "" ? dropdown : "Category"}
                                        </a>
                                        <ul className="dropdown-menu" >
                                            <li >
                                                {dataArea}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row w-100 text-center d-flex align-items-center bg-white rounded-3  justify-content-center " >
                                    <Link to="/work" className="text-decoration-none text-dark" >
                                        <div className="row row-cols-1 row-cols-md-4 g-4 mx-2 overflow-y-scroll over me-5 " >
                                            {tables.map((item) => {
                                                return (
                                                    <div className="col">
                                                        <div className="card setup-card  shadow" onClick={() => {updateStatus(item)}}>
                                                            <img src={"https:iheartcraftythings.com/wp-content/uploads/2021/05/Table-DRAWING-%E2%80%93-STEP-10.jpg"} height={120} width={100.9} className="card-img-top border-bottom border-dark-subtle " alt="..." />
                                                            <div className="card-body d-flex justify-content-between position-relative text-center">
                                                                <p className="card-text text-black text-nowrap text-capitalize ">{item.name}</p>
                                                                {item.status == true && (
                                                                    <FaCalendarCheck className="fa-solid fa-check position-absolute top-0 end-0 mt-4 me-2" color={item?.color ? item.color : "#FE0000"} />
                                                                )}
                                                                {item.status == false && (
                                                                    <FaCalendarCheck className="fa-solid fa-check position-absolute top-0 end-0 mt-4 me-2" color={item?.color ? item.color : "#00FE3B"} />
                                                                )}
                                                                <p className="card-title position-absolute top-50 bg-white rounded-top-3 ms-3 ps-1" > {item.area.name}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

