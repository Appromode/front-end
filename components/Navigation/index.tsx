import React, { FC, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Container,
  Nav,
  NavLink,
  NavItem,
} from 'react-bootstrap';
import styles from './styles.module.scss';

const Navigation:FC = () => {
  const [user] = useState(undefined);

  return (
    <Navbar id={styles.navigation} collapseOnSelect expand="md">
      <Container>
        <NavbarBrand href="/">project-registry.org</NavbarBrand>
        <Navbar.Toggle className={styles.navigationToggle} />
        <Navbar.Collapse className="justify-content-end">
          <Nav id={styles.staticLinks}>
            <NavItem>
              <NavLink href="/project-forum">Project Forum</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/project-supervisors">Project Supervisors</NavLink>
            </NavItem>
          </Nav>
          {
            user ? (
              <Nav>
                <NavItem>
                  <NavLink href="/login">Account</NavLink>
                </NavItem>
              </Nav>
            ) : (
              <Nav>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/sign-up">Sign Up</NavLink>
                </NavItem>
              </Nav>
            )
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
