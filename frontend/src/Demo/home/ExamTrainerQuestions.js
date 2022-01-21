import React, { useContext, useEffect, useState } from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap-4-pagination';
import swal from 'sweetalert';
import Aux from "../../hoc/_Aux";
import AddQuestion from './AddQuestion';
import { listQuestions,listTrainerQuestions,getTotalCourses,deleteQuestion } from '../../api';

function ExamTrainerQuestions() {

	const [data, setData] = useState([]);
	const [isQuestionsUpdated, setIsQuestionsUpdated] = useState(true);
	const [page, setPage] = useState(1);
  	const [perPage, setPerPage] = useState(10);
  	const [totalPage, setTotalPage] = useState(1);

	function handleDelete(Id){
		swal({
		      title: "Are you sure?",
			  text: "Once deleted, you will not be able to recover this data!",
			  icon: "warning",
			  buttons: true,
			  dangerMode: true,
		    })
		.then((willDelete) => {
	    	if (willDelete) {
			   deleteQuestion(Id);
			   setIsQuestionsUpdated(true);
			   window.location.reload();
		    }
	    })
	}


	useEffect(()=>{
		const fetchedData = async() => {
			const params = {
                limit: perPage,
                offset: (page - 1) * perPage,
            };
			var results = await listTrainerQuestions(params);
			setTotalPage(Math.ceil(results.data.count / 10));
			setData(results.data.results);
			setIsQuestionsUpdated(false);
		}
		if(isQuestionsUpdated){
			fetchedData()
		}
	},[isQuestionsUpdated])

	const onPageChange = async (newPage) => {
        setPage(newPage);
        const params = {
          limit: 10,
          offset: (newPage - 1) * 10,
        };
		var results = await listTrainerQuestions(params);
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

	return(
		<>
			<Aux>
	            <Row>
	                <Col>
	                	<Card style={{ marginTop: '-30px' }}>
	                		<Card.Header>
	                			<Row>
		                			<Col md={10}>
		                            	<Card.Title as="h5">Questions</Card.Title>
		                            </Col>
		                            <Col md={2}>
		                            	<AddQuestion setIsQuestionsUpdated={setIsQuestionsUpdated}/>
		                            </Col>
	                            </Row>
	                    	</Card.Header>
	                        <Card.Body>
	                        <Table responsive hover style={{textAlign: 'center'}}>
	                            <thead>
	                                <tr>
	                                    <th>SN</th>
	                                    <th>Question</th>
	                                    <th>Answer</th>
	                                    <th>Created By</th>
	                                    <th>Created Date</th>
	                                    <th>Action</th>
	                                </tr>
	                            </thead>
	                            <tbody>
	                            {data.results && data.results.length > 0 ? (
                    			<>
		                            {data && data.map((question,index) => (
	                                    <tr key={index}>
	                                        <th scope="row"><i className="fas fa-check-circle"></i></th>
	                                        <td style={{ maxWidth: '200px', overflow: 'auto' }}>{question.question ? question.question : 'N/A'}</td>
	                                        <td style={{ maxWidth: '200px', overflow: 'auto' }}>{question.answer ? question.answer : 'N/A'}</td>
	                                        <td>{question.created_by ? question.created_by : 'N/A'}</td>
	                                        <td>{question.created_date ? question.created_date.slice(0,10) : 'N/A'}</td>
	                                        <td style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
	                                            <Link to={{ pathname:`question/${question.id}` }} className="pr-2 text-indigo-500">
	                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
	                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
	                                                </svg>
	                                            </Link>
	                                            <Link to={{ pathname:`/question/edit/${question.id}` }} className="pr-2 text-indigo-500">
	                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
	                                                </svg>
	                                            </Link>
	                                            <button onClick={()=>handleDelete(question.id)} className="pr-2 text-indigo-500">
	                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
	                                                </svg>
	                                            </button>
	                                        </td>
	                                    </tr>
	                                ))}
	                                <Pagination {...paginationConfig} />
                                </>
                                ):(<p style={{ marginTop: '20px' }}>No Data</p>)}
                                </tbody>
	                        </Table>
                        </Card.Body>
	                    </Card>
	                </Col>
	            </Row>
	        </Aux>
        </>
	)
}
export default ExamTrainerQuestions;