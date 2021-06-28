import React, { useEffect,useContext } from 'react';
import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

import { AuthContext } from "../../contexts/Auth";
import { UserDataContext } from "../../contexts/UserData";

const Dashboard = (props) => {

    const loggedIn = useContext(AuthContext).isLoggedIn;
    const loggedInUser = useContext(AuthContext).loggedInUser;
    const { totalLearners,totalTrainers,totalCourses,totalUsers,totalUsersForDashboard,totalCoursesForDashboard } = useContext(UserDataContext);

    useEffect(() => {
        if(!loggedIn){
          props.history.push("/auth/signin")
        }
    }, [])    

    return (
        <Aux>
            <Row style={{ marginTop: '-35px' }}>
                {loggedInUser && loggedInUser.is_admin &&(
                <Col md={6} xl={3}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>Total Users</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>&nbsp;&nbsp;
                                        {totalUsers && totalUsers.count}
                                    </h3>
                                </div>
                            </div>
                            <div className="progress m-t-30" style={{height: '7px'}}>
                                <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                )}
                <Col md={6} xl={loggedInUser && loggedInUser.is_admin ? 3 : 4}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>Total Learners</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>&nbsp;&nbsp;
                                        {totalLearners && totalLearners.count}
                                    </h3>
                                </div>
                            </div>
                            <div className="progress m-t-30" style={{height: '7px'}}>
                                <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={loggedInUser && loggedInUser.is_admin ? 3 : 4}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>Total Trainers</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>&nbsp;&nbsp;
                                        {totalTrainers && totalTrainers.count}
                                    </h3>
                                </div>
                            </div>
                            <div className="progress m-t-30" style={{height: '7px'}}>
                                <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={loggedInUser && loggedInUser.is_admin ? 3 : 4}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>Total Courses</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>&nbsp;&nbsp;
                                        {totalCourses && totalCourses.count}
                                    </h3>
                                </div>
                            </div>
                            <div className="progress m-t-30" style={{height: '7px'}}>
                                <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {loggedInUser && loggedInUser.is_admin &&(
                <Col md={6}>
                    <Card className='Recent-Users'>
                        <Card.Header>
                            <Card.Title as='h5'>Recent Users</Card.Title>
                        </Card.Header>
                        <Card.Body className='px-0 py-2'>
                            <Table responsive hover>
                                <tbody>
                                <td style={{ color: '#000',fontWeight: 900 }}>SN</td>
                                <td style={{ color: '#000',fontWeight: 900 }}>Email</td>
                                <td style={{ color: '#000',fontWeight: 900 }}>Created Date</td>
                                <td style={{ color: '#000',fontWeight: 900 }}>Role</td>
                                {totalUsersForDashboard && totalUsersForDashboard.results.map((learner,index) => (
                                    <tr className="unread" key={index}>
                                        <td>{index+1}</td>
                                        <td>
                                            <h6 className="mb-1">{learner && learner.email ? learner.email : 'N/A'}</h6>
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>{learner && learner.created_date ? learner.created_date.slice(0,10): 'N/A'}</h6>
                                        </td>
                                        <td>
                                            {learner && !learner.is_admin && !learner.is_staff && (
                                                <p className="label theme-bg2 text-white f-12 text-center">Learner</p>
                                            )}
                                            {learner && !learner.is_admin && learner.is_staff && (
                                                <p className="label theme-bg2 text-white f-12 text-center">Trainer</p>
                                            )}
                                            {learner && learner.is_admin && (
                                                <p className="label theme-bg2 text-white f-12 text-center">Admin</p>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                )}
                <Col md={loggedInUser && loggedInUser.is_admin ? 6 : 12}>
                    <Card className='Recent-Users'>
                        <Card.Header>
                            <Card.Title as='h5'>Recent Courses</Card.Title>
                        </Card.Header>
                        <Card.Body className='px-0 py-2'>
                            <Table responsive hover>
                                <tbody>

                                    <td style={{ color: '#000',fontWeight: 900 }}>SN</td>
                                    <td style={{ color: '#000',fontWeight: 900 }}>Category</td>
                                    <td style={{ color: '#000',fontWeight: 900 }}>Created By</td>
                                    <td style={{ color: '#000',fontWeight: 900 }}>Create Date</td>

                                    {totalCoursesForDashboard && totalCoursesForDashboard.results.map((course,index) => (
                                        <tr className="unread" key={index}>
                                            <td>{index+1}</td>
                                            <td>
                                                <h6 className="mb-1">{course && course.category.title ? course.category.title : 'N/A'}</h6>
                                            </td>
                                            <td>
                                                <h6 className="mb-1">{course && course.created_by ? course.created_by : 'N/A'}</h6>
                                            </td>
                                            <td>
                                                <h6 className="mb-1"><i className="fa fa-circle text-c-green f-10 m-r-15"/>{course && course.created_date ? course.created_date.slice(0,10) : 'N/A'}</h6>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
    
}

export default Dashboard;