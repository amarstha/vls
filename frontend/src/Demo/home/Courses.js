import React, { useContext } from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import { AuthContext } from '../../contexts/Auth';
import AdminCoursesList from './AdminCoursesList';
import TrainerCoursesList from './TrainerCoursesList';
import LearnerCoursesList from './LearnerCoursesList';

function Courses(){

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
	                                    <th>Title</th>
	                                    <th>Category</th>
	                                    <th>Created By</th>
	                                    <th>Action</th>
	                                </tr>
	                            </thead>
	                            {loggedInUser && loggedInUser.is_admin && (
	                            	<AdminCoursesList />
	                            )}
	                            {loggedInUser && !loggedInUser.is_admin && loggedInUser.is_staff &&(
	                            	<TrainerCoursesList />
	                            )}
	                            {loggedInUser && !loggedInUser.is_admin && !loggedInUser.is_staff && (
	                            	<LearnerCoursesList />
	                            )}
	                        </Table>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </Aux>
    );
    
}

export default Courses;