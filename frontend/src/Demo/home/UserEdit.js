import React, { useState,useEffect } from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aux from "../../hoc/_Aux";
import UserProfileChange from './UserProfileChange';
import { ToastContainer, toast } from 'react-toastify';
import { updateUser,getUser } from "../../api";

function UserEdit(props){

    const initialState={
        name: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        address: ''
    }
    const [data, setData] = useState('');
    const { name,email,phone,dob,gender,address } = data
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const [isDataUpdated, setIsDataUpdated] = useState(true)

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value });
    }

    function handleRadioChange(event) {
        setData({ ...data, gender: event.target.value });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            setLoading(true)
            setErrMsg('')
            const formData = { name,email,phone,dob,gender,address }
            const results = await updateUser(props.match.params.id, formData);
            setIsDataUpdated(true)
            toast.success('Sucessfully updated !!')
            setData(results.data)
            setLoading(false)
        }catch(error){
            toast.error('Something went wrong. Please try again !!')
        }
    }

    useEffect(() => {
        const fetchedData = async() => {
            const results = await getUser(props.match.params.id);
            setData(results.data);
            setIsDataUpdated(false);
        }
        if(isDataUpdated){
            fetchedData()
        }
    }, [isDataUpdated])

    return (
        <>
            <ToastContainer autoClose={3000} pauseOnHover={false}/>
            <Aux>
                <Row>
                    <Col>
                        <Card style={{ marginTop: "-25px" }}>
                            <Card.Header>
                                <Card.Title as="h5">Edit User</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={8}>
                                        <Form>
                                            <Row>
                                            <Col md={12}>
                                                <Form.Group controlId="formBasicName">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        value={name}
                                                        id="name"
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>

                                            <Col md={12}>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control 
                                                        type="email" 
                                                        value={email} 
                                                    disabled/>
                                                </Form.Group>
                                            </Col>

                                            <Col md={6}>
                                                <Form.Group controlId="formBasicPhone">
                                                    <Form.Label>Phone</Form.Label>
                                                    <Form.Control 
                                                        type="number"
                                                        value={phone}  
                                                        id="phone"
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>

                                            <Col md={6}>
                                                <Form.Group controlId="formBasicDOB">
                                                    <Form.Label>DOB</Form.Label>
                                                    <Form.Control 
                                                        type="date"
                                                        value={dob} 
                                                        id="dob"
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>

                                            <Col md={6}>
                                                <Form.Group controlId="formBasicGender">
                                                    <Form.Label>Gender</Form.Label>
                                                     {['radio'].map((type) => (
                                                        <div key={`inline-${type}`} className="mb-3">
                                                          <Form.Check inline label="Male" value="male" checked={gender === "male"} id="gender" onChange={handleRadioChange} name="group1" type={type} id={`inline-${type}-1`} />
                                                          <Form.Check inline label="Female" value="female" checked={gender === "female"} id="gender" onChange={handleRadioChange} name="group1" type={type} id={`inline-${type}-2`} />
                                                          <Form.Check inline label="Other" value="other" checked={gender === "other"} id="gender" onChange={handleRadioChange} name="group1" type={type} id={`inline-${type}-2`} />
                                                        </div>
                                                      ))}
                                                </Form.Group>
                                            </Col>

                                            <Col md={12}>
                                                <Form.Group controlId="formBasicAddress">
                                                    <Form.Label>Address</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        value={address}
                                                        id="address"
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            
                                            </Row>

                                            <Button variant="primary" className="vls-btnbtn" onClick={handleSubmit}>
                                                Submit
                                            </Button>
                                        </Form>
                                    </Col>

                                    <Col md={4}>
                                        <UserProfileChange setIsDataUpdated={setIsDataUpdated} data={data}/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        </>
    );
    
}

export default UserEdit;