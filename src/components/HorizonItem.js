import React, { useEffect, useState } from 'react'
import url from '../Url';

export default function HorizonItem(props) {

    const [num, setNum] = useState(1);
    const total = num*props.price
    const incNum = () => {
        setNum(num + 1)
    };
    const decNum = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    return (
        <div className="row height shadow bg-body-tertiary overflow-hidden d-flex justify-content-between w-100 bg-white rounded-2 mt-2 border border-dark-subtle "  >
            <div className="col-8  ">
                <div className="p-3 h-100 d-flex ">
                    <img className="rounded-2 me-2" width={100} height={50} src={props.image} />
                    <div className="name ps-3">
                        <p>{props.name}</p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="p-3 d-flex justify-content-end">
                    <div className="number d-flex pe-1">
                        <button className="idbtn" onClick={decNum}>
                            <p style={{ marginTop: '-20%' }}>-</p>
                        </button>
                        <input type="text" style={{ width: 50, border: 'none', textAlign: 'center' }} value={num} minvalue={0} >
                            {/* <p>{count}</p> */}
                        </input>
                        <button className="idbtn" onClick={incNum}>
                            <p style={{ marginTop: '-20%' }}>+</p>
                        </button>
                    </div>
                    <div className="price d-flex align-items-center ps-3">
                        <p>{total}K</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
