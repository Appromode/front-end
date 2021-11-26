import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './styles.module.scss';

const Footer = () => (
  <Row id={styles.footer}>
    <Col id={styles.footerText}> project-registry.org </Col>
  </Row>
);

export default Footer;
