import React, { useState } from 'react';
import {
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

function Index1() {
  const skillref = React.createRef();
  const [tableisOccupied, setTable] = useState(false);
  const TableEmpty = (
    <div id={styles.overflow}>
      <table>
        <tr>
          <th className={styles.skillstable}>Skills</th>
        </tr>
        <td className={styles.skillstable}>None selected</td>
      </table>
    </div>
  );
  const TableOccupied = (
    <div id={styles.overflow}>
      <table>
        <tr>
          <th className={styles.skillstable}>Skills</th>
        </tr>
        <td className={styles.skillstable}>Skills Selected</td>
      </table>
    </div>
  );

  const Skills = () => {
    if (tableisOccupied) {
      return TableOccupied; // Maybe render instead
    }
    return TableEmpty;
  };

  const SkillSelected = () => {
    if (skillref.current.value >= 1) {
      console.log(skillref.current.value);
      setTable(true);
      console.log(tableisOccupied);
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
        }}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <div className={styles.textbox}>
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
                    <option value="1">Java</option>
                    <option value="2">CSS</option>
                    <option value="3">HTML</option>
                    <option value="4">PHP</option>
                    <option value="5">React</option>
                    <option value="6">MySQL</option>
                    <option value="7">PostgreSQL</option>
                    <option value="8">C++</option>
                    <option value="9">Object Oriented Programming</option>
                    <option value="10">Functional Programming</option>
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
}

export default Index1;
