import { Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

export const AppNavs = () => {
  return (
    <div>
      <Navbar variant="dark" expand="lg" style={{ background: "olive" }}>
        <Navbar.Brand className="ml-5 text-light" as={Link} to="/homeloan">
          🏠HomeLoan
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-5 text-dark" as={Link} to="/viewcustomer">
              View Customers
            </Nav.Link>
            <Nav.Link className="mr-5 text-dark" as={Link} to="/approval">
              Approval
            </Nav.Link>
            <Nav.Link className="mr-5 text-dark" as={Link} to="/status">
              Status
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};