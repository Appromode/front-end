import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import styles from '../../../components/styles.module.scss';

interface MyFormValues {
  firstName: string;
}

export const Index: FC = () => {
  const initialValues: MyFormValues = { firstName: '' };
  return (
    <Container>
      <Row>
            <div className={styles.header}>
              <h1 id={styles.headertext}>Grid Document</h1>
              <div className={styles.subtext1}>Project Name</div>
              <div className={styles.subtext1}>Student Name</div>
              <div className={styles.subtext2}>First Marker Name</div>
              <div className={styles.subtext2}>Second Marker Name</div>
            </div>
            <div className={styles.progressbar}>
              <p id={styles.pageid}>Page 1 of 6</p>
              <p id={styles.awardedmark}>Mark Awarded %</p>
            </div>
            <div>
              <p id={styles.title}>Intrinsic difficulty and scope of tasks attempted by student</p>
            </div>
            <div>
              <p className={styles.subtitle}>Well Below Expectation</p>
              <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                  console.log({ values, actions });
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }}
              >
                <Form>
                  <span className={styles.checkbox}>
                    <Field type="checkbox" id="none" name="none" placeholder="None or Trivial" />
                  </span>
                  <label htmlFor="none" className={styles.checkboxtext}>
                    None or trivial
                  </label>
                  <div className={styles.formspacer} />
                  <span className={styles.checkbox}>
                    <Field type="checkbox" id="smalltasks" name="smalltasks" placeholder="Small Tasks" />
                  </span>
                    <label htmlFor="smalltasks" className={styles.checkboxtext}>
                      Small tasks not requiring knowledge from course
                    </label>
                  <div className={styles.formspacer} />
                  <span className={styles.checkbox}>
                    <Field type="checkbox" id="basictasks" name="basictasks" placeholder="Basic Tasks" />
                  </span>
                  <label htmlFor="basictasks" className={styles.checkboxtext}>
                    Basic tasks, minimal course knowledge
                  </label>
                  <p className={styles.subtitle}>Below</p>
                  <span className={styles.checkbox}>
                    <Field type="checkbox" id="insufficient" name="insufficient" placeholder="Insufficient" />
                  </span>
                  <label htmlFor="insufficient" className={styles.checkboxtext}>
                    Insufficient to show necessary competence
                  </label>
                  <p className={styles.subtitle}>Third</p>
                  <span className={styles.checkbox}>
                    <Field type="checkbox" id="straightforward" name="straightforward" placeholder="Straightforward" />
                  </span>
                  <label htmlFor="straightforward" className={styles.checkboxtext}>
                    Straightforward; involves application of knowledge and skills from course
                  </label>
                  <p className={styles.subtitle}>2.2</p>
                  <span className={styles.checkbox}>
                    <Field type="checkbox" id="mostlystraightforward" name="mostlystraightforward" placeholder="Mostly Straightforward" />
                  </span>
                  <label htmlFor="mostlystraightforward" className={styles.checkboxtext}>
                    Largely straightforward but requires some new learning
                  </label>
                  <p className={styles.subtitle}>2.1</p>
                  <span className={styles.checkbox}>
                    <Field type="checkbox" id="slightlychallenging" name="slightlychallenging" placeholder="Slightly Challenging" />
                  </span>
                  <label htmlFor="slightlychallenging" className={styles.checkboxtext}>
                    Some elements challenging; requires new learning and good understanding
                  </label>
                  <p className={styles.subtitle}>First</p>
                  <span className={styles.checkbox}>
                    <Field type="checkbox" id="subschallenge" name="subschallenge" placeholder="Substantially Challenging" />
                  </span>
                  <label htmlFor="subschallenge" className={styles.checkboxtext}>
                    Substantial challenge; highly complex; must gain advanced knowledge
                  </label>
                  <p className={styles.subtitle}>Beyond First</p>
                  <span className={styles.checkbox}>
                    <Field type="checkbox" id="challenge" name="challenge" placeholder="Challenging" />
                  </span>
                  <label htmlFor="challenge" className={styles.checkboxtext}>
                    Challenge and scope in top 5% of projects
                  </label>
                  <p className={styles.subtitle}>Well Beyond</p>
                  <span className={styles.checkbox}>
                    <Field type="checkbox" id="beyondchallenge" name="beyondchallenge" placeholder="Beyond Challenging" />
                  </span>
                  <label htmlFor="beyondchallenge" className={styles.checkboxtext}>
                    Challenge and scope in top 1% of projects
                  </label>
                  <div className={styles.container}>
                    <div className={styles.navbar}>
                      <button type="button" className={styles.save}>Save</button>
                      <span className={styles.formspacer} />
                      <button type="button" className={styles.next}>Next</button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
            <footer id={styles.footer}>
              <p>Page 1 of 6</p>
            </footer>
      </Row>
    </Container>
  );
};

export default Index;
