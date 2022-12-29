import React from 'react';
import Test from '../pages/Test';
import "../css2/bootstrap.min.css"
import About from './About';
import MoreProduct from './MoreProduct';
import PageSection from './PageSection';
import Navigation from './Navigation';
const Body = () => {
    return (
        <div style={{ backgroundImage: `url("assets/img/bg.jpg")` , }} className="py-4">
            <MoreProduct />
        </div>
    );
}

export default Body;
