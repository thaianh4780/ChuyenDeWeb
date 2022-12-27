import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import ListfilmCategoriesHome from "./ListfilmCategoriesHome";
export default function CategoryHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);
  const [showDropdown6, setShowDropdown6] = useState(false);

  const [showDropdown7, setShowDropdown7] = useState(false);

  return (
    <Navbar variant="dark" bg="dark" expand="sm">
      <Container fluid>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark">
          {/* 1 */}
          <Nav style={{ paddingRight: 20, color: "white" }}>
            <NavDropdown
              id="nav-dropdown-light-example"
              title="Phim"
              menuVariant="dark"
              onMouseLeave={() => setShowDropdown(false)}
              onMouseOver={() => setShowDropdown(true)}
              show={showDropdown}
            >
             
                <ListfilmCategoriesHome />
            
            </NavDropdown>
          </Nav>
          {/* 2 */}
          <Nav style={{ paddingRight: 20, color: "white" }}>
            <NavDropdown
              id="nav-dropdown-light-example"
              title="Góc điện ảnh"
              menuVariant="dark"
              onMouseLeave={() => setShowDropdown2(false)}
              onMouseOver={() => setShowDropdown2(true)}
              show={showDropdown2}
            >
              <NavDropdown.Item href="#action/3.1">Thể Loại</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Diễn viên</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3"> Đạo diễn</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Blog</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* 3 */}
          <Nav style={{ paddingRight: 20, color: "white" }}>
            <NavDropdown
              id="nav-dropdown-light-example"
              title="Sự Kiện"
              menuVariant="dark"
              onMouseLeave={() => setShowDropdown3(false)}
              onMouseOver={() => setShowDropdown3(true)}
              show={showDropdown3}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* 4 */}
          <Nav style={{ paddingRight: 20, color: "white" }}>
            <NavDropdown
              id="nav-dropdown-light-example"
              title="Rạp giá/Vé"
              menuVariant="dark"
              onMouseLeave={() => setShowDropdown4(false)}
              onMouseOver={() => setShowDropdown4(true)}
              show={showDropdown4}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* 5 */}
          <Nav style={{ paddingRight: 20, color: "white" }}>
            <NavDropdown
              id="nav-dropdown-light-example"
              title="Phim"
              menuVariant="dark"
              onMouseLeave={() => setShowDropdown5(false)}
              onMouseOver={() => setShowDropdown5(true)}
              show={showDropdown5}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* 6 */}
          <Nav style={{ paddingRight: 20, color: "white" }}>
            <NavDropdown
              id="nav-dropdown-light-example"
              title="Hỗ Trợ"
              menuVariant="dark"
              onMouseLeave={() => setShowDropdown6(false)}
              onMouseOver={() => setShowDropdown6(true)}
              show={showDropdown6}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* 7 */}
          <Nav style={{ paddingRight: 20, color: "white" }}>
            <NavDropdown
              id="nav-dropdown-light-example"
              title="Thành viên"
              menuVariant="dark"
              onMouseLeave={() => setShowDropdown7(false)}
              onMouseOver={() => setShowDropdown7(true)}
              show={showDropdown7}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
