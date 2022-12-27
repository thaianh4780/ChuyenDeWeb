import React from 'react';
import Test from './Test';
import "../css/bootstrap.min.css"
import About from './About';
import MoreProduct from './MoreProduct';
import PageSection from './PageSection';
const Body = () => {
    return (
        <div
            style={{ backgroundImage: `url("assets/img/bg.jpg")` ,marginTop:0 }}>
            <h1 class="text-center text-white d-none d-lg-block site-heading pt-5">
                <span class="site-heading-lower">Business Casual</span>
            </h1>
            <Test />
            <MoreProduct />
            <PageSection />
            <About />
        </div>
    );
}

export default Body;