/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from "react-bootstrap";
const MyComponent = () => {
    return (
        <div >
            <Carousel fade>
                <Carousel.Item>
                    <img
                     src={'https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg'}
                     className={'d-block w-100'}
                     
                    />
                  <Carousel.Caption>
                      <h3>This is a beautiful image</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={'https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'}
                    className={'d-block w-100'}

                    />
                    <Carousel.Caption>
                        <h3>This is another most fancy a</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='}
                        className={'d-block w-100'}
                    />
                    <Carousel.Caption>
                        <h3>This is another Beautiful Image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default MyComponent;