import React from 'react'
import DrinkData from '../data/DrinkData'

export default function Product() {
    return (
        <main className="page projects-page">
            <section className="portfolio-block projects-cards">
                <div className="container">
                    <div className="heading">
                        <h2>Recent Work</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            {DrinkData.map((val) => {
                                return (
                                    <div className="card border-0" key={val.id} >
                                        <a href="#">
                                            <img className="card-img-top scale-on-hover" src={val.img} alt="Card Image" />
                                        </a>
                                        <div className="card-body">
                                            <h6>
                                                <a href="#">{val.name}</a>
                                            </h6>
                                            <p className="text-muted card-text">{val.price}</p>
                                            <p className="text-muted card-text">{val.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
