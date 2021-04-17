import React, { useState, useEffect } from 'react';
import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aux from "../../hoc/_Aux";
import axios from 'axios';
import ReactPlayer from 'react-player';

function Course(props){

	const[data, setData] = useState([])
	const[loading, setLoading] = useState(false)

    useEffect(() => {
    	setLoading(true)
	    async function fetchMyAPI() {
	      let results = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/lesson/${props.match.params.id}`)
	      setData(results.data);
	      console.log(results.data)
	      setLoading(false)
	    }

	    fetchMyAPI()
	}, [])

    return (
        <Aux>
            <Row>
                <Col>
                	<Card style={{ marginTop: '-30px' }}>

                        <Card.Body>
							<ReactPlayer url={ data && data.video } controls width="100%" height="auto" />
							<Card.Header>
	                            <Card.Title as="h5">{data && data.title}</Card.Title>
	                        </Card.Header>
							<hr/>
	                        <Tabs variant="pills" defaultActiveKey="details" className="mb-3">
	                            <Tab eventKey="details" title="Details">
	                                <p style={{  padding: 0, marginTop: '-30px'}}>
	                                	{data && data.description}
	                                </p>
	                            	<a href={data && data.pdf} target="_blank">
		                            	<div style={{ display: "flex", alignItems: "center" }}>
		                            		Download PDF: 
		                            		<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
											</svg>
		                            	</div>
	                            	</a>
	                            </Tab>
	                            <Tab eventKey="notifications" title="Notifications">
	                                <ul style={{  padding: 0, marginTop: '-30px'}}>
	                                	<li style={{ display: "flex", alignItems: "center", lineHeight: '1px' }}>
		                                	<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
											</svg>
		                                	<p style={{ marginTop: "10px", paddingLeft: "10px"}}>This course has recent update . Please check now</p>
	                                	</li>
	                                	<li style={{ display: "flex", alignItems: "center", lineHeight: '1px' }}>
		                                	<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
											</svg>
		                                	<p style={{ marginTop: "10px", paddingLeft: "10px"}}>This course has recent update . Please check now</p>
	                                	</li>
	                                </ul>
	                            </Tab>
	                        </Tabs>
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
    
}

export default Course;