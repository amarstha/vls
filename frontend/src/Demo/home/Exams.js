import React, { useState, useContext } from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import { AuthContext } from '../../contexts/Auth';
import AdminExamsList from './AdminExamsList';
import TrainerExamsList from './TrainerExamsList';
import LearnerExamsList from './LearnerExamsList';

function Exams(){

	const { loggedInUser } = useContext(AuthContext)

    return (
        <Aux>
            <Row>
                <Col>
                	<Card style={{ marginTop: '-30px' }}>

                		<Card.Header>
                            <Card.Title as="h5">Courses</Card.Title>
                        </Card.Header>

                        <Card.Body>
	                        <Table responsive hover style={{textAlign: 'center'}}>
	                            <thead>
	                                <tr>
	                                    <th>SN</th>
	                                    <th>Course</th>
	                                    <th>Category</th>
	                                    <th>Action</th>
	                                </tr>
	                            </thead>

	                            {loggedInUser && loggedInUser.is_admin && (
	                            	<AdminExamsList />
	                            )}
	                            {loggedInUser && !loggedInUser.is_admin && loggedInUser.is_staff &&(
	                            	<TrainerExamsList />
	                            )}
	                            {loggedInUser && !loggedInUser.is_admin && !loggedInUser.is_staff && (
	                            	<LearnerExamsList />
	                            )}
	                            
	                        </Table>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </Aux>
    );
    
}

export default Exams;