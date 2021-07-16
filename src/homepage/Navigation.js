import React from "react";
import '../App.css'
import { Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            🏠 Home Loan
          </Link>

          <div className="linkText">
          <Nav variant="pills" activeKey="1" >
                <Nav.Item>
                    <Nav.Link eventKey="home" href="/" className="linkText">
                        Home
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="about" title="Item" href="/about" className="linkText">
                        About
                    </Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link eventKey="register" href="/register" className="linkText">
                        Register
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="login" href="/login" className="linkText">
                        Login
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="contact" href="/contact" className="linkText">
                        Contact
                    </Nav.Link>
                </Nav.Item>
            </Nav>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);