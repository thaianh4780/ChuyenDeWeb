import React from 'react';
import Test from '../pages/Test';
import "../css2/bootstrap.min.css"
import About from './About';
import MoreProduct from './MoreProduct';
import PageSection from './PageSection';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <div style={{ backgroundImage: `url("assets/img/bg.jpg")`, }} className="py-5 ">
            <div className="posion-fixed d-block position-fixed top-0 end-0 mx-4 my-3 text-center " style={{ width: 50 }}>
                <Link to="/login">
                    <button className="btn rounded-circle" style={{ height: 50, width: 50, textAlign: 'center', justifyContent: 'center', }}>
                        <i class="fa-solid fa-house-user"></i>

                    </button>
                </Link>
                <button className="btn rounded-circle" style={{ height: 50, width: 50, textAlign: 'center', justifyContent: 'center', }}>
                    <i class="fa-sharp fa-solid fa-comment-dollar"></i>
                </button>
            </div>
            <MoreProduct />
        </div >
    );
}

export default Body;
