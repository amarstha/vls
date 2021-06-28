import React, { useState,useEffect } from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from '../../assets/images/avatar.jpeg';
import Aux from "../../hoc/_Aux";
import { getUser } from "../../api";

function UserEdit(props){

    const [data, setData] = useState('');

    useEffect(() => {
        (async() => {
            const results = await getUser(props.match.params.id);
            setData(results.data);
        })()
    }, [])
    return (
        <Aux>
            <Row>
                <Col>
                    <Card style={{ marginTop: '-30px' }}>
                        <Card.Header style={{textAlign: 'center'}}>
                            <Card.Title as="h5">User Profile</Card.Title>
                        </Card.Header>
                        <Card.Body style={{textAlign: 'center'}}>
                            <button type="button" style={{ margin: '-20px auto 20px' }} className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                <span className="sr-only">Open user menu</span>
                                {data && data.image ? (
                                    <img style={{width: '150px', height: '150px'}} className="rounded-full" src={data.image} alt="profile" />
                                ):(
                                    <img style={{width: '150px', height: '150px'}} className="rounded-full" src={Avatar} alt="profile" />
                                )}
                                
                            </button>
                            <Table responsive hover>
                                <tr>
                                    <th>Name</th>
                                    <td>{data && data.name}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{data && data.email}</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>{data && data.phone ? data.phone : 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th>DOB</th>
                                    <td>{data && data.dob ? data.dob : 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{data && data.gender ? data.gender : 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>{data && data.address ? data.address : 'N/A'}</td>
                                </tr>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
    
}

export default UserEdit;