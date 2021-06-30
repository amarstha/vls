import React, { useContext,useState } from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, Spinner} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import { changePassword } from '../../../api';

import { AuthContext } from "../../../contexts/Auth";

function ChangePassword(){
    const { loggedInUser } = useContext(AuthContext);
    const Id = loggedInUser && loggedInUser.id;
    const initialState = {
    	old_password: '',
    	new_password: '',
    	confirm_password: ''
    }
    const [data, setData]=useState(initialState);
    const [loading, setLoading]=useState(false);
    const [errMsg, setErrMsg]=useState(false);
    const { old_password,new_password,confirm_password } = data;

    function handleChange(e){
    	setData({...data, [e.target.id]: e.target.value})
    }

    async function handleSubmit(e) {
    	e.preventDefault();
    	setLoading(true);
    	setErrMsg('');
    	try{
    		const formData = new FormData();
    		for (let key in data) {
				formData.append(key, data[key]);
			}
    		await changePassword(Id, formData);
    		setLoading(false);
    		localStorage.removeItem('jwt_token');
        	window.location.reload();
    	}catch(error){
    		setLoading(false);
    		if(error.response.data){
    			setErrMsg(error.response.data)
    		}
    	}
    }

	return(
		<>
			<Aux>
	            <Row>
	                <Col>
	                    <Card style={{ marginTop: "-25px" }}>
	                        <Card.Header>
	                            <Card.Title as="h5">Change Password</Card.Title>
	                        </Card.Header>
	                        <Card.Body>
	                        <Form>
							  <Form.Group>
							    <Form.Label>Old Password</Form.Label>
							    <Form.Control 
							    	type="password"
							    	id="old_password" 
							    	onChange={handleChange}
							    	value={old_password}
							    />
							  {errMsg.old_password && (<p className="text-danger">{errMsg.old_password}</p>)}
							  </Form.Group>
							  <Form.Group>
							    <Form.Label>New Password</Form.Label>
							    <Form.Control 
							    	type="password" 
							    	id="new_password"
							    	onChange={handleChange}
							    	value={new_password}
							    />
							  {errMsg.new_password && (<p className="text-danger">{errMsg.new_password}</p>)}
							  </Form.Group>
							  <Form.Group>
							    <Form.Label>Confirm Password</Form.Label>
							    <Form.Control 
							    	type="password" 
							    	id="confirm_password"
							    	onChange={handleChange}
							    	value={confirm_password}
							    />
							  {errMsg.confirm_password && (<p className="text-danger">{errMsg.confirm_password}</p>)}
							  {errMsg.error && (<p className="text-danger">{errMsg.error}</p>)}
							  </Form.Group>
							  <Button variant="primary" type="submit" onClick={handleSubmit}>
							    {loading && (
								    	<Spinner animation="border" size="sm" />
								)}{' '}Submit
							  </Button>
							</Form>
	                        </Card.Body>
	                    </Card>
	                </Col>
	            </Row>
	        </Aux>
        </>
	)
}
export default ChangePassword;