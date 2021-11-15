import React from 'react';
import {
  ProgressBar,
  FormSelect,
  FormGroup,
  FormLabel,
} from 'react-bootstrap';
import { render } from 'react-dom';
import styles from './styles.module.scss';

const skillref = React.createRef();
let tableisOccupied = false;

export const ProgressInstance = () => {
  const now = 60;
  return (
    <ProgressBar now={now} label={`${now}%`} />);
};

export const Skills = () => {
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
  if (tableisOccupied) {
    return TableOccupied; //Maybe render instead
  }
  return TableEmpty;
};

export const SkillSelected = () => {
  if (skillref.current.value >= 1) {
    console.log(skillref.current.value);
    tableisOccupied = true;
    console.log(tableisOccupied);
    return (<Skills />);
  }
};

export const SkillsList = () => {
  const SkillsTable = (
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
  );
  return SkillsTable;
};
