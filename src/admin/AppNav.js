import { Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

export const AppNav = () => {
  return (
    <div>
      <Navbar variant="dark" expand="lg" style={{ background: "olive" }}>
        <Navbar.Brand className="ml-5 text-light" as={Link} to="/">
        <h5>🏠Home Loan</h5>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-5 text-dark" as={Link} to="/viewAll">
              <h6>View All Customers</h6>
            </Nav.Link>
            <Nav.Link className="mr-5 text-dark" as={Link} to="/viewbyId">
             <h6> View Customer_By_ID</h6>
            </Nav.Link>
            <Nav.Link className="mr-5 text-dark" as={Link} to="/delete">
             <h6> Delete_By_ID</h6>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};