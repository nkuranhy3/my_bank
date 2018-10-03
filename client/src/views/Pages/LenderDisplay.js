import React, { Component } from 'react';
import { Badge, Card, CardBody, Col, Row, Table } from 'reactstrap';
import Nav from './Nav'
import Footer from './Footer'


class LenderDisplay extends Component{
    render(){
        return(
            <div>
                <Nav />
                <Row>
                    <Col>
                        <Card>
                        <CardBody>
                            <Table hover bordered striped responsive size="sm">
                            <thead>
                            <tr>
                                <th>Username</th>
                                <th>Date registered</th>
                                <th>Role</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Vishnu Serghei</td>
                                <td>2012/01/01</td>
                                <td>Member</td>
                                <td>
                                <Badge color="success">Active</Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>Zbyněk Phoibos</td>
                                <td>2012/02/01</td>
                                <td>Staff</td>
                                <td>
                                <Badge color="danger">Banned</Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>Einar Randall</td>
                                <td>2012/02/01</td>
                                <td>Admin</td>
                                <td>
                                <Badge color="secondary">Inactive</Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>Félix Troels</td>
                                <td>2012/03/01</td>
                                <td>Member</td>
                                <td>
                                <Badge color="warning">Pending</Badge>
                                </td>
                            </tr>
                            <tr>
                                <td>Aulus Agmundr</td>
                                <td>2012/01/21</td>
                                <td>Staff</td>
                                <td>
                                <Badge color="success">Active</Badge>
                                </td>
                            </tr>
                            </tbody>
                            </Table>
                        </CardBody>
                        </Card>
                    </Col>
                    </Row>
                <Footer />
            </div>
        )
    }
}
export default LenderDisplay;