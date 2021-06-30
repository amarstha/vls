import React, { useContext } from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteUser } from "../../api";
import Aux from "../../hoc/_Aux";
import swal from 'sweetalert';
import Pagination from 'react-bootstrap-4-pagination';
import PageItem from 'react-bootstrap/PageItem'
import { UserDataContext } from "../../contexts/UserData";


function EnrollLearners(){

    const { totalEnrollLearners,page,totalPage,onPageChange } = useContext(UserDataContext);
    console.log(totalEnrollLearners)

    function handleDelete(Id){
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover data!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            deleteUser(Id);
            window.location.reload();
          }
        });
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
        <Aux>
            <Row>
                <Col>
                    <Card style={{ marginTop: '-30px' }}>
                        <Card.Header>
                            <Card.Title as="h5">My Learners</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive hover style={{textAlign: 'center'}}>
                                <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Registered</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {totalEnrollLearners && totalEnrollLearners.results.map((user,index) => (
                                    <tr key={index}>
                                        <th scope="row"><i className="fas fa-check-circle"></i></th>
                                        <td>{user.name}</td>
                                        <td>{user.email ? user.email : 'N/A'}</td>
                                        <td>{user.phone ? user.phone : 'N/A'}</td>
                                        <td>{user.created_date ? user.created_date.slice(0,10) : 'N/A'}</td>
                                        <td style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                            <Link to={{ pathname:`user/${user.id}` }} className="pr-2 text-indigo-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                                <Pagination {...paginationConfig} />
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
    
}

export default EnrollLearners;