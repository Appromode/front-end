import React, { FC, useState } from 'react';
import {
  Row,
  Col,
  FormControl,
  FormSelect,
  FormGroup,
  FormLabel,
} from 'react-bootstrap';
import {
  Formik,
  Form,
} from 'formik';
import styles from './styles.module.scss';

const RegistrationForm:FC = () => {
  const [skillslist, setSkills] = useState([]);
  const skillref = React.createRef();
  const [tableisOccupied, setTable] = useState(false);

  const AddSkill = () => (
    <div>
      {
        skillslist.map((skill) => (
          <div className={styles.tag}>{skill}</div>
        ))
      }
    </div>
  );

  const TagsOccupied = (
    <div>
      <div>Skills Selected</div>
      <div className={styles.formspacer1} />
      <AddSkill />
    </div>
  );

  const TagsEmpty = (
    <div>No skills selected</div>
  );

  const Skills = () => {
    if (tableisOccupied) {
      return TagsOccupied;
    }
    return TagsEmpty;
  };

  const DisplaySkills = () => {
    if (skillref.current.value !== 'Select your skills') {
      setSkills((currentSkills) => [...currentSkills, skillref.current.value]);
      setTable(true);
      return TagsOccupied;
    }
    return TagsEmpty;
  };

  return (
    <>
      <p id={styles.title1}>Student Registration</p>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          kentID: 0,
          email: '',
          tags: skillslist,
        }}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <div className={styles.textbox}>
          <Form>
            <Row>
              <Col lg={6}>
                <FormGroup controlId="firstname">
                  <FormLabel>First Name</FormLabel>
                  <FormControl type="text" placeholder="First Name" />
                </FormGroup>
              </Col>
              <Col lg={6}>
                <FormGroup controlId="lastname">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl type="text" placeholder="Last Name" />
                </FormGroup>
              </Col>
            </Row>
            <div className={styles.formspacer1} />
            <FormGroup controlId="kentId">
              <FormLabel>Kent ID</FormLabel>
              <FormControl type="text" placeholder="Kent ID" />
            </FormGroup>
            <div className={styles.formspacer1} />
            <FormGroup controlId="email">
              <FormLabel>Kent Email</FormLabel>
              <FormControl type="email" placeholder="example@kent.ac.uk" />
            </FormGroup>
            <div className={styles.formspacer1} />
            <Row>
              <Col lg={6}>
                <FormGroup controlId="password">
                  <FormLabel>Password</FormLabel>
                  <FormControl type="password" placeholder="Password" />
                </FormGroup>
              </Col>
              <Col lg={6}>
                <FormGroup controlId="passwordConfirmation">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl type="password" placeholder="Confirm Password" />
                </FormGroup>
              </Col>
            </Row>
            <div className={styles.formspacer1} />
            <Row>
              <Col lg={6}>
                <FormGroup>
                  <FormLabel>Add Skills</FormLabel>
                  <FormSelect id="skills" ref={skillref}>
                    <option>Select your skills</option>
                    <option>Java</option>
                    <option>CSS</option>
                    <option>HTML</option>
                    <option>PHP</option>
                    <option>React</option>
                    <option>MySQL</option>
                    <option>PostgreSQL</option>
                    <option>C++</option>
                    <option>Object Oriented Programming</option>
                    <option>Functional Programming</option>
                  </FormSelect>
                </FormGroup>
              </Col>
              <Col className={styles.righttext1}>
                <button type="button" onClick={DisplaySkills} className={styles.save}>Add</button>
              </Col>
            </Row>
            <div className={styles.formspacer1} />
            <Skills />
            <div className={styles.formspacer1} />
            <button type="submit" className={styles.save}>Create Account</button>
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default RegistrationForm;
