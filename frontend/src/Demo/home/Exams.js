import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Card, Table} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import swal from 'sweetalert';
import axios from 'axios';
import { AuthContext } from '../../contexts/Auth';

function Exams(){

	const { loggedInUser } = useContext(AuthContext)

	const[adminData, setAdminData] = useState([])
	const[trainerData, setTrainerData] = useState([])
	const[learnerData, setLearnerData] = useState([])
	const[loading, setLoading] = useState(false)

	
	useEffect(() => {
    	setLoading(true)
	    async function fetchMyAPI() {
			let adminResults = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/lesson/`)
			let trainerResults = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/lesson/trainerlessons`)
			let learnerResults = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/enroll/enrolllessons`)
		    setAdminData(adminResults.data.results);
		    setTrainerData(trainerResults.data.results);
		    setLearnerData(learnerResults.data.results);
		    setLoading(false)
	    }

	    fetchMyAPI()
	}, [])
	
    function handleDelete(){
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover data!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
    }

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
		                        {loading && (
		                        	<h5 style={{textAlign: 'center'}}>Loading ... </h5>
		                        )}
	                            <thead>
	                                <tr>
	                                    <th>SN</th>
	                                    <th>Course</th>
	                                    <th>Category</th>
	                                    <th>Action</th>
	                                </tr>
	                            </thead>
	                            {adminData && (
	                            	<tbody>

		                            	{adminData && adminData.map((item,index) => (
			                                <tr key={index}>
			                                    <th scope="row">{index + 1}</th>
			                                    <td>{item && item.title ? (item.title) : 'N/A'}</td>
			                                    <td>{item && item.category.title ? (item.category.title): 'N/A'}</td>
			                                    <td>
			                                    	<Link to={`exam/${item.id}`}>
			                                    		<button className="label theme-bg2 text-white f-12">Join</button>
			                                    	</Link>
			                                    </td>
			                                </tr>
		                                ))}
		                            </tbody>
	                            )}

	                            {trainerData && (
	                            	<tbody>

		                            	{trainerData && trainerData.map((item,index) => (
			                                <tr key={index}>
			                                    <th scope="row">{index + 1}</th>
			                                    <td>{item && item.title ? (item.title) : 'N/A'}</td>
			                                    <td>{item && item.category.title ? (item.category.title): 'N/A'}</td>
			                                    <td>
			                                    	<Link to={`exam/${item.id}`}>
			                                    		<button className="label theme-bg2 text-white f-12">Join</button>
			                                    	</Link>
			                                    </td>
			                                </tr>
		                                ))}
		                            </tbody>
	                            )}

	                            {learnerData && (
	                            	<tbody>

		                            	{learnerData && learnerData.map((item,index) => (
			                                <tr key={index}>
			                                    <th scope="row">{index + 1}</th>
			                                    <td>{item && item.title ? (item.title) : 'N/A'}</td>
			                                    <td>{item && item.category.title ? (item.category.title): 'N/A'}</td>
			                                    <td>
			                                    	<Link to={`exam/${item.id}`}>
			                                    		<button className="label theme-bg2 text-white f-12">Join</button>
			                                    	</Link>
			                                    </td>
			                                </tr>
		                                ))}
		                            </tbody>
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