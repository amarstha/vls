import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aux from "../../hoc/_Aux";
import axios from 'axios';
import ReactPlayer from 'react-player';
import { getNotifications } from '../../api';

function Course(props){

	const[data, setData] = useState([])
	const[notifications, setNotifications] = useState('')
	const[loading, setLoading] = useState(false);

    useEffect(() => {
    	setLoading(true)
	    async function fetchMyAPI() {
	      let results = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/lesson/${props.match.params.id}/`)
	      setData(results.data);
	      setLoading(false)

	      let params = {
	      	course: props.match.params.id
	      }
	      let resp = await getNotifications(params);
	      setNotifications(resp.data.results);

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
	                            {/*<Tab eventKey="notifications" title="Notifications">
		                            <Accordion defaultActiveKey="1">
	                            		{notifications && notifications.map((item,index) => (
										  <Card key={item.id}>
										    <Card.Header>
										      <Accordion.Toggle  variant="link" eventKey={index+1}>
										        <b>{item.title}</b>
										      </Accordion.Toggle>
										    </Card.Header>
										    <Accordion.Collapse eventKey={index+1}>
										      <Card.Body>{item.description}</Card.Body>
										    </Accordion.Collapse>
										  </Card>
										))}
									</Accordion>
	                            </Tab>*/}
	                        </Tabs>
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
    
}

export default Course;