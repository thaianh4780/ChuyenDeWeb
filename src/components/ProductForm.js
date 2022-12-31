import React, { useEffect, useState } from 'react'
import url from '../Url'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductForm() {
    useEffect(() => {
        window.location.href == '/productadding' ? getListCategory() : getListCategory(); getDink()
    }, []);
    const navigate = useNavigate();
    const { id } = useParams();
    const [listCategory, setListCategory] = useState([]);
    const [product, setProduct] = useState({
        name: '',
        price: '',
        image: '',
        category: '',
    });
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        window.location.pathname == '/productadding' ?
            addDrink(product)
            :
            updateDrink(product);
    }
    //get staff by id
    const getDink = async () => {
        if (id) {
            await fetch(url + 'drink/' + id)
                .then((res) => res.json())
                .then((res) => {
                    setProduct(res.data);
                    console.log(product);
                })
                .catch((err) => console.log("ERR", err));
        } else {

            return console.log("err");
        }
    };
    const addDrink = async (data) => {
        fetch(url + "drink/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                return navigate('/product');
            })
            .catch((err) => console.log(err.json()));
    };

    const updateDrink = async (data) => {
        fetch(url + "drink/update/" + id, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        }).then((res) => res.json())
        .then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                return navigate('/product');
            }
        });
        
    }

    return (
        <div className="row w-100 h-100">
            <div className="col-4" />
            <div className="col-4">
                <form className="bg-white mb-4 " onSubmit={handleSubmit}>
                    <div className="row d-block w-100 h-75 text-center p-5">
                        <h1 className="mb-2 text-primary text-nowrap">Product {window.location.pathname == '/productadding' ? "Addding" : "Update"}</h1>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputEmail4">Drink Name</label>
                            <input type="text" className="form-control my-2" id="inputDrinkName" placeholder="Drink Name"value={product.name} onChange={(e) => setProduct((oldValue) => ({ ...oldValue, name: e.target.value }))} />
                        </div>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputEmail4">Price</label>
                            <input type="text" className="form-control my-2" id="inputPrice" placeholder="Price"value={product.price} onChange={(e) => setProduct((oldValue) => ({ ...oldValue, price: e.target.value }))} />
                        </div>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputEmail4">Image</label>
                            <input type="text" className="form-control my-2" id="validatedCustomFile" onChange={(e) => setProduct((oldValue) => ({ ...oldValue, image: e.target.value }))} />
                        </div>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputState">Category</label>
                            <select id="inputState" className="form-control my-2" value={product.category} onChange={(e) => setProduct((oldValue) => ({ ...oldValue, category: e.target.value }))}>
                                <option selected >Choose...</option>
                                {listCategory.map((item) => {
                                    return <option value={item._id}>{item.name}</option>
                                })}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary my-3">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-4" />
        </div>
    )
}
