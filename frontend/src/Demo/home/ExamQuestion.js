import React, { useState,useEffect } from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import { retrieveQuestion } from '../../api';

function ExamQuestion(props) {

	const [data, setData] = useState('');

	useEffect(()=>{
		(async()=>{
			const results = await retrieveQuestion(props.match.params.id);
			setData(results.data);
		})()
	},[])

	return(
		<>
			<Aux>
	            <Row>
	                <Col>
	                    <Card style={{ marginTop: '-30px' }}>
	                        <Card.Header style={{textAlign: 'center'}}>
	                            <Card.Title as="h5">Question</Card.Title>
	                        </Card.Header>
	                        <Card.Body style={{textAlign: 'center'}}>
	                            <Table responsive hover>
	                                <tr>
	                                    <th>Lesson</th>
	                                    <td>{data && data.lesson && data.lesson.title}</td>
	                                </tr>
	                                <tr>
	                                    <th>Question</th>
	                                    <td>{data && data.question}</td>
	                                </tr>
	                                <tr>
	                                    <th>Answer</th>
	                                    <td>{data && data.answer}</td>
	                                </tr>
	                                <tr>
	                                    <th>Option one</th>
	                                    <td>{data && data.option_one}</td>
	                                </tr>
	                                <tr>
	                                    <th>Option two</th>
	                                    <td>{data && data.option_two}</td>
	                                </tr>
	                                <tr>
	                                    <th>Option three</th>
	                                    <td>{data && data.option_three}</td>
	                                </tr>
	                                <tr>
	                                    <th>Option four</th>
	                                    <td>{data && data.option_four}</td>
	                                </tr>
	                                <tr>
	                                    <th>Created Date</th>
	                                    <td>{data && data.created_date.slice(0,10)}</td>
	                                </tr>
	                            </Table>
	                        </Card.Body>
	                    </Card>
	                </Col>
	            </Row>
	        </Aux>
		</>
	)
}
export default ExamQuestion;