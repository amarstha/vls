import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import loaderImage from '../../assets/images/loader.gif';
import Pagination from 'react-bootstrap-4-pagination';
import Aux from "../../hoc/_Aux";
import swal from 'sweetalert';
import axios from 'axios';

const LearnerCoursesList = () => {

    const[data, setData] = useState([])
    const[loading, setLoading] = useState(false)
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        setLoading(true)
        async function fetchMyAPI() {
            const token = localStorage.getItem("jwt_token");
            const params = {
                limit: perPage,
                offset: (page - 1) * perPage,
            };
            let results = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/enroll/enrolllessons/`,{
                headers: {
                  Authorization: `Token ${token}`
                },
                params: params
            });
            setTotalPage(Math.ceil(results.data.count / 10));
            setData(results.data);
            setLoading(false)
        }

        fetchMyAPI()
    }, [])

    function deleteCourse(Id) {
        const token = localStorage.getItem("jwt_token");
        const axiosConfig = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${token}`,
          }
        };
        return axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/lesson/${Id}/`, axiosConfig)
    }

    const onPageChange = async (newPage) => {
        setPage(newPage);
        const token = localStorage.getItem("jwt_token");
        const params = {
          limit: 10,
          offset: (newPage - 1) * 10,
        };
        let results = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/enroll/enrolllessons/`,{
            headers: {
              Authorization: `Token ${token}`
            },
            params: params
        });
        setData(results.data);
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

        
    return (
        <React.Fragment style={{ marginTop: '-30px' }}>
        <tbody>
            {loading && loading ? (
                <img src={loaderImage} style={{margin: 'auto'}}/>
            ): (
            <>
                {data.results && data.results.map((item,index) => (
                    <tr key={index}>
                        <th scope="row"><i className="fas fa-check-circle"></i></th>
                        <td style={{ maxWidth: '200px', overflow: 'auto' }}>{item && item.title ? (item.title) : 'N/A'}</td>
                        <td>{item && item.category.title ? (item.category.title): 'N/A'}</td>
                        <td className="text-success">{item && item.created_by ? (item.created_by): 'N/A'}</td>
                        <td>{item && item.created_date ? (item.created_date.slice(0,10)): 'N/A'}</td>
                        <td style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <Link to={`course/${item.id}`} className="pr-2 text-indigo-500">
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
            )}
        </tbody>
        </React.Fragment>
    )
}
export default LearnerCoursesList;