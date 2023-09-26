import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "gatsby";
import GlobalNav from "./globalNav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFacebook,
   faGithub,
   faLinkedin,
   faMastodon,
   faSlideshare,
   faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import bsidesLogo from "../images/bsides_logo.png";

const Layout = ({ children }) => {
   return (
      <Container>
         <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand>
               <Link to="/">
                  <img
                     src={bsidesLogo}
                     className="d-inline-block align-top"
                     alt="Security BSides logo"
                  />
               </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <GlobalNav />
                  <NavDropdown title="Events">
                     <NavDropdown.Item href="">Map</NavDropdown.Item>
                     <NavDropdown.Item href="">Upcoming</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item>
                        <Link to={"/events/"}>The Full List</Link>
                     </NavDropdown.Item>
                  </NavDropdown>
               </Nav>
            </Navbar.Collapse>
            <Nav>
               <Nav.Link href="https://infosec.exchange/@SecurityBSidesGlobal">
                  <FontAwesomeIcon icon={faMastodon} size="xl" />
               </Nav.Link>
               <Nav.Link href="https://github.com/securitybsides">
                  <FontAwesomeIcon icon={faGithub} size="xl" />
               </Nav.Link>
               <Nav.Link href="https://twitter.com/securitybsides">
                  <FontAwesomeIcon icon={faTwitter} size="xl" />
               </Nav.Link>
               <Nav.Link href="https://www.facebook.com/groups/232453505462/">
                  <FontAwesomeIcon icon={faFacebook} size="xl" />
               </Nav.Link>
               <Nav.Link href="https://www.linkedin.com/groups/2178344/">
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
               </Nav.Link>
               <Nav.Link href="https://www.slideshare.net/BSides">
                  <FontAwesomeIcon icon={faSlideshare} size="xl" />
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
