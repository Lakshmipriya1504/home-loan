import { Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

export const AppNav = () => {
  return (
    <div>
      <Navbar variant="dark" expand="lg" style={{ background: "olive" }}>
        <Navbar.Brand className="ml-5 text-light" as={Link} to="/admin">
          🏠Admin
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-5 text-dark" as={Link} to="/viewAll">
              View All Customers
            </Nav.Link>
            <Nav.Link className="mr-5 text-dark" as={Link} to="/viewbyId">
              View Customer_By_ID
            </Nav.Link>
            <Nav.Link className="mr-5 text-dark" as={Link} to="/delete">
              Delete_By_ID
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};