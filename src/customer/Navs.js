import { Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import { AppFooter } from "./AppFooter";

export const Navs = () => {
  return (
    <div>
      <Navbar variant="dark" expand="lg" style={{ background: "olive" }}>
        <Navbar.Brand className="ml-5 text-light" as={Link} to="/">
          <h5>🏠Home Loan</h5>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-5 text-dark" as={Link} to="/customer-list">
              <h6>My Details</h6>
            </Nav.Link>
            <Nav.Link className="mr-5 text-dark" as={Link} to="/customer-upsert">
              <h6>Customer Register</h6>
            </Nav.Link>
            <Nav.Link className="mr-5 text-dark " as={Link} to="/">
              <h6>Application Status</h6>
            </Nav.Link>
            <Nav.Link className="mx-auto text-dark" as={Link} to="/customer-list">
             <h6>Sign Out</h6>
            </Nav.Link>
            <Nav.Link className="mx-auto text-dark" as={Link} to="/admin-register">
             <h6>Admin Register</h6>
            </Nav.Link>
            <Nav.Link className="mx-auto text-dark" as={Link} to="/apply-loan">
              <h6>ApplyLoan</h6>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppFooter />
    </div>
  );
};