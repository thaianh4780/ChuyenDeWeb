import React, { useEffect, useState } from 'react'
import url from '../Url';
import HorizonItem from './HorizonItem';

export default function Totail() {
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
            <HorizonItem name={val.name} image={val.image} price={val.price} />
        );
    });
    return (
        <div className="col-6 mt-0 bg-danger-subtle rounded-end-3 d-block over position-relative border-start border-dark-subtle">
            <div className=" overflow-y-scroll" style={{ overflowY: 'scroll', height: '500px', width: '100%' }}>
                {drinks}
            </div>
            <div className="btn w-100 position-absolute bottom-0 mt-3 d-flex justify-content-between">
                <button className="bg-success  w-50">Thanh Toan</button>
                <button className="bg-info w-50 ">Thong Bao</button>
            </div>
        </div>
    )
}
