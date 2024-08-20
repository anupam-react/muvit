import { Icon } from "@iconify/react/dist/iconify.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = ({data}) => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const NavBarItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Promotions",
      path: "/promotions",
    },
    {
      name: "Booking",
      path: "/booking",
    },
    {
      name: "Dashboard",
      path: "/dashboard/delivery-zone",
    },
    {
      name: "Delivery Zone",
      path: "/dashboard/add-delivery-zone",
    },
    {
      name: "Dashboard",
      path: "/dashboard/delivery-partner",
    },
    {
      name: "Delivery Partners",
      path: "/dashboard/add-partner",
    },
    {
      name: "Dashboard",
      path: "/dashboard/dashboard/vehicle-type",
    },
    {
      name: "Delivery Partners",
      path: "/dashboard/add-vehicle-type",
    },
    {
      name: "Hi, John Doe",
      path: "/setting/admin",
    },
    {
      name: "Hi, John Doe",
      path: "/setting/payment",
    },
    {
      name: "Privacy Policy",
      path: "/setting/privacy-policy",
    },
    {
      name: "Contact Us",
      path: "/setting/contact-us",
    },
  ];

  const currentItem = NavBarItems.find((item) => item.path === pathname);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <p className="navbar-items">
            <span>{currentItem?.name}</span>
            <span>Get summary of your key metrices here.</span>
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <div className="navbar-items_right">
                <span>
                  <Icon icon="lets-icons:message-alt-fill" />
                </span>
                <span>
                  <Icon icon="mingcute:notification-newdot-fill" />
                </span>
                <span className="navbar-items_right_profile">
                  <span>
                    <img
                      className="navbar-items_right_profile_image"
                      src="/Images/LoginPage/userImage.jpg"
                      alt="userImage"
                    />
                  </span>
                  <span
                    onClick={() => navigate("/setting/admin")}
                    className="navbar-items_right_profile_name"
                  >
                    <span>{data?.user?.fullName}</span>
                    <span>Admin account</span>
                  </span>
                </span>
              </div>
            </Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
