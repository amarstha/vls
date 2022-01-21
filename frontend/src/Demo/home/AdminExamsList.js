import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap-4-pagination';
import Aux from "../../hoc/_Aux";
import {Table} from 'react-bootstrap';
import swal from 'sweetalert';
import axios from 'axios';

const AdminExamsList = () => {

	const[data, setData] = useState([])
	const[loading, setLoading] = useState(false)
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [totalPage, setTotalPage] = useState(1);

	useEffect(() => {
    	setLoading(true)
	    async function fetchMyAPI() {
            const params = {
                limit: perPage,
                offset: (page - 1) * perPage,
            };
			let results = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/lesson/`,{params});
            setTotalPage(Math.ceil(results.data.count / 10));
		    setData(results.data.results);
		    setLoading(false)
	    }

	    fetchMyAPI()
	}, [])

    const onPageChange = async (newPage) => {
        setPage(newPage);
        const params = {
          limit: 10,
          offset: (newPage - 1) * 10,
        };
        let results = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/lesson/`,{params});
        setData(results.data.results);
        setPerPage(newPage);
    }

    let paginationConfig = {
      totalPages: totalPage,
      currentPage: page,
      showMax: 5,
      size: "sm",
      threeDots: true,
      prevNext: true,
      onClick: onPageChange
    };

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
        {data && data.length > 0 ? (
            <>
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
    	               </td>
                    </tr>
                ))}
                <Pagination {...paginationConfig} />
            </>
        ):(<p style={{ marginTop: '20px' }}>No Data</p>)}
        </tbody>                                             
	)
}
export default AdminExamsList;