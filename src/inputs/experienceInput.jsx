import React, { useState } from 'react';
import { Button, Collapse, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './input.css';

const ExperienceInput = props => {
    const initialFormState = {
        id: null,
        Company_Name: '',
        Start_date: '',
        End_date: '',
        Location: '',
        JobTitle: '',
        Description: ''
    };

    const [experienceList, setExperienceList] = useState(initialFormState);
    const [open, setOpen] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setExperienceList({ ...experienceList, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();

        const isAllFieldsFilled = Object.keys(experienceList).every(key => {
            return key === 'id' || experienceList[key];
        });

        if (!isAllFieldsFilled) {
            alert('Please fill all fields');
            return;
        }

        console.log("experienceList:", experienceList);

        props.addExperience(experienceList);
        setExperienceList(initialFormState);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className="inputLabel">Work Experience</div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="experience-collapse-text"
                aria-expanded={open}
                aria-label="Toggle experience input"
                className="mb-3"
            >
                {open ? (
                    <FontAwesomeIcon icon={faArrowUp} />
                ) : (
                    <FontAwesomeIcon icon={faArrowDown} />
                )}
            </Button>
            <Collapse in={open}>
                <div id="work_experience">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control type="text" name="Company_Name" value={experienceList.Company_Name} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Job Title</Form.Label>
                                <Form.Control type="text" name="JobTitle" value={experienceList.JobTitle} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control type="date" name="Start_date" value={experienceList.Start_date} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control type="date" name="End_date" value={experienceList.End_date} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" name="Location" value={experienceList.Location} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="Description" value={experienceList.Description} onChange={handleInputChange} />
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
};

export default ExperienceInput
