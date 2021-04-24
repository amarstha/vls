import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aux from "../../hoc/_Aux";
import {able} from 'react-bootstrap';
import swal from 'sweetalert';
import axios from 'axios';

const AdminExamsList = () => {

	const[data, setData] = useState([])
	const[loading, setLoading] = useState(false)

	useEffect(() => {
    	setLoading(true)
	    async function fetchMyAPI() {
			let results = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/lesson/`)
		    setData(results.data.results);
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

    	<tbody>
        	{data && data.map((item,index) => (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item && item.title ? (item.title) : 'N/A'}</td>
                    <td>{item && item.category.title ? (item.category.title): 'N/A'}</td>
                    <td style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
	                        <Link to={`exam/${item.id}`} className="pr-2 text-indigo-500">
	                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
	                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
	                            </svg>
	                        </Link>
	                        <Link to={`exam/${item.id}`} className="pr-2 text-indigo-500">
	                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
	                            </svg>
	                        </Link>
	                        <button 
		                        onClick={() => {
						      		swal({
								      title: "Are you sure?",
									  text: "Once deleted, you will not be able to recover this data!",
									  icon: "warning",
									  buttons: true,
									  dangerMode: true,
								    })
						      	}}
		                        className="pr-2 text-indigo-500"
	                        >
	                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
	                            </svg>
	                        </button>
	                    </td>
                </tr>
            ))}
        </tbody>                                             
	)
}
export default AdminExamsList;