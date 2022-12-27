import React from 'react'
import DrinkData from '../data/DrinkData'

export default function Product() {
    return (
        <main class="page projects-page">
            <section class="portfolio-block projects-cards">
                <div class="container">
                    <div class="heading">
                        <h2>Recent Work</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            {DrinkData.map((val) => {
                                return (
                                    <div class="card border-0">
                                        <a href="#">
                                            <img class="card-img-top scale-on-hover" src={val.img} alt="Card Image" />
                                        </a>
                                        <div class="card-body">
                                            <h6>
                                                <a href="#">{val.name}</a>
                                            </h6>
                                            <p class="text-muted card-text">{val.price}</p>
                                            <p class="text-muted card-text">{val.desc}</p>
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
