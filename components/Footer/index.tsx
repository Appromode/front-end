import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './styles.module.scss';

const Footer = () => (
  <footer id={styles.footer}>
    <Container>
      <Row>
        <Col id={styles.footerText}> project-registry.org </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
