import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import DEMO from "../../../store/constant";

class SignUp extends React.Component {
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-user-plus auth-icon"/>
                                </div>
                                <h3 className="mb-4">Sign up</h3>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="password"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="confirm password"/>
                                </div>
                                <div className="input-group mb-4">
                                    <div style={{ width: "100%", display: "block"}}>
                                        <label style={{ width: "25%", display: "inline-block", float: "left", clear: "left"}}><input type="checkbox" value="" className="mr-1"/>Teacher</label>
                                        <label style={{ width: "45%", display: "inline-block", float: "right", clear: "right"}}><input type="checkbox" value="" className="mr-1"/>Student</label>
                                    </div>
                                </div>
                                
                                <button className="btn btn-primary shadow-2 mb-4">Sign up</button>
                                <p className="mb-0 text-muted">Allready have an account? <NavLink to="/auth/signin-1">Login</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp;