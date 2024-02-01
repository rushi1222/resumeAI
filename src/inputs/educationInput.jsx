import React, { useState } from 'react';
import { Button, Collapse, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './input.css';

const EducationInput = props => {
    const initialFormState = {
        id: null,
        CollegeName: '',
        DegreeName: '',
        DegreeType: '', // <-- Add this line
        Major: '',
        Gpa: '',
        StartDate: '',
        EndDate: ''
      };
      
  const [degreeList, setDegreeList] = useState(initialFormState);
  const [open, setOpen] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setDegreeList({ ...degreeList, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
  
    // Check if all fields except 'id' are filled
    const isAllFieldsFilled = Object.keys(degreeList).every(key => {
      return key === 'id' || degreeList[key];
    });
  
    if (!isAllFieldsFilled) {
      alert('Please fill all fields');
      return;
    }
  
    console.log("degreeList:", degreeList);
  
    props.addDegree(degreeList);
    setDegreeList(initialFormState);
  }
  

  return (
    <Form onSubmit={handleSubmit}>
  <div className="inputLabel">Previous Education</div>
  <Button
    onClick={() => setOpen(!open)}
    aria-controls="education-collapse-text"
    aria-expanded={open}
    aria-label="Toggle education input"
    className="mb-3"
  >
    {open ? (
      <FontAwesomeIcon icon={faArrowUp} />
    ) : (
      <FontAwesomeIcon icon={faArrowDown} />
    )}
  </Button>
  <Collapse in={open}>
    <div id="Previous_Education">
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>College Name</Form.Label>
            <Form.Control type="text" name="CollegeName" value={degreeList.CollegeName} onChange={handleInputChange} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Degree Type</Form.Label>
            <Form.Select name="DegreeType" value={degreeList.DegreeType} onChange={handleInputChange}>
              <option value="">Select Degree Type</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Degree Name</Form.Label>
            <Form.Control type="text" name="DegreeName" value={degreeList.DegreeName} onChange={handleInputChange} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Major</Form.Label>
            <Form.Control type="text" name="Major" value={degreeList.Major} onChange={handleInputChange} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>GPA</Form.Label>
            <Form.Control type="text" name="Gpa" value={degreeList.Gpa} onChange={handleInputChange} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" name="StartDate" value={degreeList.StartDate} onChange={handleInputChange} />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" name="EndDate" value={degreeList.EndDate} onChange={handleInputChange} />
          </Form.Group>
        </Col>
      </Row>
    </div>
  </Collapse>
  {open ? (
    <Button type="submit" className="btn-primary mb-3">Submit</Button>
  ) : (
    <div></div>
  )}
</Form>

  );
}

export default EducationInput;