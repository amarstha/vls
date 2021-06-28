import React, { useContext } from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteUser } from "../../api";
import Aux from "../../hoc/_Aux";
import swal from 'sweetalert';
import Pagination from 'react-bootstrap-4-pagination';
import PageItem from 'react-bootstrap/PageItem'
import { UserDataContext } from "../../contexts/UserData";


function Users(){

    const { totalUsers,page,totalPage,onPageChange } = useContext(UserDataContext);

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
                            <Card.Title as="h5">Users</Card.Title>
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
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {totalUsers && totalUsers.results.map((user,index) => (
                                    <tr key={index}>
                                        <th scope="row"><i className="fas fa-check-circle"></i></th>
                                        <td>{user.name}</td>
                                        <td>{user.email ? user.email : 'N/A'}</td>
                                        <td>{user.phone ? user.phone : 'N/A'}</td>
                                        <td>{user.created_date ? user.created_date.slice(0,10) : 'N/A'}</td>
                                        <td>
                                            {user.is_active && user.is_staff && user.is_admin && (
                                                <p className="label theme-bg2 text-white f-12 text-center">Admin</p>
                                            )}
                                            {user.is_active && user.is_staff && !user.is_admin && (
                                                <p className="label theme-bg2 text-white f-12 text-center">Trainer</p>
                                            )}
                                            {user.is_active && !user.is_staff && !user.is_admin && (
                                                <p className="label theme-bg2 text-white f-12 text-center">Learner</p>
                                            )}
                                        </td>
                                        <td style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                            <Link to={{ pathname:`user/${user.id}` }} className="pr-2 text-indigo-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </Link>
                                            <Link to={{ pathname:`/user/edit/${user.id}` }} className="pr-2 text-indigo-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </Link>
                                            <button onClick={()=>handleDelete(user.id)} className="pr-2 text-indigo-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
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

export default Users;