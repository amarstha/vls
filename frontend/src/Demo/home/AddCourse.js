import React, { useState,useEffect } from 'react';
import {Row, Col, Form, Button, Modal} from 'react-bootstrap';
import { postCourse,getCourseCategory } from '../../api';

function AddCourse() {

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const initialState = {
		category: '',
		title: '',
		description: '',
		thumbnail: '',
		video: '',
		pdf: '',
	}
	const [data, setData] = useState('');
	const { category,title,description,thumbnail,video,pdf } = data;
	const [lessonData, setLessonData] = useState('');

	function clearState() {
	    setData({ ...initialState });
	  }

	function handleChange(e){
		setData({...data, [e.target.id]: e.target.value})
	}

	function handleFileChange(event) {
	    setData({ ...data, [event.target.id]: event.target.files[0] });
	}

	async function handleSubmit(e){
		e.preventDefault();
		try{
			const formData = new FormData();
		    formData.append('thumbnail', data.thumbnail);
		    formData.append('video', data.video);
		    formData.append('pdf', data.pdf);
			for (let key in data) {
				formData.append(key, data[key]);
			}
			await postCourse(formData);
			clearState();
			handleClose();
		}catch(error){
			console.log(error);
		}
	}

	useEffect(()=>{
		(async() => {
			const results = await getCourseCategory();
			setLessonData(results.data.results);
		})()
	},[])

	return(
		<>	
			<Modal show={show} onHide={handleClose}>
				 <Form>
					 <Modal.Body>
						 <Form.Group>
						    <Form.Label>Category</Form.Label>
						    <Form.Control as="select" id="category" onChange={handleChange}>
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
						    <Form.Label>Title</Form.Label>
						    <Form.Control 
						    	type="text" 
						    	id="title"
						    	onChange={handleChange}
						    	value={title}
						    />
						  </Form.Group>

						  <Form.Group>
						    <Form.Label>Description</Form.Label>
						    <Form.Control 
							    as="textarea" 
							    rows={3} 
							    id="description"
							    onChange={handleChange}
						    	value={description}
						    />
						  </Form.Group>

						  <Form.Group>
						    <Form.File 
							    id="thumbnail" 
							    label="Thumbnail"
							    onChange={handleFileChange} 
						    />
						  </Form.Group>

						  <Form.Group>
						    <Form.File 
							    id="video" 
							    label="Video"
							    onChange={handleFileChange} 
						    />
						  </Form.Group>

						  <Form.Group>
						    <Form.File 
							    id="pdf" 
							    label="PDF" 
							    onChange={handleFileChange}
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
			<button className="label theme-bg2 text-white f-14 p-2" onClick={handleShow}>Add Course</button>
		</>
	)
}
export default AddCourse;