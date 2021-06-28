import React, { useState,useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import { getCourseCategory,retrieveCourse } from '../../api';
import { UserDataContext } from '../../contexts/UserData';

function EditCourse(props) {

    const initialState={
        title: '',
        description: ''
    }

    const { totalCourses } = useContext(UserDataContext);
    const [courseCategoryData, setCourseCategoryData] = useState([]);
    const [data, setData] = useState(initialState);
    const { title,description } = data;


    function handleChange(e){
        setData({...data, [e.target.id]: e.target.value})
    }
    useEffect(()=>{
        const fetchedData=async()=>{
            const resp = await retrieveCourse(props.match.params.id);
            setData(resp.data);

            const results = await getCourseCategory();
            setCourseCategoryData(results.data.results);

        }
        fetchedData();
    },[])

    return (
        <Aux>
            <Row>
                <Col>
                    <Card style={{ marginTop: "-25px" }}>
                        <Card.Header>
                            <Card.Title as="h5">Edit Course</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={12}>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                id="title"
                                                value={title}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control 
                                                as="textarea" 
                                                rows={10} 
                                                id="description"
                                                value={description}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Row>
                                            <Col>
                                                <img src={data.thumbnail} alt="" />
                                                <Form.Group>
                                                    <Form.File
                                                      className="position-relative"
                                                      required
                                                      name="thumbnail"
                                                      label="Thumbnail"
                                                      id="validationFormik107"
                                                      feedbackTooltip
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <video src={data.video} />
                                                <Form.Group>
                                                    <Form.File
                                                      className="position-relative"
                                                      required
                                                      name="video"
                                                      label="Video"
                                                      id="validationFormik107"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <object width="100%" height="auto" data={data.pdf} type="application/pdf"></object>
                                                 <Form.Group>
                                                    <Form.File
                                                      className="position-relative"
                                                      required
                                                      name="pdf"
                                                      label="pdf"
                                                      id="validationFormik107"
                                                      feedbackTooltip
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Button variant="primary" className="vls-btnbtn" style={{ width: 'auto' }}>
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
