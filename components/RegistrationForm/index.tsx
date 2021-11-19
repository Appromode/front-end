import React, { FC, useState } from 'react';
import {
  Row,
  Col,
  CloseButton,
  FormControl,
  FormSelect,
  FormGroup,
  FormLabel,
  OverlayTrigger,
  Tooltip,
  Props,
} from 'react-bootstrap';
import {
  Formik,
  Form,
} from 'formik';
import styles from './styles.module.scss';

const RegistrationForm:FC = () => {
  const [skillslist, setSkills] = useState([]);
  const [tableisOccupied, setTable] = useState(false);
  const [val, setVal] = useState('Select your skills');

  const renderTooltip = (props: Props) => (
    <Tooltip id="button-tooltip" {...props}>
      Remove Skill
    </Tooltip>
  );

  const AddSkill = () => (
    <div>
      {
        skillslist.map((skill) => (
          <>
            <div className={styles.tag}>{skill}</div>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <CloseButton className={styles.tagRemover} />
            </OverlayTrigger>
          </>
        ))
      }
    </div>
  );

  const TagsOccupied = (
    <div>
      <div>Skills Selected</div>
      <div className={styles.formspacer} />
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
    if (val !== 'Select your skills' && skillslist.includes(val) === false) {
      setSkills((currentSkills) => [...currentSkills, val]);
      setTable(true);
      return TagsOccupied;
    }
    return TagsEmpty;
  };

  return (
    <>
      <div className={styles.formspacer} />
      <div className={styles.centreConsole}>
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
                <Col lg={{ span: 10, offset: 1 }}>
                  <FormGroup controlId="firstname">
                    <FormLabel>First Name</FormLabel>
                    <FormControl type="text" placeholder="First Name" />
                  </FormGroup>
                </Col>
              </Row>
              <div className={styles.formspacer} />
              <Row>
                <Col lg={{ span: 10, offset: 1 }}>
                  <FormGroup controlId="lastname">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl type="text" placeholder="Last Name" />
                  </FormGroup>
                </Col>
              </Row>
              <div className={styles.formspacer} />
              <Row>
                <Col lg={{ span: 10, offset: 1 }}>
                  <FormGroup controlId="kentId">
                    <FormLabel>Kent ID</FormLabel>
                    <FormControl type="text" placeholder="Kent ID" />
                  </FormGroup>
                </Col>
              </Row>
              <div className={styles.formspacer} />
              <Row>
                <Col lg={{ span: 10, offset: 1 }}>
                  <FormGroup controlId="email">
                    <FormLabel>Kent Email</FormLabel>
                    <FormControl type="email" placeholder="example@kent.ac.uk" />
                  </FormGroup>
                </Col>
              </Row>
              <div className={styles.formspacer} />
              <Row>
                <Col lg={{ span: 10, offset: 1 }}>
                  <FormGroup controlId="password">
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" placeholder="Password" />
                  </FormGroup>
                </Col>
              </Row>
              <div className={styles.formspacer} />
              <Row>
                <Col lg={{ span: 10, offset: 1 }}>
                  <FormGroup controlId="passwordConfirmation">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl type="password" placeholder="Confirm Password" />
                  </FormGroup>
                </Col>
              </Row>
              <div className={styles.formspacer} />
              <Row>
                <Col lg={{ span: 7, offset: 1 }}>
                  <FormGroup>
                    <FormLabel>Add Skills</FormLabel>
                    <FormSelect id="skills" value={val} onChange={(e) => setVal(e.target.value)}>
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
                <Col className={styles.addButton} lg={3}>
                  <button type="button" onClick={DisplaySkills} className={styles.save1}>Add</button>
                </Col>
              </Row>
              <div className={styles.formspacer} />
              <Row>
                <Col lg={{ span: 10, offset: 1 }}>
                  <Skills />
                </Col>
              </Row>
              <div className={styles.formspacer} />
              <Row>
                <Col className={styles.buttonWrapper}>
                  <button type="submit" className={styles.save}>Create Account</button>
                </Col>
              </Row>
              <div className={styles.formspacer} />
            </Form>
          </div>
        </Formik>
      </div>
      <div className={styles.formspacer} />
    </>
  );
};

export default RegistrationForm;
