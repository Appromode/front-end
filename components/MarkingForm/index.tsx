/* eslint-disable max-len */
import React, { FC } from 'react';
import {
  FormGroup,
  FormLabel,
  FormCheck,
} from 'react-bootstrap';
import { object, number, SchemaOf } from 'yup';
import MarkingFormWrapper from '../MarkingFormWrapper';
import styles from '../RegistrationForm/styles.module.scss';
import Marks from '../../types/marks';

const MarkingForm: FC = () => {
  const initialValues = {
    taskDifficulty: 0,
    technicalAchievements: 0,
    technicalContributions: 0,
    projectContributions: 0,
    teamworkSkills: 0,
    criticalReflection: 0,
  };

  const validationSchema: SchemaOf<Marks> = object().shape({
    taskDifficulty: number().required(),
    technicalAchievements: number().required(),
    technicalContributions: number().required(),
    projectContributions: number().required(),
    teamworkSkills: number().required(),
    criticalReflection: number().required(),
  });

  return (
    <MarkingFormWrapper
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={validationSchema}
    >
      <div className={styles.checkbox}>
        <FormGroup>
          <h1 id={styles.gradeaspect}>Intrinsic difficulty and scope of tasks attempted by student</h1>
          <p className={styles.subtitle}>Well below expectation</p>
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
        <p className={styles.subtitle}>First Class</p>
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

      <div className={styles.checkbox}>
        <FormGroup>
          <h1 id={styles.gradeaspect}>Quality of technical achievements and contributions</h1>
          <p className={styles.subtitle}>Well below expectation</p>
          <FormLabel htmlFor="none" />
          <FormCheck id="none" type="checkbox" label="None or trivial" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="verypoor" />
          <FormCheck id="verypoor" type="checkbox" label="Very poor; shows little understanding" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="poor" />
          <FormCheck id="poor" type="checkbox" label="Poor; a little progress but standard low" />
        </FormGroup>
        <p className={styles.subtitle}>Below</p>
        <FormGroup>
          <FormLabel htmlFor="unsatisfactory" />
          <FormCheck id="unsatisfactory" type="checkbox" label="Unsatisfactory but some understanding shown" />
        </FormGroup>
        <p className={styles.subtitle}>Third</p>
        <FormGroup>
          <FormLabel htmlFor="fair" />
          <FormCheck id="fair" type="checkbox" label="Fair but pedestrian attempt; shows basic competence" />
        </FormGroup>
        <p className={styles.subtitle}>2.2</p>
        <FormGroup>
          <FormLabel htmlFor="competent" />
          <FormCheck id="competent" type="checkbox" label="Competent attempt at straightforward tasks" />
        </FormGroup>
        <p className={styles.subtitle}>2.1</p>
        <FormGroup>
          <FormLabel htmlFor="good" />
          <FormCheck id="good" type="checkbox" label="Good attempt at all tasks; able to cope with difficulties" />
        </FormGroup>
        <p className={styles.subtitle}>First Class</p>
        <FormGroup>
          <FormLabel htmlFor="demonstrated" />
          <FormCheck id="demonstrated" type="checkbox" label="Demonstrated initiative and creative problem-solving ability" />
        </FormGroup>
        <p className={styles.subtitle}>Beyond First</p>
        <FormGroup>
          <FormLabel htmlFor="experienced" />
          <FormCheck id="experienced" type="checkbox" label="c.f. experienced professional" />
        </FormGroup>
        <p className={styles.subtitle}>Well Beyond</p>
        <FormGroup>
          <FormLabel htmlFor="top" />
          <FormCheck id="top" type="checkbox" label="c.f. top professional" />
        </FormGroup>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <button type="button" className={styles.save}>Save</button>
            <span className={styles.formspacer} />
            <button type="button" className={styles.next}>Next</button>
          </div>
        </div>
      </div>

      <div className={styles.checkbox}>
        <FormGroup>
          <h1 id={styles.gradeaspect}>Quantity of technical contributions</h1>
          <p className={styles.subtitle}>Well below expectation</p>
          <FormLabel htmlFor="none" />
          <FormCheck id="none" type="checkbox" label="None or trivial" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="few" />
          <FormCheck id="few" type="checkbox" label="A few small contributions" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="patchy" />
          <FormCheck id="patchy" type="checkbox" label="Patchy with key tasks neglected" />
        </FormGroup>
        <p className={styles.subtitle}>Below</p>
        <FormGroup>
          <FormLabel htmlFor="insufficient" />
          <FormCheck id="insufficient" type="checkbox" label="Attempted several tasks but insufficient" />
        </FormGroup>
        <p className={styles.subtitle}>Third</p>
        <FormGroup>
          <FormLabel htmlFor="adequate" />
          <FormCheck id="adequate" type="checkbox" label="Modest but adequate contribution overall" />
        </FormGroup>
        <p className={styles.subtitle}>2.2</p>
        <FormGroup>
          <FormLabel htmlFor="satisfactory" />
          <FormCheck id="satisfactory" type="checkbox" label="Satisfactory contribution across most tasks throughout project" />
        </FormGroup>
        <p className={styles.subtitle}>2.1</p>
        <FormGroup>
          <FormLabel htmlFor="solid" />
          <FormCheck id="solid" type="checkbox" label="Solid contribution across all tasks and throughout project" />
        </FormGroup>
        <p className={styles.subtitle}>First Class</p>
        <FormGroup>
          <FormLabel htmlFor="strong" />
          <FormCheck id="strong" type="checkbox" label="Consistently strong contribution across all tasks and throughout project" />
        </FormGroup>
        <p className={styles.subtitle}>Beyond First</p>
        <FormGroup>
          <FormLabel htmlFor="highly" />
          <FormCheck id="highly" type="checkbox" label="Highly industrious and productive" />
        </FormGroup>
        <p className={styles.subtitle}>Well Beyond</p>
        <FormGroup>
          <FormLabel htmlFor="exceptionally" />
          <FormCheck id="exceptionally" type="checkbox" label="Exceptionally industrious and productive" />
        </FormGroup>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <button type="button" className={styles.save}>Save</button>
            <span className={styles.formspacer} />
            <button type="button" className={styles.next}>Next</button>
          </div>
        </div>
      </div>

      <div className={styles.checkbox}>
        <FormGroup>
          <h1 id={styles.gradeaspect}>Contributions to project process</h1>
          <p className={styles.subtitle}>Well below expectation</p>
          <FormLabel htmlFor="none" />
          <FormCheck id="none" type="checkbox" label="None or trivial" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="few" />
          <FormCheck id="few" type="checkbox" label="A few small contributions of very poor quality" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="some" />
          <FormCheck id="some" type="checkbox" label="Some contributions but quality poor" />
        </FormGroup>
        <p className={styles.subtitle}>Below</p>
        <FormGroup>
          <FormLabel htmlFor="unsatisfactory" />
          <FormCheck id="unsatisfactory" type="checkbox" label="Unsatisfactory but some understanding shown" />
        </FormGroup>
        <p className={styles.subtitle}>Third</p>
        <FormGroup>
          <FormLabel htmlFor="adequate" />
          <FormCheck id="adequate" type="checkbox" label="Modest but adequate contribution; shows basic competence" />
        </FormGroup>
        <p className={styles.subtitle}>2.2</p>
        <FormGroup>
          <FormLabel htmlFor="competent" />
          <FormCheck id="competent" type="checkbox" label="Competent attempt at basic process tasks throughout project" />
        </FormGroup>
        <p className={styles.subtitle}>2.1</p>
        <FormGroup>
          <FormLabel htmlFor="good" />
          <FormCheck id="good" type="checkbox" label="Good attempt at process tasks; able to adapt when difficulties arise" />
        </FormGroup>
        <p className={styles.subtitle}>First Class</p>
        <FormGroup>
          <FormLabel htmlFor="major" />
          <FormCheck id="major" type="checkbox" label="Managed a major area of the process very effectively and documented it well" />
        </FormGroup>
        <p className={styles.subtitle}>Beyond First</p>
        <FormGroup>
          <FormLabel htmlFor="experience" />
          <FormCheck id="experience" type="checkbox" label="c.f. experienced professional" />
        </FormGroup>
        <p className={styles.subtitle}>Well Beyond</p>
        <FormGroup>
          <FormLabel htmlFor="top" />
          <FormCheck id="top" type="checkbox" label="c.f. top professional" />
        </FormGroup>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <button type="button" className={styles.save}>Save</button>
            <span className={styles.formspacer} />
            <button type="button" className={styles.next}>Next</button>
          </div>
        </div>
      </div>

      <div className={styles.checkbox}>
        <FormGroup>
          <h1 id={styles.gradeaspect}>Teamwork and related skills</h1>
          <p className={styles.subtitle}>Well below expectation</p>
          <FormLabel htmlFor="rarely" />
          <FormCheck id="rarely" type="checkbox" label="Rarely in contact" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="unreliable" />
          <FormCheck id="unreliable" type="checkbox" label="Mostly unreliable or out of touch" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="patchy" />
          <FormCheck id="patchy" type="checkbox" label="Coordination patchy" />
        </FormGroup>
        <p className={styles.subtitle}>Below</p>
        <FormGroup>
          <FormLabel htmlFor="sometimesunreliable" />
          <FormCheck id="sometimesunreliable" type="checkbox" label="Sometimes unreliable or out of touch" />
        </FormGroup>
        <p className={styles.subtitle}>Third</p>
        <FormGroup>
          <FormLabel htmlFor="adequate" />
          <FormCheck id="adequate" type="checkbox" label="Adequate but needed prompting from other team members" />
        </FormGroup>
        <p className={styles.subtitle}>2.2</p>
        <FormGroup>
          <FormLabel htmlFor="reasonable" />
          <FormCheck id="reasonable" type="checkbox" label="Coordinated with others reasonably well most of the time" />
        </FormGroup>
        <p className={styles.subtitle}>2.1</p>
        <FormGroup>
          <FormLabel htmlFor="helped" />
          <FormCheck id="helped" type="checkbox" label="Integrated well and willing to help others when they needed assistance" />
        </FormGroup>
        <p className={styles.subtitle}>First Class</p>
        <FormGroup>
          <FormLabel htmlFor="supported" />
          <FormCheck id="supported" type="checkbox" label="Integrated well and proactively supported other team members" />
        </FormGroup>
        <p className={styles.subtitle}>Beyond First</p>
        <FormGroup>
          <FormLabel htmlFor="pivotal" />
          <FormCheck id="pivotal" type="checkbox" label="Made pivotal contribution to success of team" />
        </FormGroup>
        <p className={styles.subtitle}>Well Beyond</p>
        <FormGroup>
          <FormLabel htmlFor="energised" />
          <FormCheck id="energised" type="checkbox" label="Energised team so they surpassed themselves" />
        </FormGroup>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <button type="button" className={styles.save}>Save</button>
            <span className={styles.formspacer} />
            <button type="button" className={styles.next}>Next</button>
          </div>
        </div>
      </div>

      <div className={styles.checkbox}>
        <FormGroup>
          <h1 id={styles.gradeaspect}>Critical reflection</h1>
          <p className={styles.subtitle}>Well below expectation</p>
          <FormLabel htmlFor="none" />
          <FormCheck id="none" type="checkbox" label="None or trivial" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="irrelevant" />
          <FormCheck id="irrelevant" type="checkbox" label="Largely inaccurate or irrelevant" />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="onesided" />
          <FormCheck id="onesided" type="checkbox" label="Often inaccurate or entirely one sided" />
        </FormGroup>
        <p className={styles.subtitle}>Below</p>
        <FormGroup>
          <FormLabel htmlFor="partlyinaccurate" />
          <FormCheck id="partlyinaccurate" type="checkbox" label="Partly inaccurate or largely one sided" />
        </FormGroup>
        <p className={styles.subtitle}>Third</p>
        <FormGroup>
          <FormLabel htmlFor="some" />
          <FormCheck id="some" type="checkbox" label="Aware of some of the major strengths and weaknesses" />
        </FormGroup>
        <p className={styles.subtitle}>2.2</p>
        <FormGroup>
          <FormLabel htmlFor="most" />
          <FormCheck id="most" type="checkbox" label="Aware of most major strengths and weaknesses but lacks insight" />
        </FormGroup>
        <p className={styles.subtitle}>2.1</p>
        <FormGroup>
          <FormLabel htmlFor="appreciates" />
          <FormCheck id="appreciates" type="checkbox" label="Appreciates strengths and weaknesses; offers a few insights" />
        </FormGroup>
        <p className={styles.subtitle}>First Class</p>
        <FormGroup>
          <FormLabel htmlFor="understands" />
          <FormCheck id="understands" type="checkbox" label="Understands strengths and weaknesses; offers useful insights" />
        </FormGroup>
        <p className={styles.subtitle}>Beyond First</p>
        <FormGroup>
          <FormLabel htmlFor="deep" />
          <FormCheck id="deep" type="checkbox" label="Deep understanding with many useful insights" />
        </FormGroup>
        <p className={styles.subtitle}>Well Beyond</p>
        <FormGroup>
          <FormLabel htmlFor="solutions" />
          <FormCheck id="solutions" type="checkbox" label="...plus good insight into solutions and future work" />
        </FormGroup>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <button type="button" className={styles.save}>Save</button>
            <span className={styles.formspacer} />
            <button type="button" className={styles.next}>Next</button>
          </div>
        </div>
      </div>
    </MarkingFormWrapper>
  );
};

export default MarkingForm;
