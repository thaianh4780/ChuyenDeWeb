/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
/* eslint-disable jsx-a11y/scope */
/* eslint-disable jsx-a11y/alt-text */
import { Col } from "reactstrap";
// import Quantity from "../component/Quantity"
import { QuantityPicker } from "react-qty-picker";
import { useNavigate } from "react-router-dom/dist";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../css/Payment.css";
import Header from "../component/Header";
import { Button, Image } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Footer from "../component/Footer";
export default function Payment() {
  const url = "/book-ticket";
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <Header />
        <Alert show={show} variant="success">
          <Alert.Heading>
            Thanh toán đang được sử lí vui lòng đợi ít phút (ᵔ.ᵔ)
          </Alert.Heading>
          <p>Tên bộ phim: Red</p>
          <p>địa chí rạp: 13/21 đường 12 quận thủ đức</p>
          <p>Giờ chiếu: 8:20 ngày chiếu: 12/11/2022</p>
          <p>Có thắc mắc vui lòng liên hệ đường dây nóng :093000567</p>
        </Alert>
      </div>

      {/* chon */}
      <div class="row  text-center">
        <div class="col-lg-9 ">
          {/* chon */}

          <h3 class="text-uppercase text-start text-white p-3 ">Thanh toán</h3>

          <div class="firsttable mx-3">
            <table class="table text-start table-striped table-light ">
              <tbody>
                {/* phần tử  */}

                <div class="row">
                  <div class="col-75">
                    <div class="container">
                      <form action="/action_page.php">
                        <div class="row">
                          <div class="col-50">
                            <h3>Billing Address</h3>
                            <label for="fname">
                              <i class="fa fa-user"></i> Full Name
                            </label>
                            <input
                              type="text"
                              id="fname"
                              name="firstname"
                              placeholder="John M. Doe"
                            />
                            <label for="email">
                              <i class="fa fa-envelope"></i> Email
                            </label>
                            <input
                              type="text"
                              id="email"
                              name="email"
                              placeholder="john@example.com"
                            />
                          </div>

                          <div class="col-25">
                            <h3>Payment</h3>
                            <Image
                              style={{
                                display: "flex",
                                width: 250,
                              
                              }}
                              src={require("../assets/Payment.jpg")}
                            />
                          </div>
                        </div>

                        <label>
                          Lưu ý kiểm tra thông tin Trước khi Thực hiện thanh
                          toán
                        </label>
                      </form>
                    </div>
                  </div>
                </div>
                {/* end */}

                {/* end */}
              </tbody>
            </table>
          </div>
          {/* end */}
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
                <span className="text-end text-danger py-1 fs-2 px-3 ">
                  {" "}
                  0VND{" "}
                </span>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body style={{ display: "flex", flexDirection: "row" }}>
              <Button
                href={url + "/seatschair/"}
                className="add btn btn-danger text-white text-uppercase"
                style={{ margin: 10 }}
              >
                Quay lại
              </Button>

              {!show && (
                <Button
                  type="submit"
                  className="add btn btn-danger text-white text-uppercase"
                  style={{ margin: 10 }}
                  onClick={() => setShow(true)}
                >
                  Xác Nhận
                </Button>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}
