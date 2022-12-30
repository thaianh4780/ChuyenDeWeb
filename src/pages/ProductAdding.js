import React, { useEffect, useState } from "react";
import url from "../Url";
import axios from "axios";

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
    console.log("name: " + name);
    console.log("price: " + price);
    console.log("image: " + image);
    console.log("category: " + category);
    console.log(url + "drink/add");
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
        console.log(data.data);
      })
      .catch((err) => console.log(err.json()));
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
    <div className="row w-100 h-100">
      <div className="col-4" />
      <div className="col-4">
        <form className="bg-white mb-4 ">
          <div className="row d-block w-100 h-75 text-center p-5">
            <h1 className="mb-2 text-primary text-nowrap">Product Adding</h1>
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
              <label htmlFor="inputEmail4">image</label>
<input
                onChange={handleImage}
                type="text"
                className="form-control my-2"
                id="inputPrice"
                placeholder="Image"
              />
            </div>
            {/* <div className="col my-3 text-start">
              <label htmlFor="inputEmail4">Image</label>
              <input
                onChange={(e) => handleChoose(e)}
                type="file"
                className="form-control my-2"
                id="validatedCustomFile"
              />
            </div> */}
            {/* <div>
              <button onClick={uploadImage}>up</button>
            </div> */}
            <div className="dropdown">
              <a
                className="btn btn-outline-primary dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul className="dropdown-menu">
                <li>{dataCategory}</li>
              </ul>
            </div>

            <a onClick={addDrink}> submit</a>
          </div>
        </form>
      </div>
      <div className="col-4" />
    </div>
  );
}
