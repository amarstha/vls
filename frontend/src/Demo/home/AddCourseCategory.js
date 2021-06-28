import React, { useState,useEffect } from 'react';
import {Row, Col, Form, Button, Modal} from 'react-bootstrap';
import { getCourseCategory,PostCourseCategory,deleteCourseCategory } from '../../api';

function AddCourseCategory(props){

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [title, setTitle] = useState('');
	const [data, setData] = useState('');
	const [isDataUpdated, setIsDataUpdated] = useState(true);

	function handleChange(e) {
        setTitle(e.target.value);
    }

    async function handleSubmit(e){
    	e.preventDefault();
    	await PostCourseCategory({title});
    	setIsDataUpdated(true);
    	setTitle('');
    }

    async function handleDelete(Id){
    	await deleteCourseCategory(Id);
    	setIsDataUpdated(true);
    }

	useEffect(()=>{
		const fetchedData=async()=>{
			const results = await getCourseCategory();
			setData(results.data.results);
			setIsDataUpdated(false);
		}
		if(isDataUpdated){
			fetchedData()
		}
	},[isDataUpdated])

	return(
		<>
			<Modal show={show} onHide={handleClose}>
		        <Modal.Body>
					<Form.Group controlId="exampleForm.ControlTitle">
					    <Form.Label>Title</Form.Label>
					    <Form.Control 
					    type="text" 
					    id={title}
					    value={title}
					    onChange={handleChange}
					    />
			        <ul className='pl-3 pt-5'>
			        	{data && data.map((item,index)=>(
			        		<li key={index}>
				        		<Row>
				        			<Col md={8}>
				        				<i className="fas fa-check-circle pr-2"></i>{item.title}
				        			</Col>
				        			<Col md={4}>
				        				<i className="fas fa-trash-alt" onClick={()=>handleDelete(item.id)} style={{ cursor: 'pointer' }}></i>
				        			</Col>
				        		</Row>
			        		</li>
			        	))}
			        </ul>
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
		    </Modal>
			<button className="label theme-bg2 text-white f-14 p-2" onClick={handleShow}>Add Category</button>
		</>
	)
}
export default AddCourseCategory;