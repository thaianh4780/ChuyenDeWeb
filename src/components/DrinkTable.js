import React from 'react'

export default function DrinkTable() {
    
    return (
        <div className="col-6 bg-success-subtle rounded-start">
            {/* <div className=" d-flex ">
      <p className="coltext"> 3</p>
    </div> */}
            <div className="row row-cols-1 row-cols-md-4 g-4 mx-2 overflow-y-scroll over " style={{ overflowY: 'scroll', height: '500px', width: '100%' }}>
                <div className="col ">
                    <div className="card setup-card  shadow ">
                        <img src="assets/img/about.jpg" height={120} width={100.9} className="card-img-top" alt="..." />
                        <div className="card-body d-flex justify-content-between">
                            <p className="card-text text-black ">Cafe đá</p>
                            <p className="card-title bg-white rounded-top-3" >12K</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
