import React, { useEffect, useState } from 'react'
import Product from './Product'
import '../css1/setup.css'
import DrinkTable from './DrinkTable'
import Totail from './Totail'
import VerticalItem from './VerticalItem'
import url from '../Url'
import HorizonItem from './HorizonItem'
export default function MoreProduct() {
  const [listDrink, setListDrink] = useState([]);
  const [listDrink1, setListDrink1] = useState([]);
  const [price, setPrice] = useState();

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
        setListDrink(data);
      })
      .catch((err) => console.log("ERR", err));
  };
  const addToList = (drink)=>{
    if(listDrink1.includes(drink)) return 
    setListDrink1(prev=>{
      return [
        drink,
        ...prev
      ]
    });
  }

  const drinks1 = listDrink1.map((val) => { 
    return (
      <HorizonItem key={val._id} name={val.name} image={val.image} price={val.price} />
    );
  });

  const handleTotal = () => {
    var sumPrice = 0;
    listDrink1.map((val, index) => {
      sumPrice += val.price  ;
      //console.log("tt: " + sumPrice);
    });
    setPrice(sumPrice);
  };
  useEffect(() => {
    handleTotal();
  }, [listDrink1]);

  const drinks = listDrink.map((val) => {
    return (
      <VerticalItem key={val._id} name={val.name}  image={val.image} price={val.price} addToList={addToList} drink={val}/>
    )
  })
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row text-center d-flex align-items-center bg-white rounded-3  justify-content-center">
            <div className="col-6 bg-success-subtle rounded-start">
              <div className="row row-cols-1 row-cols-md-4 g-4 mx-2 overflow-y-scroll over " style={{ overflowY: 'scroll', height: '500px', width: '100%' }}>
                 {drinks}
              </div>
            </div>
            <div className="col-6 mt-0 bg-danger-subtle rounded-end-3 d-block over position-relative border-start border-dark-subtle">
              <div className=" overflow-y-scroll" style={{ overflowY: 'scroll', height: '500px', width: '100%' }}>
                {drinks1}
              </div>
              <div className="total d-flex justify-content-between">
                <h5>Total:</h5>
                <p>{price}</p>
              </div>
              <div className="btn w-100 position-absolute bottom-0 mt-3 d-flex justify-content-between"> 
                <button className="bg-success  w-50">Thanh Toan</button>
                <button className="bg-info w-50 ">Thong Bao</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


