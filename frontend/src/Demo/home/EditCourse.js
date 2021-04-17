import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";

function EditCourse(props) {

    return (
        <Aux>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Edit Course CourseName</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={12}>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail" className="floatLeft">
                                            <Form.Label>Category</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="floatRight">
                                            <Form.File
                                              className="position-relative"
                                              required
                                              name="thumbnail"
                                              label="Thumbnail"
                                              id="validationFormik107"
                                              feedbackTooltip
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword" className="floatLeft">
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>

                                        <Form.Group className="floatRight">
                                            <Form.File
                                              className="position-relative"
                                              required
                                              name="video"
                                              label="Video"
                                              id="validationFormik107"
                                              feedbackTooltip
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlTextarea1" className="floatLeft">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>

                                        <Form.Group className="floatRight">
                                            <Form.File
                                              className="position-relative"
                                              required
                                              name="pdf"
                                              label="Pdf"
                                              id="validationFormik107"
                                              feedbackTooltip
                                            />
                                        </Form.Group>

                                        <Button variant="primary" className="vls-btnbtn">
                                            Submit
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
}

export default EditCourse;
