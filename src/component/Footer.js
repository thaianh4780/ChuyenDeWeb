import React from "react";
import { MDBFooter, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
      <section className="" style={{ justifyContent: "center", margin: 100 }}>
        <MDBRow>
          <MDBCol
            lg="4"
            md="6"
            className="mb-4 mb-md-0"
            style={{ marginTop: 50 }}
          >
            <h5 className="text-uppercase" style={{ color: "orange" }}>
              Giới Thiệu
            </h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  <i class="bi bi-arrow-right"></i>
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Thoả thuận sử dụng
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Quy chế hoạt động
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol
            lg="3"
            md="6"
            className="mb-4 mb-md-0"
            style={{ marginTop: 50 }}
          >
            <h5 className="text-uppercase" style={{ color: "orange" }}>
              Góc điện ảnh
            </h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Thể loại phim
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Bình luận phim
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Blog điện ảnh
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Phim hay của tháng
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol
            lg="3"
            md="6"
            className="mb-4 mb-md-0"
            style={{ marginTop: 50 }}
          >
            <h5 className="text-uppercase" style={{ color: "orange" }}>
              Hỗ Trợ
            </h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Góp ý
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  SALE & SERVICES
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  RẠP / GIÁ VÉ
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Thanh Trần
        </a>
      </div>
    </MDBFooter>
  );
}
