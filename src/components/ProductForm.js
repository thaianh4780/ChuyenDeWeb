import React, { useEffect, useState } from 'react'
import url from '../Url'

export default function ProductForm() {
    useEffect(() => {
        getListCategory();
    }, []);
    const [listCategory, setListCategory] = useState([]);
    const [type, setType] = useState("");
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
    const dataCategory = listCategory.map((item) => {

        return <div key={item._id}>
            <a className="dropdown-item text-capitalize ps-2" onClick={() => {
                console.log(item._id);
                setType(item._id);
            }} >{item.name}</a>
        </div>
    });

    return (
        <div className="row w-100 h-100">
            <div className="col-4" />
            <div className="col-4">
                <form className="bg-white mb-4 ">
                    <div className="row d-block w-100 h-75 text-center p-5">
                        <h1 className="mb-2 text-primary text-nowrap">Product Adding</h1>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputEmail4">Drink Name</label>
                            <input type="text" className="form-control my-2" id="inputDrinkName" placeholder="Drink Name" />
                        </div>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputEmail4">Price</label>
                            <input type="text" className="form-control my-2" id="inputPrice" placeholder="Price" />
                        </div>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputEmail4">Image</label>
                            <input type="file" className="form-control my-2" id="validatedCustomFile" />
                        </div>
                        <div className="dropdown">
                            <a className="btn btn-outline-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu" >
                                <li >
                                    {dataCategory}
                                </li>
                            </ul>
                        </div>
                        <button type="submit" className="btn btn-primary my-3">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-4" />
        </div>
    )
}
