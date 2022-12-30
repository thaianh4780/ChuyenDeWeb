import React, { useEffect, useState } from 'react'
import url from '../Url';

export default function HorizonItem(props) {
    const [num, setNum] = useState(1);
    const total = num*props.price
    const incNum = () => {
        setNum(num + 1)
    };
    const decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    useEffect(() => {
       props.handleChangeCount(props.id,num);
      }, [num]);
    return (
        <div className="row height shadow-sm bg-body-tertiary overflow-hidden d-flex justify-content-between w-100 bg-white rounded-2 mt-2 border border-dark-subtle ms-1">
            <div className="col-5 ">
                <div className="p-3 h-100 d-flex ">
                    <img className="rounded-2 me-2" width={50} height={50} src={props.image} />
                    <div className="name ps-3 ">
                        <p className="text-nowrap text-capitalize text-dark mt-3 ">{props.name}</p>
                    </div>
                </div>
            </div>
            <div className="col-7 ">
                <div className="p-3 d-flex justify-content-between">
                    <div className="number d-flex pe-1 ">
                        <button className="idbtn" onClick={decNum}>
                            <p style={{ marginTop: '-20%' }}>-</p>
                        </button>
                        <input type="text" style={{ width: 50, border: 'none', textAlign: 'center',color:"grey " }} value={num} minvalue={0} />
                        <button className="idbtn" onClick={incNum}>
                            <p style={{ marginTop: '-20%' }}>+</p>
                        </button>
                    </div>
                    <div className="price d-flex align-items-center text-center pe-3">
                        <p className="text-dark mt-3" >{total} &#8205; VND</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
