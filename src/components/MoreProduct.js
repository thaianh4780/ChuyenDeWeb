import React, { useCallback, useEffect, useState } from 'react'
import Product from './Product'
import { useNavigate } from 'react-router-dom'
import '../css1/setup.css'
import DrinkTable from './DrinkTable'
import Totail from './Totail'
import VerticalItem from './VerticalItem'
import url from '../Url'
import HorizonItem from './HorizonItem'


export default function MoreProduct() {
  
  const [listDrink, setListDrink] = useState([]);
  const [listDrink1, setListDrink1] = useState([]);
  const [listDrinkByCategory, setListDrinkByCategory] = useState([]);
  const [price, setPrice] = useState();
  const [listCategory, setListCategory] = useState([]);
  const [typeSort, setTypeSort] = useState("");
  const [listSortDrinkOnPrice, setListSortDrinkOnPrice] = useState([]);
  const list = JSON.parse(localStorage.getItem('drinkorder'));
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const [type, setType] = useState("");
  const handleChangeType = (id) => {
    setType(id);
  }

  // xuất danh mục xuống dropdown
  const dataCategory = listCategory.map((item) => {
    return <div key={item._id}>
      <a className="dropdown-item text-capitalize ps-2" onClick={() => handleChangeType(item._id)} >{item.name}</a>
    </div>
  });
  const dropdown = listCategory.map((item) => {
    if (type == item._id) {
      return item.name;
    }
  });

  useEffect(() => {
    getListDrink();
    getListCategory();
  }, [check]);

  useEffect(() => {
    if (type) {
      getListDrinkByCategory();
    } else {
      getListDrink();
    }
  }, [type, check]);

  useEffect(() => {
    if (typeSort) {
      getListDrinkOnPrice();
    }
  }, [typeSort]);

  const getListCategory = async () => {
    await fetch(url + "category/list")
      .then((res) => res.json())
      .then((res) => {
        setListCategory(res.data);
      })
      .catch((err) => console.log("ERR", err));
  };
  // lấy các đồ uống thuộc 1 danh mục
  const getListDrinkByCategory = async () => {
    await fetch(url + "drink/category/" + type)
      .then((res) => res.json())
      .then((res) => {
        setListDrinkByCategory(res.data);
      })
      .catch((err) => console.log("ERR", err));
  };
  const getListDrinkOnPrice = async () => {
    await fetch(url + "drink/" + typeSort)
      .then((res) => res.json())
      .then((res) => {
        setListSortDrinkOnPrice(res.data);
      })
      .catch((err) => console.log("ERR", err));
  };
  // lấy tất cả đồ uống
  const getListDrink = async () => {
    await fetch(url + "drink/list")
      .then((res) => res.json())
      .then((res) => {
        var data = res.data;
        setListDrink(data);
      })
      .catch((err) => console.log("ERR", err));
  };

  const handleChangeNumber = (id, count) => {
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

  const drinkByCategory = listDrinkByCategory.map((val) => {
    return (
      <VerticalItem key={val._id} name={val.name} image={val.image} price={val.price} addToList={addToList} drink={val} />
    )
  });

  const handleTotal = () => {
    var sumPrice = 0;
    listDrink1.map((val, index) => {
      sumPrice += val.price * val.count;
    });
    setPrice(sumPrice);
  };

  const checkType = () => {
    if (type) {
      return drinkByCategory;
    } else if (typeSort) {
      return drinkBySort;
    } else {
      return drinks;
    }
  };

  const checkKey = () => {
    setType(null);
    setCheck(!check);
    setTypeSort(null);
  };

  useEffect(() => {
    handleTotal();
  }, [listDrink1]);

  const drinks = listDrink.map((val) => {
    return (
      <VerticalItem key={val._id} name={val.name} image={val.image} price={val.price} addToList={addToList} showsVerticalScrollIndicator={false} drink={val} />
    )
  })

  // console.log(listDrink1);

  const arrOld = [];


  const total = useCallback((data) => {
    let listDrinkOder = [];
    let listDrinkOder1 = [];

    data.map((item) => {
      listDrinkOder.push({
        qyt: item.count,
        price: item.price,
        drink: item._id,
      });
      listDrinkOder1.push({
        name: item.name,
        image: item.image,
        qyt: item.count,
        price: item.price,
        drink: item._id,
      });
    });


    if (list.length > 0) {
      arrOld.push(...list);
    }
    let flag = false;
    if (list.length > 0) {
      for (let x = 0; x < arrOld.length; x++) {
        for (let y = 0; y < listDrinkOder1.length; y++) {
          if (flag) {
            break;
          }
          if (arrOld[x].drink === listDrinkOder1[y].drink) {
            arrOld[x].qyt = arrOld[x].qyt + listDrinkOder1[y].qyt;
            flag = true;
          } else {
            arrOld.push(listDrinkOder1[y]);
          }
        }
      }
      fetch(url + "drinkorder/add", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(listDrinkOder),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("drinkorder", JSON.stringify(arrOld));
          setListDrink1([]);
          navigate("/");
        })
        .catch((err) => console.log(err.json()));
    } else {
      fetch(url + "drinkorder/add", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(listDrinkOder),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("drinkorder", JSON.stringify(listDrinkOder1));
          setListDrink1([]);
          navigate("/");
        })
        .catch((err) => console.log(err.json()));
    }
    console.log(list);
    console.log(arrOld);
    console.log(listDrinkOder);
  }, []);

  return (
    <div className="container ">
      <div className="row pb-1">
        <div className="col-12">
          <div className="row text-center d-flex align-items-center bg-white rounded-3  justify-content-center " >
            <div className="col-6 bg-success-subtle rounded-start" style={{ marginTop: "-1.5%" }}>
              <div className="d-flex my-2 justify-content-between col-4 mb-4">
                <button type="button"
                  className="btn btn-outline-primary btn-sm me-2"
                  onClick={() => { checkKey(); }}> ALL
                </button>
                <button type="button"
                  className="btn btn-outline-primary btn-sm me-2"
                  onClick={() => {
                    setTypeSort("sortIncrease");
                  }}>Increase
                </button>
                <button type="button"
                  className="btn btn-outline-primary btn-sm me-2"
                  onClick={() => {
                    setTypeSort("sortDecrease");
                  }}>Decrease
                </button>
                <div className="dropdown">
                  <a className="btn btn-outline-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {type != "" ? dropdown : "Category"}
                  </a>
                  <ul className="dropdown-menu" >
                    <li >
                      {dataCategory}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-4 g-4 mx-2 overflow-y-scroll over me-5 " style={{ overflowY: 'scroll', height: '600px', width: '100%' }}>
                {checkType()}
              </div>
            </div>
            <div className="col-6 mt-0 mt-3 bg-danger-subtle rounded-end-3 d-block over position-relative border-start border-dark-subtle">
              <div className="">
                <div className=" overflow-y-scroll scro" style={{ overflowY: 'scroll', height: '530px', width: '100%' }}>
                  {drinks1}
                </div>
              </div>
              <div className="total d-flex justify-content-between mt-2 mx-4 border-top pt-2 border-dark  border-opacity-50">
                <h5 className="text-black  font-weight-bold" >Total : <i className="fa-solid fa-hand-holding-dollar"></i></h5>
                <p className="text-black fs-5" >{price}  &#8205; VND</p>
              </div>
              <div className="btn w-100 position-absolute bottom-0 mt-3 d-flex justify-content-between">
                <button className="bg-success w-50" style={{ height: 50, marginLeft: "5%" }} onClick={() => { total(listDrink1) }}>
                  <i className="fa-sharp fa-solid fa-money-bill-1-wave mx-2"></i>
                  Thanh Toán
                </button>
                <button className="bg-info w-50 " style={{ height: 50 }} > <i className="fa-solid fa-bell mx-2"></i> Thông Báo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


