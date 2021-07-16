
import { Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

export const Navigations = () => {
  return (
    <div>
      <Navbar variant="dark" expand="lg" style={{ background: "olive" }}>
        <Navbar.Brand className="ml-5 text-light" as={Link} to="/HomeLoan">
          🏠HomeLoan
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-5 text-dark " as={Link} to="/viewcustomer">
              ViewCustomerPage
            </Nav.Link>
            <Nav.Link className="mr-5  text-dark" as={Link} to="/docsverification">
              DocsVerificationPage
            </Nav.Link>
            <Nav.Link className="mr-5  text-dark" as={Link} to="/status">
              StatusPage
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};