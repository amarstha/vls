import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Aux from "../../hoc/_Aux";

function UserEdit(){
    return (
        <Aux>
            <Row>
                <Col>
                    <Card style={{ marginTop: '-30px' }}>
                        <Card.Header style={{textAlign: 'center'}}>
                            <Card.Title as="h5">User Profile</Card.Title>
                        </Card.Header>
                        <Card.Body style={{textAlign: 'center'}}>
                            <Table responsive hover>
                                <tr>
                                    <th>Name</th>
                                    <td>Name</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>Email</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>Phone</td>
                                </tr>
                                <tr>
                                    <th>DOB</th>
                                    <td>DOB</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>Gender</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>Address</td>
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