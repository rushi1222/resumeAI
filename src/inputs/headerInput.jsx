import React, { useState } from 'react';
import { Button, Collapse, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './input.css';

function HeaderInput(props) {

    const [header, setHeader] = useState({ Name: "", Email: "", Phone: "", LinkedIn: "", GitHub: "", Address: "" });
    const [open, setOpen] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setHeader({ ...header, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log("Final header: ", header);

        props.addHeader(header);
        setHeader({ Name: "", Email: "", Phone: "", LinkedIn: "", GitHub: "", Address: "" });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className='inputLabel'>Header Input</div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                aria-label="Toggle header input"
                className="mb-3"
            >
                {open ? (
                    <FontAwesomeIcon icon={faArrowUp} />
                ) : (
                    <FontAwesomeIcon icon={faArrowDown} />
                )}
            </Button>
            <Collapse in={open}>
                <div id="header_input">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="Name" value={header.Name} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="Email" value={header.Email} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="tel" name="Phone" value={header.Phone} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" name="Address" value={header.Address} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>LinkedIn</Form.Label>
                                <Form.Control type="text" name="LinkedIn" value={header.LinkedIn} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>GitHub</Form.Label>
                                <Form.Control type="text" name="GitHub" value={header.GitHub} onChange={handleInputChange} />
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
    )
}

export default HeaderInput;
 