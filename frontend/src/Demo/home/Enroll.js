import React, { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';

function Enroll(props){

	const [data, setData] = useState({
		lesson: ''
	})
	const [isLoading, setIsLoading] = useState(false)

	const { lesson } = data

	async function handleSubmit() {
		setIsLoading(true)
	    const token = localStorage.getItem('jwt_token')
	    try{
	      const token = localStorage.getItem("jwt_token");
		  const axiosConfig = {
		    headers: {
		      Authorization: `Token ${token}`
		    }
		  };
		  const formData = { lesson:props.props }
	      const results = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/enroll/`, formData, axiosConfig)
	      setData(results.data)
	      setIsLoading(false)
	      swal("Congratulation!!", "You have succesfully enrolled the course!", "success");
	    }catch(e){
	      if(e.response.data){
	        swal({
	          title: "Oops?",
	          text: "Please sign in to enroll course !!",
	          icon: "warning",
	          buttons: false,
	          dangerMode: true,
	        })
	        setIsLoading(false)
	      }
	    }
	}

	return(
		<button className="theme-bg text-white py-2 px-10" onClick={handleSubmit}>Enroll
			{isLoading && (
                <div class="spinner-border" role="status" style={{height: '15px', width: '15px', marginLeft: '5px'}}>
                  <span class="sr-only">Loading...</span>
                </div>
            )}
		</button>
	)
}
export default Enroll;