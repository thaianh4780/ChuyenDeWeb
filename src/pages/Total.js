import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminFooter from '../components/AdminFooter'
import DayTotal from '../components/DayTotal'
import "../css1/setup.css"
import url from '../Url'
import { useNavigate } from 'react-router-dom'

export default function Total() {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem('drinkorder'));
    const [listDrink, setListDrink] = useState(['']);
    const [price, setPrice] = useState();
    useEffect(() => {
        setListDrink(data)
    }, [])
    const handleTotal = () => {
        var sumPrice = 0;
        listDrink.map((val, index) => {
            sumPrice += val.qyt * val.price;
        });
        setPrice(sumPrice);
    };
    console.log(data);
    useEffect(() => {
        handleTotal();
    }, [listDrink]);

    const prices = listDrink.map((val) => {
        return (
            <DayTotal key={val._id} name={val.name} image={val.image} count={val.qyt} price={val.qyt * val.price} />
        )
    })

    const order = async (data) => {
        const drinks = [];
        data.map((item) => {
            drinks.push(item.drink);
        })
        const order = {
            drinks: drinks,
            total_price: price
        };
        await fetch(url + "order/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.clear();
                return navigate('/');
            })
            .catch((err) => console.log(err.json()));
    }

    return (
        <div id="page-top" className=" " >
            <div className="posion-fixed d-block position-fixed top-0 end-0 mx-4 my-3 text-center " style={{ width: 50 }}>
                <Link to="/">
                    <button className="btn rounded-circle" style={{ height: 50, width: 50, textAlign: 'center', justifyContent: 'center', }}>
                        <i class="fa-solid fa-house-user text-light "></i>
                    </button>
                </Link>
            </div>
            <div id="wrapper" className="  " >
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" className="line" >
                        <div className="container-fluid bg-gradient-primary line">
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
                                    <div className='text-center '>
                                        <button className="btn bg-success w-50 text-light" style={{ height: 40 }} onClick={() => {order(listDrink)}}>
                                            <i className="fa-sharp fa-solid fa-money-bill-1-wave mx-2"></i>
                                            Thanh Toán
                                        </button>
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
