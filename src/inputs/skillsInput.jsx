import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './input.css'

  const SkillsInput = props => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="inputLabel">skill</div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {open ? (
          <FontAwesomeIcon icon={faArrowUp} />
        ) : (
          <FontAwesomeIcon icon={faArrowDown} />
        )}
      </Button>
      <Collapse in={open}>
        <div id="_skill_prompt">
          {props.skillsInput.map((skill)=>(
            <div className="skill">{skill}</div>
          ))}
          
        </div>
      </Collapse>
    </div>
  );
}

export default SkillsInput;
