import React, { useState,useEffect } from 'react';
import {Row, Col, Form, Button, Modal} from 'react-bootstrap';
import { PostQuestions,getTotalCourses } from '../../api';

function AddQuestion({setIsQuestionsUpdated}) {

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const initialState = {
		lesson: '',
		question: '',
		answer: '',
		option_one: '',
		option_two: '',
		option_three: '',
		option_four: ''
	}
	const [data, setData] = useState('');
	const { lesson,question,answer,option_one,option_two,option_three,option_four } = data;
	const [lessonData, setLessonData] = useState('');

	function clearState() {
	    setData({ ...initialState });
	  }

	function handleChange(e){
		setData({...data, [e.target.id]: e.target.value})
	}

	async function handleSubmit(e){
		e.preventDefault();
		try{
			const formData = new FormData();
			for (let key in data) {
				formData.append(key, data[key]);
			}
			await PostQuestions(formData);
			setIsQuestionsUpdated(true);
			clearState();
			handleClose();
		}catch(error){
			console.log(error);
		}
	}

	useEffect(()=>{
		(async() => {
			const results = await getTotalCourses();
			setLessonData(results.data.results);
		})()
	},[])

	return(
		<>	
			<Modal show={show} onHide={handleClose}>
				 <Form>
					 <Modal.Body>
						 <Form.Group>
						    <Form.Label>Example select</Form.Label>
						    <Form.Control as="select" id="lesson" onChange={handleChange}>
						     <option value="">--Select--</option>
						     {lessonData && lessonData.map((item,index) => (
						     	<React.Fragment key={index}>
						       		<option value={item.id}>{item.title}</option>
						        </React.Fragment>
						     ))
						     }
						    </Form.Control>
						  </Form.Group>

						  <Form.Group>
						    <Form.Label>Question</Form.Label>
						    <Form.Control 
						    	type="text" 
						    	id="question"
						    	onChange={handleChange}
						    	value={question}
						    />
						  </Form.Group>

						  <Form.Group>
						    <Form.Label>Answer</Form.Label>
						    <Form.Control 
						    	type="text" 
						    	id="answer"
						    	onChange={handleChange}
						    	value={answer}
						    />
						  </Form.Group>

						  <Form.Group>
						    <Form.Label>Option One</Form.Label>
						    <Form.Control 
						    	type="text" 
						    	id="option_one"
						    	onChange={handleChange}
						    	value={option_one}
						    />
						  </Form.Group>

						  <Form.Group>
						    <Form.Label>Option Two</Form.Label>
						    <Form.Control 
						    	type="text" 
						    	id="option_two"
						    	onChange={handleChange}
						    	value={option_two}
						    />
						  </Form.Group>

						  <Form.Group>
						    <Form.Label>Option Three</Form.Label>
						    <Form.Control 
						    	type="text" 
						    	id="option_three"
						    	onChange={handleChange}
						    	value={option_three}
						    />
						  </Form.Group>

						   <Form.Group>
						    <Form.Label>Option Four</Form.Label>
						    <Form.Control 
						    	type="text" 
						    	id="option_four"
						    	onChange={handleChange}
						    	value={option_four}
						    />
						  </Form.Group>
					 </Modal.Body>
					 <Modal.Footer>
			          <Button variant="primary" onClick={handleSubmit}>
			            Save
			          </Button>
			          <Button variant="secondary" onClick={handleClose}>
			            Close
			          </Button>
			        </Modal.Footer>
				</Form>
			</Modal>
			<button className="label theme-bg2 text-white f-14 p-2" onClick={handleShow}>Add Question</button>
		</>
	)
}
export default AddQuestion;