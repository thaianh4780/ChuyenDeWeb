import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminFooter from '../components/AdminFooter'
import DayTotal from '../components/DayTotal'
import "../css1/setup.css"

export default function Total() {

    const data = [
        {
            id: 1,
            name: "Web Design",
            price: 1000000,
            count: "2",
            image: "assets/img/a7.jpg"
        },
        {
            id: 2,
            name: "Web Design",
            price: 1000000,
            count: "5",
            image: "assets/img/a7.jpg"
        },
        {
            id: 1,
            name: "Web Design",
            price: 1000000,
            count: "2",
            image: "assets/img/a7.jpg"
        },
        {
            id: 2,
            name: "Web Design",
            price: 1000000,
            count: "5",
            image: "assets/img/a7.jpg"
        },
        {
            id: 1,
            name: "Web Design",
            price: 1000000,
            count: "2",
            image: "assets/img/a7.jpg"
        },
        {
            id: 2,
            name: "Web Design",
            price: 1000000,
            count: "5",
            image: "assets/img/a7.jpg"
        },
        {
            id: 1,
            name: "Web Design",
            price: 1000000,
            count: "2",
            image: "assets/img/a7.jpg"
        },
        {
            id: 2,
            name: "Web Design",
            price: 1000000,
            count: "5",
            image: "assets/img/a7.jpg"
        },
        {
            id: 1,
            name: "Web Design",
            price: 1000000,
            count: "2",
            image: "assets/img/a7.jpg"
        },
        {
            id: 2,
            name: "Web Design",
            price: 1000000,
            count: "5",
            image: "assets/img/a7.jpg"
        },
        {
            id: 1,
            name: "Web Design",
            price: 1000000,
            count: "2",
            image: "assets/img/a7.jpg"
        },
        {
            id: 2,
            name: "Web Design",
            price: 1000000,
            count: "5",
            image: "assets/img/a7.jpg"
        },
        {
            id: 1,
            name: "Web Design",
            price: 1000000,
            count: "2",
            image: "assets/img/a7.jpg"
        },
        {
            id: 2,
            name: "Web Design",
            price: 1000000,
            count: "5",
            image: "assets/img/a7.jpg"
        },
        {
            id: 1,
            name: "Web Design",
            price: 1000000,
            count: "2",
            image: "assets/img/a7.jpg"
        },
        {
            id: 2,
            name: "Web Design",
            price: 1000000,
            count: "5",
            image: "assets/img/a7.jpg"
        },
        {
            id: 1,
            name: "Web Design",
            price: 1000000,
            count: "2",
            image: "assets/img/a7.jpg"
        },
        {
            id: 2,
            name: "Web Design",
            price: 1000000,
            count: "5",
            image: "assets/img/a7.jpg"
        },
        {
            id: 1,
            name: "Web Design",
            price: 1000000,
            count: "2",
            image: "assets/img/a7.jpg"
        },
        {
            id: 2,
            name: "Web Design",
            price: 1000000,
            count: "5",
            image: "assets/img/a7.jpg"
        },
        {
            id: 1,
            name: "Web Design",
            price: 1000000,
            count: "2",
            image: "assets/img/a7.jpg"
        },
        {
            id: 2,
            name: "Web Design",
            price: 1000000,
            count: "5",
            image: "assets/img/a7.jpg"
        },
        {
            id: 1,
            name: "Web Design",
            price: 1000000,
            count: "2",
            image: "assets/img/a7.jpg"
        },
        {
            id: 2,
            name: "Web Design",
            price: 1000000,
            count: "5",
            image: "assets/img/a7.jpg"
        },
        {
            id: 1,
            name: "Web Design",
            price: 1000000,
            count: "2",
            image: "assets/img/a7.jpg"
        },
        {
            id: 2,
            name: "Web Design",
            price: 1000000,
            count: "5",
            image: "assets/img/a7.jpg"
        },
    ]

    const [listDrink, setListDrink] = useState(data);
    const [price, setPrice] = useState();

    const handleTotal = () => {
        var sumPrice = 0;
        listDrink.map((val, index) => {
            sumPrice += val.count * val.price;
        });
        setPrice(sumPrice);
    };

    useEffect(() => {
        handleTotal();
    }, [listDrink]);

    const prices = listDrink.map((val) => {
        return (
            <DayTotal key={val._id} name={val.name} image={val.image} count={val.count} price={val.count * val.price} />
        )
    })

    return (
        <div id="page-top" className=" " >
                <div className="posion-fixed d-block position-fixed top-0 end-0 mx-4 my-3 text-center " style={{ width: 50 }}>
                    <Link to="/">
                        <button className="btn rounded-circle" style={{ height: 50, width: 50, textAlign: 'center', justifyContent: 'center', }}>
                            <i class="fa-solid fa-house-user"></i>
                        </button>
                    </Link>
                </div>
                <div id="wrapper" className="  " >
                    <div className="d-flex flex-column" id="content-wrapper">
                        <div id="content" className="line" >
                            <div className="container-fluid bg-gradient-primary">
                                <h3 className="text-dark mb-4">&#8205; </h3>
                                <div className="card shadow mx-5">
                                    <div className="card-body mx-5">
                                        <div className="row my-2 ">
                                            <h1 className="text-center text-dark">Day Total Page</h1>
                                        </div>
                                        <div className="table-responsive table mt-4" role="grid" >
                                            <table className="table my-2 " >
                                                <thead >
                                                    <tr>
                                                        <th colspan={2} className="text-dark">Image</th>
                                                        <th colspan={1} className="text-dark">Name</th>
                                                        <th colspan={1} className="text-dark">Count</th>
                                                        <th colspan={1} className="text-dark">Price</th>
                                                    </tr>
                                                </thead >
                                                <tbody  >
                                                    {prices}
                                                </tbody>
                                                <tfoot  >
                                                    <tr>
                                                        <th colspan={1}>Total</th>
                                                        <th colspan={1}></th>
                                                        <th colspan={1}></th>
                                                        <th colspan={1}>{price} &#8205; VND</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
