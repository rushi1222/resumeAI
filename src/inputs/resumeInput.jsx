import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './input.css';

const ResumeInput = props => {
  const initialFormState = { id: null, sName: '' };
  const [skillList, setSkillList] = useState(initialFormState);
  const [open, setOpen] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setSkillList({ ...skillList, [name]: value });
    // console.log("skillList: ", skillList)
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (!skillList.sName) return;
    console.log("Final skillList: ", skillList);

    props.addSkill(skillList); // pass skillList instead of user
    setSkillList(initialFormState);
    // console.log("Final skillList2: ", skillList);
  }
  return (
    <form 
      onSubmit={handleSubmit}
    >
      <div className="inputLabel">Resume input(skill Input)</div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        aria-label="Toggle skill input" // added aria-label for accessibility
      >
        {open ? (
          <FontAwesomeIcon icon={faArrowUp} />
        ) : (
          <FontAwesomeIcon icon={faArrowDown} />
        )}
      </Button>
      <Collapse in={open}>
        <div id="_skill_prompt">
          <label name = "sName">Skill</label>
          <input type="text" name="sName" value={skillList.sName} onChange={handleInputChange}/> {/* changed name to sName */}
        </div>
      </Collapse>
      {open ? (
        <Button type="submit" className="Primary">Submit</Button>
      ) : (
        <div></div>
      )}
    </form>
  );
}

export default ResumeInput;
