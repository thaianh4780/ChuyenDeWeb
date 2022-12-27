import React from 'react'
import { Link } from 'react-router-dom'
// const i = "./img/intro.jpg"
function Test() {
    return (
        <>
            <section className="page-section clearfix">
                <div className="container">
                    <div className="intro">
                    <img class="img-fluid intro-img mb-3 mb-lg-0 rounded" src="assets/img/intro.jpg"/>
                        <div className="text-center intro-text p-5 rounded bg-faded">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-upper">Fresh Coffee</span>
                                <span className="section-heading-lower">Worth Drinking</span>
                            </h2>
                            <p className="mb-3">Every cup of our quality artisan coffee starts with locally sourced, hand picked
                                ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning
                                routine - we guarantee it!</p>
                            <div className="mx-auto intro-button">

                                <Link className="btn btn-primary d-inline-block mx-auto btn-xl" role="button" to="login">
                                    Login Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Test