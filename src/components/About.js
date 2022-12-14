import React from 'react'

export default function About() {
    return (
        <section className="page-section about-heading">
        <div className="container" style={{ marginBottom: "-10%"}} >
            <img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="assets/img/about.jpg"/>
            <div className="about-heading-content">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <div className="bg-faded rounded p-5">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-upper">Strong Coffee, Strong Roots</span>
                                <span className="section-heading-lower">&nbsp;About Our Cafe</span>
                            </h2>
                            <p>Founded in 1987 by the Hernandez brothers, our establishment has been serving up rich
                                coffee sourced from artisan farmers in various regions of South and Central America. We
                                are dedicated to travelling the world, finding the best coffee, and bringing back to you
                                here in our cafe.
                            </p>
                            <p className="mb-0">
                                <span>We guarantee that you will fall in&nbsp;</span>
                                <em>lust</em>
                                <span>&nbsp;with our decadent blends the moment you walk inside until you finish your
                                    last sip. Join us for your daily routine, an outing with friends, or simply just to
                                    enjoy some alone time.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>     

    )
}
