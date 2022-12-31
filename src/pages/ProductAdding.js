import React, { useEffect, useState } from "react";
import url from "../Url";
import AdminFooter from '../components/AdminFooter'
import AdminNav from '../components/AdminNav'
import AdminTop from '../components/AdminTop'
import '../css1/bootstrap.min.css'
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductForm() {
    useEffect(() => {
        getListCategory();
    }, []);
    const [listCategory, setListCategory] = useState([]);
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const handleImage = (event) => {
        setImage(event.target.value);
    };
    const handleName = (event) => {
        setName(event.target.value);
    };
    const handlePrice = (event) => {
        setPrice(event.target.value);
    };
    const getListCategory = async () => {
        await fetch(url + "category/list")
            .then((res) => res.json())
            .then((res) => {
                // console.log(res.data);
                var data = res.data;
                setListCategory(data);
            })
            .catch((err) => console.log("ERR", err));
    };

    const addDrink = async () => {
        // console.log("name: " + name);
        // console.log("price: " + price);
        // console.log("image: " + image);
        // console.log("category: " + category);
        // console.log(url + "drink/add");
        const data = {
            name: name,
            price: price,
            image: image,
            category: category,
        };
        fetch(url + "drink/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.data);
            })
            .catch((err) => console.log(err.json()));
        alert("Done Adding")
    };

    const dataCategory = listCategory.map((item) => {
        return (
            <div key={item._id}>
                <a
                    className="dropdown-item text-capitalize ps-2"
                    onClick={() => {
                        setCategory(item._id);
                    }}
                >
                    {item.name}
                </a>
            </div>
        );
    });

    return (
        <div id="page-top">
            <div id="wrapper">
                <AdminNav />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <AdminTop />
                        <div className="row w-100 h-100">
                            <div className="col-4" />
                            <div className="col-4">
                                <form className="bg-white mb-4 rounded-2 ">
                                    <div className="row d-block w-100 h-75 text-center p-5">
                                        <h1 className="mb-4 text-primary text-nowrap ">Product Adding</h1>
                                        <div className="col my-3 text-start">
                                            <label htmlFor="inputEmail4">Drink Name</label>
                                            <input
                                                type="text"
                                                className="form-control my-2"
                                                id="inputDrinkName"
                                                placeholder="Drink Name"
                                                onChange={handleName}
                                            />
                                        </div>
                                        <div className="col my-3 text-start">
                                            <label htmlFor="inputEmail4">Price</label>
                                            <input
                                                type="text"
                                                className="form-control my-2"
                                                id="inputPrice"
                                                placeholder="Price"
                                                onChange={handlePrice}
                                            />
                                        </div>
                                        <div className="col my-3 text-start">
                                            <label htmlFor="inputEmail4">Image</label>
                                            <input
                                                onChange={handleImage}
                                                type="text"
                                                className="form-control my-2"
                                                id="inputPrice"
                                                placeholder="Image"
                                            />
                                        </div>
                                        <div className="col my-3 text-start">
                                            <label htmlFor="inputEmail4">Category</label>
                                            <a className="form-control my-2 pe-auto text-start text-decoration-none dropdown-toggle pe-3 " data-bs-toggle="dropdown" >
                                                Category
                                            </a>
                                            <ul className="dropdown-menu" style={{ width: "19%" }} >
                                                <li>{dataCategory}</li>
                                            </ul>
                                        </div>
                                        <div className="col my-3 text-start">
                                            <Link onClick={addDrink } to="/product" className="btn btn-primary w-100 mt-3 font-weight-bold text-capitalize" > submit</Link>
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className="col-4" />
                        </div>
                    </div>
                    <AdminFooter />
                </div>
            </div>
        </div>
    )
}
