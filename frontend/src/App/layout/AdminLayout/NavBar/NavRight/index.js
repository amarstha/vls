import React, { useState, useEffect, useContext } from 'react';
import {Dropdown} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import logo from '../../../../../assets/images/logo.png'

import ChatList from './ChatList';
import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";

import { AuthContext } from "../../../../../contexts/Auth";

function NavRight(props){

    const[listOpen, setListOpen] = useState(false)
    const loggedIn = localStorage.getItem('jwt_token') ? true : false

    const { loggedInUser } = useContext(AuthContext);

    function handleClick(){
        localStorage.removeItem('jwt_token')
        window.location.reload()
    }

    if (!loggedIn) {
        return (
            <Redirect to="/auth/sign" />
        )
    }

    return (
        <Aux>
            <ul className="navbar-nav ml-auto">
                {/*<li>
                    <Dropdown alignRight={!this.props.rtlLayout}>
                        <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                            <i className="icon feather icon-bell"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu alignRight className="notification">
                            <div className="noti-head">
                                <h6 className="d-inline-block m-b-0">Notifications</h6>
                                <div className="float-right">
                                    <a href={DEMO.BLANK_LINK} className="m-r-10">mark as read</a>
                                    <a href={DEMO.BLANK_LINK}>clear all</a>
                                </div>
                            </div>
                            <ul className="noti-body">
                                <li className="n-title">
                                    <p className="m-b-0">NEW</p>
                                </li>
                                <li className="notification">
                                    <div className="media">
                                        <img className="img-radius" src={Avatar1} alt="Generic placeholder"/>
                                        <div className="media-body">
                                            <p><strong>John Doe</strong><span className="n-time text-muted"><i
                                                className="icon feather icon-clock m-r-10"/>30 min</span></p>
                                            <p>New ticket Added</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="n-title">
                                    <p className="m-b-0">EARLIER</p>
                                </li>
                                <li className="notification">
                                    <div className="media">
                                        <img className="img-radius" src={Avatar2} alt="Generic placeholder"/>
                                        <div className="media-body">
                                            <p><strong>Joseph William</strong><span className="n-time text-muted"><i
                                                className="icon feather icon-clock m-r-10"/>30 min</span></p>
                                            <p>Prchace New Theme and make payment</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="notification">
                                    <div className="media">
                                        <img className="img-radius" src={Avatar3} alt="Generic placeholder"/>
                                        <div className="media-body">
                                            <p><strong>Sara Soudein</strong><span className="n-time text-muted"><i
                                                className="icon feather icon-clock m-r-10"/>30 min</span></p>
                                            <p>currently login</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="noti-footer">
                                <a href={DEMO.BLANK_LINK}>show all</a>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                {/*<li className={this.props.rtlLayout ? 'm-r-15' : 'm-l-15'}>
                    <a href={DEMO.BLANK_LINK} className="displayChatbox" onClick={() => {this.setState({listOpen: true});}}><i className="icon feather icon-mail"/></a>
                </li>*/}
                <li>
                    <Dropdown alignRight={!props.rtlLayout} className="drp-user">
                        <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                            <i className="icon feather icon-settings"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu alignRight className="profile-notification">
                            <div className="pro-head">
                                {loggedInUser && loggedInUser.image === null ? (
                                    <img src={logo} className="img-radius" alt="User Profile"/>
                                ): (
                                    <img src={`http://127.0.0.1:8000${loggedInUser.image}`} className="img-radius" alt="User Profile"/>
                                )}
                                <span>{loggedInUser && loggedInUser.name}</span>
                            </div>
                            <ul className="pro-body">
                                <li><a href="/" className="dropdown-item"><i className="feather icon-home"/> Home</a></li>
                                <li><a href="/profile" className="dropdown-item"><i className="feather icon-user"/> Profile</a></li>
                                <li><a href="" onClick={handleClick} className="dropdown-item"><i className="feather icon-lock"/> Logout</a></li>
                            </ul>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
            <ChatList listOpen={listOpen} closed={() => {setListOpen({listOpen: false});}} />
        </Aux>
    );
    
}

export default NavRight;
