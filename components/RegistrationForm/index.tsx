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

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): string => (
    event.target.value);

  const DisplaySkills = () => {
    if (onChange !== 'Select your skills') {
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
          skills: skillslist,
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
              <Col className={styles.lefttext} lg={6}>
                <FormGroup>
                  <FormLabel>First Name</FormLabel>
                  <FormControl id="firstname" type="text" placeholder="First Name" />
                </FormGroup>
              </Col>
              <Col className={styles.righttext} lg={6}>
                <FormGroup>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl id="lastname" type="text" placeholder="Last Name" />
                </FormGroup>
              </Col>
            </Row>
            <div className={styles.formspacer1} />
            <FormGroup>
              <FormLabel>Kent ID</FormLabel>
              <FormControl id="kentid" type="text" placeholder="Kent ID" />
            </FormGroup>
            <div className={styles.formspacer1} />
            <FormGroup>
              <FormLabel>Kent Email</FormLabel>
              <FormControl id="email" type="email" placeholder="example@kent.ac.uk" />
            </FormGroup>
            <div className={styles.formspacer1} />
            <Row className="d-flex">
              <Col className={styles.lefttext} lg={6}>
                <FormGroup controlId="formBasicPassword">
                  <FormLabel>Password</FormLabel>
                  <FormControl id="passwd" type="password" placeholder="Password" />
                </FormGroup>
              </Col>
              <Col className={styles.righttext} lg={6}>
                <FormGroup>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl id="confpasswd" type="password" placeholder="Confirm" />
                </FormGroup>
              </Col>
            </Row>
            <div className={styles.formspacer1} />
            <Row className="d-flex">
              <Col className={styles.lefttext} lg={6}>
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
