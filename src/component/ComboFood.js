/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/scope */
/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line no-unused-vars
import Table from "react-bootstrap/Table";
import React from "react";
import { Col } from "reactstrap";
// import Quantity from "../component/Quantity"
import { QuantityPicker } from "react-qty-picker";
import { useNavigate } from "react-router-dom/dist";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
export default function ComboFood() {
  // const navigate = useNavigate();
  const url ="/book-ticket"

  return (
    <>
      <div className="main">
        {/* chon */}
        <div className="row g-0 text-center">
          <div className="col-sm-9 ">
            {/* chon */}
            <div className=" col7-container ">
              <h3 class="text-uppercase text-start text-white p-3 ">
                Chọn vé/Thức Ăn
              </h3>
              {/* chon combo */}
              <div class="firsttable mx-3">
                <table class="table text-start table-striped table-light ">
                  <thead>
                    <tr class="table-dark">
                      <th scope="col" colspan="3">
                        Loại vé
                      </th>
                      <th scope="col" class="text-center">
                        Số Lượng
                      </th>
                      <th scope="col" class="text-end">
                        Giá(VND)
                      </th>
                      <th scope="col" class="text-end">
                        Tổng(VND)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* phần tử  */}
                    {/* 1 */}
                    <tr>
                      <td colspan="3">
                        <b>Vé người lớn</b>
                        <Col>Vé 2d</Col>
                      </td>
                      <td scope="row" class="text-center crop-long-texts">
                        <QuantityPicker />
                      </td>
                      <td class="text-end">
                        <span>50,00</span>
                      </td>
                      <td class="text-end">
                        <span>0</span>
                      </td>
                    </tr>
                    {/* end */}
                    {/* 2 */}
                    <tr>
                      <td colSpan="3">
                        <b>Vé 2D thành viên</b>
                        <Col>Vé 2D-Chỉ áp dụng khách hàng thành viên</Col>
                      </td>
                      <td scope="row" class="text-center crop-long-texts">
                        <QuantityPicker />
                      </td>
                      <td class="text-end">
                        <span>50,00</span>
                      </td>
                      <td class="text-end">
                        <span>0</span>
                      </td>
                    </tr>
                    {/*3  */}
                    <tr>
                      <td colspan="3">
                        <b>Vé Đôi</b>
                        <Col>Vé Vé ghế đôi (bao gồm 2 vé)</Col>
                      </td>
                      <td scope="row" class="text-center crop-long-texts">
                        <QuantityPicker />
                      </td>
                      <td class="text-end">
                        <span>50,00</span>
                      </td>
                      <td class="text-end">
                        <span>0</span>
                      </td>
                    </tr>
                    {/* 4 */}
                    <tr>
                      <td colspan="3">
                        <b>Vé Đôi Thành viên</b>
                        <Col>
                          Vé Vé ghế đôi (bao gồm 2 vé) áp dụng cho thành viên
                        </Col>
                      </td>
                      <td scope="row" class="text-center crop-long-texts">
                        <QuantityPicker />
                      </td>
                      <td class="text-end">
                        <span>50,00</span>
                      </td>
                      <td class="text-end">
                        <span>0</span>
                      </td>
                    </tr>

                    {/* tổng */}
                    <tr>
                      <td colspan="5" class="text-danger">
                        <span>Tổng</span>
                      </td>
                      <td class="text-end text-danger">
                        <span>0</span>
                      </td>
                    </tr>
                    {/* end */}
                  </tbody>
                </table>
              </div>
              {/* end */}
              {/* chon ve */}
              <div class=" mx-3">
                <table class="table text-start table-striped table-light ">
                  <thead>
                    <tr class="table-dark">
                      <th scope="col" colspan="3">
                        Loại Đồ ăn
                      </th>
                      <th scope="col" class="text-center">
                        Số Lượng
                      </th>
                      <th scope="col" class="text-end">
                        Giá(VND)
                      </th>
                      <th scope="col" class="text-end">
                        Tổng(VND)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* 1 */}
                    <tr>
                      <td colSpan={3} style={{ width: 415 }}>
                        <div class="wrapper3">
                          <div>
                            <span class="text-start crop-long-texts fw-bold text-dark">
                              iCombo 1 Big Extra{" "}
                            </span>
                          </div>
                          <div>
                            <img
                              class="img-fluid img-table"
                              src={require("../assets/combo1.jpg")}
                            />
                          </div>
                          <div style={{ marginTop: -30 }}>
                            <span class="text-start text-dark text-break text-uppercase ">
                              1 BẮP + 1 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1
                              SNACK
                            </span>
                          </div>
                        </div>
                      </td>
                      <td scope="row" class="text-center crop-long-texts">
                        <QuantityPicker />
                      </td>
                      <td class="text-end">
                        <span>50,00</span>
                      </td>
                      <td class="text-end">
                        <span>0</span>
                      </td>
                    </tr>
                    {/* 2 */}
                    <tr>
                      <td colSpan={3} style={{ width: 415 }}>
                        <div class="wrapper3">
                          <div>
                            <span class="text-start crop-long-texts fw-bold text-dark">
                              iCombo 1 Big Extra{" "}
                            </span>
                          </div>
                          <div>
                            <img
                              class="img-fluid img-table"
                              src={require("../assets/combo2.png")}
                            />
                          </div>
                          <div style={{ marginTop: -30 }}>
                            <span class="text-start text-dark text-break text-uppercase ">
                              1 BẮP + 1 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1
                              SNACK
                            </span>
                          </div>
                        </div>
                      </td>
                      <td scope="row" class="text-center crop-long-texts">
                        <QuantityPicker />
                      </td>
                      <td class="text-end">
                        <span>50,00</span>
                      </td>
                      <td class="text-end">
                        <span>0</span>
                      </td>
                    </tr>
                    {/* 3 */}
                    <tr>
                      <td colSpan={3} style={{ width: 415 }}>
                        <div class="wrapper3">
                          <div>
                            <span class="text-start crop-long-texts fw-bold text-dark">
                              iCombo 1 Big Extra{" "}
                            </span>
                          </div>
                          <div>
                            <img
                              class="img-fluid img-table"
                              src={require("../assets/combo3.jpg")}
                            />
                          </div>
                          <div style={{ marginTop: -30 }}>
                            <span class="text-start text-dark text-break text-uppercase ">
                              1 BẮP + 1 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1
                              SNACK
                            </span>
                          </div>
                        </div>
                      </td>
                      <td scope="row" class="text-center crop-long-texts">
                        <QuantityPicker />
                      </td>
                      <td class="text-end">
                        <span>50,00</span>
                      </td>
                      <td class="text-end">
                        <span>0</span>
                      </td>
                    </tr>
                    {/* 4 */}
                    <tr>
                      <td colSpan={3} style={{ width: 415 }}>
                        <div class="wrapper3">
                          <div>
                            <span class="text-start crop-long-texts fw-bold text-dark">
                              iCombo 1 Big Extra{" "}
                            </span>
                          </div>
                          <div>
                            <img
                              class="img-fluid img-table"
                              src={require("../assets/combo4.jpg")}
                            />
                          </div>
                          <div style={{ marginTop: -30 }}>
                            <span class="text-start text-dark text-break text-uppercase ">
                              1 BẮP + 1 NƯỚC 32 Oz (LIPTON/SUỐI/DIET PEPSI) + 1
                              SNACK
                            </span>
                          </div>
                        </div>
                      </td>
                      <td scope="row" class="text-center crop-long-texts">
                        <QuantityPicker />
                      </td>
                      <td class="text-end">
                        <span>50,00</span>
                      </td>
                      <td class="text-end">
                        <span>0</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
          </div>
          {/* end */}
          {/* cart */}
          <div className="col-3">
            {/* <div className="col3-container">
              <img
                className="img-fluid img-table"
                src={require("../assets/a1.jpg")}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  className="text-start crop-long-texts fw-bold text-dark text-uppercase mt-2"
                  style={{ flex: 1 }}
                >
                  iCombo 1 Big Extra{" "}
                </span>
                <span
                  className="text-start text-secondary text-break text-uppercase fw-bold  "
                  style={{ flex: 1 }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                </span>
              </div>
              <div className="red-text py-3">
                <span className="text-start text-uppercase fs-5 text-white bg-danger fw-bold me-2">
                  c13
                </span>
                <span className="text-danger">
                  {" "}
                  (*) Phim chỉ dành cho khán giả từ 13 tuổi trở lên
                </span>
              </div>
              <div className="ulb">
                <span className="text-start fw-bold pe-2">Rạp :</span>
                <span> Galaxy Trung Chánh</span>
                <span className="text-uppercase ps-2 ">|rạp 2</span>
              </div>
              <div className="ulb">
                <span className="text-start fw-bold pe-2">Xuất Chiếu :</span>
                <span> 15:15</span>
                <span className="text-uppercase ps-2 ">|Thứ 3,01/11/2022</span>
              </div>
              <div className="ulb">
                <span className="text-start fw-bold pe-2">Combo :</span>
                <span> </span>
                <span></span>
              </div>
              <div className="ulb">
                <span className="text-start fw-bold pe-2">Ghế :</span>
                <span></span>
                <span></span>
              </div>
              <div className="total my-3">
                <span className="text-start py-2 fs-3">Tổng:</span>
                <span className="text-end text-danger py-1 fs-2 px-3 "> 0VND </span>
              </div>
              <button
                // onClick={() => navigate(`/book-ticket/seatsChairs`)}
                className="add btn btn-danger text-white text-uppercase"
              >
                tiếp tục →{" "}
              </button>
            </div> */}
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
              <Card.Body>
              <Button href={url+"/seatschair"} className="add btn btn-danger text-white text-uppercase" style={{margin:10}}>Tiếp tục</Button>
                
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
