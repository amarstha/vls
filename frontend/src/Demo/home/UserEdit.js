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
                        <Card.Header>
                            <Card.Title as="h5">User Edit</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive hover style={{textAlign: 'center'}}>
                                <thead>
                                    <tr>
                                        <th>SN</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
    
}

export default UserEdit;