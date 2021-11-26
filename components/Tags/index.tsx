import React, { FC, useMemo, useState } from 'react';
import {
  CloseButton,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import useFilter from '../../utils/useFilter';
import Tag from '../Tag';
import styles from '../RegistrationForm/styles.module.scss';

const Tags:FC = () => {
  const [input, setInput] = useState(undefined);
  const [skillslist, setSkills] = useState([]);
  const [tableisOccupied, setTable] = useState(false);

  const data = useMemo(() => [
    'TypeScript',
    'HTML',
    'JavaScript',
    'CSS',
    'PHP',
    'React',
    'MySQL',
    'Functional Programming',
    'C++',
    'Object Oriented Programming',
    'PostgreSQL',
    'Java',
  ], []);

  const results = useFilter(data, input);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value.toLowerCase());
  };

  const renderTooltip = (props :any) => (
    <Tooltip id="button-tooltip" {...props}>
      Remove Skill
    </Tooltip>
  );

  const removeSkill = (skill :any) => {
    setSkills(() => skillslist.filter((skills) => skills !== skill));
  };

  const AddSkill = () => (
    <div>
      {
        skillslist.map((skill) => (
          <>
            <div className={styles.tagContainer}>
              <div className={styles.tag}>{skill}</div>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <CloseButton className={styles.tagRemover} onClick={() => removeSkill(skill)} />
              </OverlayTrigger>
            </div>
          </>
        ))
      }
    </div>
  );

  const TagsOccupied = (
    <div>
      <div className={styles.formspacer} />
      <div>Skills Selected</div>
      <div className={styles.formspacer} />
      <AddSkill />
    </div>
  );

  const TagsEmpty = (
    <>
      <div className={styles.formspacer} />
      <div>No skills selected</div>
    </>
  );

  const Skills = () => {
    if (tableisOccupied) {
      return TagsOccupied;
    }
    return TagsEmpty;
  };

  const DisplaySkills = (tag :any) => {
    if (skillslist.includes(tag) === false) {
      setSkills((currentSkills) => [...currentSkills, tag]);
      setTable(true);
      return TagsOccupied;
    }
    return TagsEmpty;
  };

  return (
    <>
      {
        results.length
          ? results.map((tag) => (
            <div onClick={() => DisplaySkills(tag)} aria-hidden="true" className={styles.tagContainer}><Tag tagName={tag} key={tag} /></div>
          ))
          : <div>Find Tag</div>
      }
      <div className={styles.formspacer1} />
      <input type="text" onChange={onChange} />
      <Skills />
    </>
  );
};

export default Tags;
