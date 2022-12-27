/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import SeatChairs from "../component/SeatChairs";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Header from "../component/Header";
import Button from 'react-bootstrap/Button';
import Footer from "../component/Footer";
export default function SeatsChairs() {
  const url ="/book-ticket"

  return (
    <>
    
    <Header></Header>
      <div class="main">
        {/* chon */}
        <div class="row g-0 text-center">
          <div class="col-sm-9 ">
            {/* chon */}
            <div class="text-left col7-container ">
              <h3 class="text-uppercase text-start text-white p-3 ">
                Chọn Ghế :
              </h3>
              {/* chon combo */}
              <SeatChairs />
              <div style={{display:"flex",flexDirection:"row"}}>
                <div class="g" style={{ margin: 30 }}>
                  <div class="seat seat--reserved seat--north"></div>
                  <b style={{ margin: 5 }} >Ghé đã được đặt</b>
                </div>
                <div class="g" style={{ margin: 30 }}>
                <div class="seat seat--enabled seat--north"></div>
                  <b  style={{ margin: 5 }}>Ghé Còn Trống</b>
                </div>
                <div class="g" style={{ margin: 30 }}>
                <div class="seat seat--reserved a" ></div>
                  <b  style={{ margin: 5 }}>Ghé đang chọn</b>
                </div>
              </div>
              {/* end */}
              {/* chon ve */}

              {/* end */}
            </div>
          </div>
          {/* end */}
          {/* cart */}
          <div class="col-3">
          <Card style={{ width: "18rem", margin: "20px" }}>
              <Card.Img variant="top" src={require("../assets/a1.jpg")} />
              <Card.Body>
                <Card.Title> iCombo 1 Big Extra </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  {" "}
                  <span className="text-start text-uppercase fs-5 text-white bg-danger fw-bold me-2">
                    c13
                  </span>{" "}
                  <span className="text-danger">
                   
                    (*) Phim chỉ dành cho khán giả từ 13 tuổi trở lên
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <span className="text-start fw-bold pe-2">Rạp :</span>
                  <span> Galaxy Trung Chánh</span>
                  <span className="text-uppercase ps-2 ">|rạp 2</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <span className="text-start fw-bold pe-2">Xuất Chiếu :</span>
                  <span> 15:15</span>
                  <span className="text-uppercase ps-2 ">|Thứ 3,01/11/2022</span>
                </ListGroup.Item>
                <ListGroup.Item>
                <span className="text-start fw-bold pe-2">Combo :</span>
                <span> </span>
                <span></span>
                </ListGroup.Item>
                <ListGroup.Item>
                <span className="text-start fw-bold pe-2">Ghế :</span>
                <span></span>
                <span></span>
                </ListGroup.Item>
                <ListGroup.Item>
                <span className="text-start py-2 fs-3">Tổng:</span>
                <span className="text-end text-danger py-1 fs-2 px-3 "> 0VND </span>
             
                </ListGroup.Item>
              </ListGroup>
              <Card.Body  style={{display:"flex" ,flexDirection:"row"}} >
              <Button  href={url} className="add btn btn-danger text-white text-uppercase" style={{margin:10}}>Quay lại</Button>
              <Button href={url+"/seatschair/payment"} className="add btn btn-danger text-white text-uppercase" style={{margin:10}}>Tiếp tục</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
