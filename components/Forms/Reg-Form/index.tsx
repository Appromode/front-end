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
import styles from '../styles.module.scss';

const Index1:FC = () => {
  const [skillslist, setSkills] = useState([]); // skills list.map
  const skillref = React.createRef();
  const [tableisOccupied, setTable] = useState(false);
  const [pickedSkill, setSkill] = useState('No skill selected');

  const AddSkill = () => (
    <div>
      {
        skillslist.map((skill) => (
          <div className={styles.tag}>{skill}</div>
        ))
      }
    </div>
  );

  const render = () => (
    !skillslist.length
    ? 
    skillslist.map((skill) => (
      <div>{skill}</div>
    )) : <div>No skills selected</div>
  );

  const Skills = () => {
    const TableOccupied = (
      <div>
        <div>Skills Selected</div>
        <div className={styles.formspacer1} />
        <AddSkill />
      </div>
    );

    if (tableisOccupied) {
      return TableOccupied;
    }
    return null;
  };

  const SkillSelected = () => {
    if (skillref.current.value !== 'Select your skills') {
      setSkills((currentSkills) => [...currentSkills, skillref.current.value]);
      setSkill(skillref.current.value);
      setTable(true);
      return (<Skills />);
    }
    return null;
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
          <Row>
            <Col lg={6}>
              Hello
            </Col>
            <Col lg={6}>
              World
            </Col>
          </Row>
          <Form>
            <div className="d-flex">
              <div className={styles.lefttext}>
                <FormGroup>
                  <FormLabel>First Name</FormLabel>
                  <FormControl id="firstname" type="text" placeholder="First Name" />
                </FormGroup>
              </div>
              <div className={styles.formspacer2} />
              <div className={styles.righttext}>
                <FormGroup>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl id="lastname" type="text" placeholder="Last Name" />
                </FormGroup>
              </div>
            </div>
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
            <div className="d-flex">
              <div className={styles.lefttext}>
                <FormGroup controlId="formBasicPassword">
                  <FormLabel>Password</FormLabel>
                  <FormControl id="passwd" type="password" placeholder="Password" />
                </FormGroup>
              </div>
              <div className={styles.formspacer2} />
              <div className={styles.righttext}>
                <FormGroup>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl id="confpasswd" type="password" placeholder="Confirm" />
                </FormGroup>
              </div>
            </div>
            <div className={styles.formspacer1} />
            <div className="d-flex">
              <div className={styles.lefttext}>
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
              </div>
              <div className={styles.formspacer3} />
              <div className={styles.righttext1}>
                <button type="button" onClick={SkillSelected} className={styles.save}>Add</button>
              </div>
            </div>
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

export default Index1;
