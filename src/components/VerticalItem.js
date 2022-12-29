import React from 'react'

export default function VerticalItem(props) {
    return (
        <> <div className="col " onClick={()=>{props.addToList(props.drink)}}>
            <div className="card setup-card  shadow ">
                <img src={props.image} height={120} width={100.9} className="card-img-top" alt="..." />
                <div className="card-body d-block justify-content-between">
                    <p className="card-text text-black ">{props.name}</p>
                    <p className="card-title bg-white rounded-top-3" >{props.price}K</p>
                </div>
            </div>
        </div>
        </>
    )
}
