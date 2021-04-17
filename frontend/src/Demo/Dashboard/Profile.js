import React,{ useContext, useEffect } from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import Aux from "../../hoc/_Aux";
import { AuthContext } from "../../contexts/Auth";

import axios from "axios";

const Profile = (props) => {

	const loggedIn = localStorage.getItem('jwt_token') ? true : false
	const { loggedInUser } = useContext(AuthContext);

    return (
        <Aux>
            <Row>
                <Col>
                    <Card style={{ marginTop: '-30px' }}>
                        <Card.Header style={{textAlign: 'center'}}>
                            <Card.Title as="h5">My Profile</Card.Title>
                            {/*<button className="label theme-bg text-white f-12">Edit</button>*/}
                        </Card.Header>
                        <Card.Body style={{textAlign: 'center'}}>
                        	<button type="button" style={{ margin: '-20px auto 20px' }} className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
		                      	<span className="sr-only">Open user menu</span>
		                      	{ loggedInUser && loggedInUser.image === null ? (
		                      		<img style={{width: '150px', height: '150px'}} className="rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
		                      	):(
		                      		<img style={{width: '150px', height: '150px'}} className="rounded-full" src={`http://127.0.0.1:8000${loggedInUser.image}`} alt="" />
		                      	)}
		                    </button>
                            <Table responsive hover>
                                <tr>
                                    <th>Name</th>
                                    <td>{loggedInUser && loggedInUser.name ? (loggedInUser.name) : 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{loggedInUser && loggedInUser.email ? (loggedInUser.email) : 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>{loggedInUser && loggedInUser.phone ? (loggedInUser.phone) : 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th>DOB</th>
                                    <td>{loggedInUser && loggedInUser.dob ? (loggedInUser.dob) : 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{loggedInUser && loggedInUser.gender ? (loggedInUser.gender) : 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>{loggedInUser && loggedInUser.address ? (loggedInUser.address) : 'N/A'}</td>
                                </tr>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
    
}

export default Profile;