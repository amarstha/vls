import React, {useState} from 'react';
import Avatar from '../../assets/images/avatar.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown, Modal} from 'react-bootstrap';
import { updateUser } from "../../api";

function UserProfileChange(props){
	const { setIsDataUpdated,data } = props;
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const initialState={
    image: null
	}
	const [newData, setNewData] = useState(initialState);
	const { image }=newData;

	function handleFileChange(event) {
	  setNewData({ [event.target.id]: event.target.files[0] });
	}
	console.log(data)

	async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', image,  image.name);
      await updateUser(data.id, formData);
      setIsDataUpdated(true);
      handleClose();
    } catch (error) {
      toast.error("Something went wrong!! Please try again. ")
    }
  }

	return(
		<>
			<ToastContainer autoClose={3000} pauseOnHover={false}/>
			<Modal show={show} onHide={handleClose}>
		        <Modal.Body>
		        			{data && data.image ? (
	                	<img style={{width: '150px', height: '150px', margin: 'auto'}} className="rounded-full" src={data.image} alt="profile" />
		        			):(
	                	<img style={{width: '150px', height: '150px', margin: 'auto'}} className="rounded-full" src={Avatar} alt="profile" />
		        			)}
									<Form.Group style={{display: 'table', margin: 'auto'}}>
		                <Form.File
		                  name="image"
		                  id="image"
		                  accept="image/png, image/jpeg"
                      onChange={handleFileChange}
		                />
	            	</Form.Group>
		        </Modal.Body>
		        <Modal.Footer>
		          <Button variant="secondary" onClick={handleClose}>
		            Close
		          </Button>
		          <Button variant="primary" onClick={handleSubmit}>
		            Save
		          </Button>
		        </Modal.Footer>
		  </Modal>
			<div className="vls-imgalignment">
					{data && data.image ? (
          	<img style={{width: '150px', height: '150px'}} className="rounded-full" src={data.image} alt="profile" />
          ):(
          	<img style={{width: '150px', height: '150px'}} className="rounded-full" src={Avatar} alt="profile" />
          )}
          <div onClick={handleShow} style={{ cursor: 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </div>
      </div>
    </>
	)
}
export default UserProfileChange;