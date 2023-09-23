import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMastodon, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import bsidesLogo from "../images/bsides_logo.png";

const Layout = ({ children }) => {
   return (
      <Container>
         <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="/">
               <img
                  src={bsidesLogo}
                  className="d-inline-block align-top"
                  alt="Security BSides logo"
               />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  {/* <Nav.Link href="/">Home</Nav.Link> */}
                  {/*  <Nav.Link href="#link">Link</Nav.Link> */}
                  <NavDropdown title="Events" id="basic-nav-dropdown">
                     <NavDropdown.Item href="/events">Map</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.4">
                        Upcoming
                     </NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item>
                        <Link to={"/events/"}>The Full List</Link>
                     </NavDropdown.Item>
                  </NavDropdown>
               </Nav>
            </Navbar.Collapse>
            <Nav>
               <Nav.Link href="mailto:info@securitybsides.org">
                  <FontAwesomeIcon icon={faEnvelope} size="xl" />
               </Nav.Link>
               <Nav.Link href="https://infosec.exchange/@SecurityBSidesGlobal">
                  <FontAwesomeIcon icon={faMastodon} size="xl" />
               </Nav.Link>
               <Nav.Link href="https://twitter.com/securitybsides">
                  <FontAwesomeIcon icon={faTwitter} size="xl" />
               </Nav.Link>
            </Nav>
         </Navbar>
         <Container>
            <main>{children}</main>
         </Container>
      </Container>
   );
};

export default Layout;
