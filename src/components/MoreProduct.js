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
  const [listCategory, setListCategory] = useState([]);
  const [typeSort, setTypeSort] = useState("");
  const [listSortDrinkOnPrice, setListSortDrinkOnPrice] = useState([]);
  const [number, setNumber] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    getListDrink();
  }, [check]);
  useEffect(() => {
    if (typeSort) {
      getListDrinkOnPrice();
    }
  }, [typeSort]);

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

  const getListDrinkOnPrice = async () => {
    await fetch(url + "drink/" + typeSort)
      .then((res) => res.json())
      .then((res) => {
        var data = res.data;

        setListSortDrinkOnPrice(data);
      })
      .catch((err) => console.log("ERR", err));
  };
  // const dataCategory = listCategory.map((item) => {
  //   return <text key={item._id}>{item.name}</text>;
  // });

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

  const handleChangeNumber = (id, count) => {
    // setNumber(count);
    // console.log(number);
    var drinks = listDrink1;
    drinks.map((drink) => {
      if (drink._id === id) {
        drink.count = count;
      }
    });
    setListDrink1([...drinks]);
  };
  const addToList = (drink) => {
    if (listDrink1.includes(drink)) return
    setListDrink1(prev => {
      return [
        drink,
        ...prev
      ]
    });
  }

  const drinkBySort = listSortDrinkOnPrice.map((val) => {
    return (
      <VerticalItem key={val._id} name={val.name} image={val.image} price={val.price} addToList={addToList} drink={val} />
    )
  });

  const drinks1 = listDrink1.map((val) => {
    return (
      <HorizonItem id={val._id} handleChangeCount={handleChangeNumber}
        key={val._id} name={val.name} image={val.image} price={val.price} />
    );
  });

  const handleTotal = () => {
    var sumPrice = 0;
    listDrink1.map((val, index) => {
      sumPrice += val.price * val.count;
      //console.log("tt: " + sumPrice);
    });
    // console.log(sumPrice);
    setPrice(sumPrice);
  };

  const checkType = () => {
    if (typeSort) {
      return drinkBySort;
    } else {
      return drinks;
    }
  };

  const checkKey = () => {
    setCheck(!check);
    setTypeSort(null);
  };

  useEffect(() => {
    handleTotal();
  }, [listDrink1]);

  const drinks = listDrink.map((val) => {
    return (
      <VerticalItem key={val._id} name={val.name} image={val.image} price={val.price} addToList={addToList} drink={val} />
    )
  })
  return (
    <div className="container">
      <div className="row pb-1">
        <div className="col-12">
          <div className="row text-center d-flex align-items-center bg-white rounded-3  justify-content-center " >
            <div className="col-6 bg-success-subtle rounded-start" style={{ marginTop: "-1.5%" }}>
              <div class="d-flex my-2 justify-content-between col-4 mb-4">
                <button type="button" class="btn btn-outline-primary btn-sm me-2" onClick={() => {
                  checkKey();
                }}>ALL</button>
                <button type="button" class="btn btn-outline-primary btn-sm me-2" onClick={() => {
                  setTypeSort("sortIncrease");
                }}>Increase</button>
                <button type="button" class="btn btn-outline-primary btn-sm me-2" onClick={() => {
                  setTypeSort("sortDecrease");
                }}>Decrease</button>
                <div class="dropdown">
                  <a class="btn btn-outline-primary  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </a>

                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-4 g-4 mx-2 overflow-y-scroll over me-5 " style={{ overflowY: 'scroll', height: '600px', width: '100%' }}>
                {checkType()}
              </div>
            </div>
            <div className="col-6 mt-0 mt-3 bg-danger-subtle rounded-end-3 d-block over position-relative border-start border-dark-subtle">
              <div className=" overflow-y-scroll mx-2" style={{ overflowY: 'scroll', height: '530px', width: '100%' }}>
                {drinks1}
              </div>
              <div className="total d-flex justify-content-between mt-3 mx-3">
                <h5 className="text-black text-decoration-underline font-weight-bold" >Total :</h5>
                <p className="text-black fs-5" >{price}  &#8205; VND</p>
              </div>
              <div className="btn w-100 position-absolute bottom-0 mt-3 d-flex justify-content-between">
                <button className="bg-success w-50" style={{ height: 50, marginLeft: "5%" }} >Thanh Toan</button>
                <button className="bg-info w-50 " style={{ height: 50 }} >Thong Bao</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


