import React, { useState,useEffect } from 'react';
import {Row, Col, Card, Table, Form, Button, Spinner} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import { retrieveQuestion,updateQuestion } from '../../api';
import { ToastContainer, toast } from 'react-toastify';

function ExamEditQuestion(props){

	const initialState = {
		question: '',
		answer: '',
		option_one: '',
		option_two: '',
		option_three: '',
		option_four: ''
	}

	const [data,setData] = useState('');
	const [loading, setLoading] = useState(false);
	const { question,answer,option_one,option_two,option_three,option_four } = data;


	function handleChange(e) {
		setData({...data, [e.target.id]: e.target.value })
	}


	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true)
		try{
			const formData = new FormData()
			for (let key in data) {
				formData.append(key, data[key]);
			}
			const results = await updateQuestion(props.match.params.id, formData)
			setData(results.data)
			setLoading(false)
			toast.success('Sucessfully updated !!')
		}catch(error){
			setLoading(false)
			toast.error('Something went wrong. Please try again !!')
		}
	}

	useEffect(()=>{
		(async()=>{
			const results = await retrieveQuestion(props.match.params.id);
			setData(results.data);
		})()
	},[])

	return(
		<>	
			<ToastContainer autoClose={3000} pauseOnHover={false}/>
			<Aux>
	            <Row>
	                <Col>
	                    <Card style={{ marginTop: '-30px' }}>
	                        <Card.Header>
	                            <Card.Title as="h5">Edit Question</Card.Title>
	                        </Card.Header>
	                        <Card.Body>
	                        	<Form>
								  <Form.Group className="mb-3">
								    <Form.Label>Question</Form.Label>
								    <Form.Control 
								    	type="text" 
								    	value={question}
								    	id="question"
								    	onChange={handleChange}
								    />
								  </Form.Group>

								  <Form.Group className="mb-3">
								    <Form.Label>Answer</Form.Label>
								    <Form.Control 
								    	type="text" 
								    	value={answer}
								    	id="answer"
								    	onChange={handleChange}
								    />
								  </Form.Group>

								  <Form.Group className="mb-3">
								    <Form.Label>Option One</Form.Label>
								    <Form.Control 
								    	type="text" 
								    	value={option_one}
								    	id="option_one"
								    	onChange={handleChange}
								    />
								  </Form.Group>

								  <Form.Group className="mb-3">
								    <Form.Label>Option Two</Form.Label>
								    <Form.Control 
								    	type="text" 
								    	value={option_two}
								    	id="option_two"
								    	onChange={handleChange}
								    />
								  </Form.Group>

								  <Form.Group className="mb-3">
								    <Form.Label>Option Three</Form.Label>
								    <Form.Control 
								    	type="text" 
								    	value={option_three}
								    	id="option_three"
								    	onChange={handleChange}
								    />
								  </Form.Group>

								  <Form.Group className="mb-3">
								    <Form.Label>Option Four</Form.Label>
								    <Form.Control 
								    	type="text" 
								    	value={option_four}
								    	id="option_four"
								    	onChange={handleChange}
								    />
								  </Form.Group>

								  <Button variant="primary" type="submit" onClick={handleSubmit}>
								  	{loading && (
								    	<Spinner animation="border" size="sm" />
								  	)}{' '}
								    Submit
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
export default ExamEditQuestion;