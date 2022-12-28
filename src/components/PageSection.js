import React from 'react'
export default function PageSection() {
    return (
        <>
            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="d-flex product-item-title">
                            <div className="d-flex me-auto bg-faded p-5 rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">Blended to Perfection</span>
                                    <span className="section-heading-lower">Coffees &amp; Teas</span>
                                </h2>
                            </div>
                        </div><img className="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded"
                            src="assets/img/products-01.jpg"/>
                            <div className="bg-faded p-5 rounded">
                                <p className="mb-0">We take pride in our work, and it shows. Every time you order a beverage from us, we
                                    guarantee that it will be an experience worth having. Whether it's our world famous Venezuelan
                                    Cappuccino, a refreshing iced herbal tea, or something as simple as a cup of speciality sourced
                                    black coffee, you will be coming back for more.
                                </p>
                            </div>
                    </div>
                </div>
            </section>
            <section className="page-section">
                <div className="container">
                    <div className="product-item">
                        <div className="d-flex product-item-title">
                            <div className="d-flex ms-auto bg-faded p-5 rounded">
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">Delicious Treats, Good Eats</span>
                                    <span className="section-heading-lower">Bakery &amp; Kitchen</span>
                                </h2>
                            </div>
                        </div>
                        <img className="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded"
                            src="assets/img/products-02.jpg"/>
                            <div className="bg-faded p-5 rounded">
                                <p className="mb-0">Our seasonal menu features delicious snacks, baked goods, and even full meals
                                    perfect for breakfast or lunchtime. We source our ingredients from local, oragnic farms whenever
                                    possible, alongside premium vendors for specialty goods.
                                </p>
                            </div>
                    </div>
                </div>
            </section>
        </>

    )
}
