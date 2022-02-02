import React, { FC, useContext } from 'react';
import Image from 'next/image';
import {
  Navbar,
  NavbarBrand,
  Container,
  Nav,
  NavLink,
  NavItem,
} from 'react-bootstrap';
import styles from './styles.module.scss';
import { AuthContext } from '../../stores/AuthContext';

const Navigation:FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <Navbar id={styles.navigation} collapseOnSelect expand="md">
      <Container>
        <NavbarBrand href="/">project-registry.org</NavbarBrand>
        <Navbar.Toggle className={styles.navigationToggle}>
          <Image
            id={styles.menuIcon}
            src="/menu.svg"
            layout="fixed"
            alt="Menu icon"
            width={30}
            height={30}
          />
        </Navbar.Toggle>
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
                  <NavLink href="/login">{user.normalizedUserName}</NavLink>
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
