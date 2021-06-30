import React, { useContext } from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import AddCourseCategory from './AddCourseCategory';
import AddCourse from './AddCourse';
import Aux from "../../hoc/_Aux";
import { AuthContext } from '../../contexts/Auth';
import AdminCoursesList from './AdminCoursesList';
import TrainerCoursesList from './TrainerCoursesList';
import LearnerCoursesList from './LearnerCoursesList';

function Courses(){

	const { loggedInUser } = useContext(AuthContext);

    return (
    	<>
        <Aux>
            <Row>
                <Col>
                	<Card style={{ marginTop: '-30px' }}>

                		<Card.Header>
                			<Row>
	                			<Col md={10}>
	                            	<Card.Title as="h5">Courses</Card.Title>
	                            </Col>
	                            {loggedInUser && loggedInUser.is_admin && (
		                            <Col md={2}>
		                            	<AddCourseCategory />
		                            </Col>
	                            )}
	                            {loggedInUser && !loggedInUser.is_admin && loggedInUser.is_staff && (
		                            <Col md={2}>
		                            	<AddCourse />
		                            </Col>
	                            )}
                            </Row>
                        </Card.Header>

                        <Card.Body>
	                        <Table responsive hover style={{textAlign: 'center'}}>
	                            <thead>
	                                <tr>
	                                    <th>SN</th>
	                                    <th>Title</th>
	                                    <th>Category</th>
	                                    <th>Created By</th>
	                                    <th>Created Date</th>
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
        </>
    );
    
}

export default Courses;