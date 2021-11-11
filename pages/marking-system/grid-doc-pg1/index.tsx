import React, { FC } from 'react';
import {
  Container,
  Row,
  FormGroup,
  FormLabel,
  FormCheck,
  Image,
} from 'react-bootstrap';
import {
  Formik,
  Form,
} from 'formik';
import styles from '../../../components/styles.module.scss';

interface MyFormValues {
  firstName: string;
}

export const Index: FC = () => {
  const initialValues: MyFormValues = { firstName: '' };

  return (
    <div className={styles.header}>
      <div className={styles.topbar}>
        <Container>
          <Row>
            <div className={styles.header1}>
              <div id={styles.img}>
                <Image src="https://randomuser.me/api/portraits/men/64.jpg" width="100" roundedCircle />
              </div>
              <h1 id={styles.headertext}>Grid Document</h1>
              <div id={styles.studentname}>Student Name</div>
              <div id={styles.projectname}>Project Name</div>
              <div className={styles.subtext1}>First Marker Name</div>
              <div className={styles.subtext2}>Second Marker Name</div>
            </div>
            <div className={styles.progressbar}>
              <p id={styles.pageid}>Page 1 of 6</p>
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
                  <div className={styles.checkbox}>
                    <FormGroup>
                      <FormLabel htmlFor="none" />
                      <FormCheck id="none" type="checkbox" label="None or trivial" />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel htmlFor="smalltasks" />
                      <FormCheck id="smalltasks" type="checkbox" label="Small tasks not requiring knowledge from course" />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel htmlFor="basictasks" />
                      <FormCheck id="basictasks" type="checkbox" label="Basic tasks, minimal course knowledge" />
                    </FormGroup>
                    <p className={styles.subtitle}>Below</p>
                    <FormGroup>
                      <FormLabel htmlFor="insufficient" />
                      <FormCheck id="insufficient" type="checkbox" label="Insufficient to show necessary competence" />
                    </FormGroup>
                    <p className={styles.subtitle}>Third</p>
                    <FormGroup>
                      <FormLabel htmlFor="straightforward" />
                      <FormCheck id="straightforward" type="checkbox" label="Straightforward; involves application of knowledge and skills from course" />
                    </FormGroup>
                    <p className={styles.subtitle}>2.2</p>
                    <FormGroup>
                      <FormLabel htmlFor="mostlystraightforward" />
                      <FormCheck id="mostlystraightforward" type="checkbox" label="Largely straightforward but requires some new learning" />
                    </FormGroup>
                    <p className={styles.subtitle}>2.1</p>
                    <FormGroup>
                      <FormLabel htmlFor="slightlychallenging" />
                      <FormCheck id="slightlychallenging" type="checkbox" label="Some elements challenging; requires new learning and good understanding" />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel htmlFor="subschallenge" />
                      <FormCheck id="subschallenge" type="checkbox" label="Substantial challenge; highly complex; must gain advanced knowledge" />
                    </FormGroup>
                    <p className={styles.subtitle}>Beyond First</p>
                    <FormGroup>
                      <FormLabel htmlFor="challenge" />
                      <FormCheck id="challenge" type="checkbox" label="Challenge and scope in top 5% of projects" />
                    </FormGroup>
                    <p className={styles.subtitle}>Well Beyond</p>
                    <FormGroup>
                      <FormLabel htmlFor="beyondchallenge" />
                      <FormCheck id="beyondchallenge" type="checkbox" label="Challenge and scope in top 1% of projects" />
                    </FormGroup>
                    <div className={styles.container}>
                      <div className={styles.navbar}>
                        <button type="button" className={styles.save}>Save</button>
                        <span className={styles.formspacer} />
                        <button type="button" className={styles.next}>Next</button>
                      </div>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </Row>
        </Container>
        <footer id={styles.footer}>
          <p>Page 1 of 6</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
