import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import DEMO from "../../../store/constant";
import axios from "axios";
import Qs from "qs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerifyEmail = (props) => {

    const [verify, setVerify] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    let queryParams = Qs.parse(props.location.search, {
        ignoreQueryPrefix: true,
    });
    let verification_token = queryParams.token;

    async function handleClick(e) {
        e.preventDefault();
        setLoading(true);
        setSuccess("");
        try {
            const results = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/verify-email/`, {
                params: {
                  token: verification_token
                }
            })
            setLoading(false);
            toast.success("Success!! Redirecting to login in 4 secs");
            setTimeout(() => {
                props.history.push("/auth/signin");
            }, 5000);
        }catch (e) {
            toast.error(e.response.data.detail);
            setLoading(false);
        }
      }

    return(
        <>
            <ToastContainer autoClose={4000} pauseOnHover={false}/>
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
                                <button className="btn btn-primary shadow-2 mb-4" onClick={handleClick}>Verify your email
                                    {loading && (
                                        <div class="spinner-border" role="status" style={{height: '15px', width: '15px', marginLeft: '5px'}}>
                                          <span class="sr-only">Loading...</span>
                                        </div>
                                    )}
                                </button>
                                <p className="mb-0 text-muted">Allready have an account? <NavLink to="/auth/signin">Login</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        </>
    );
    
}

export default VerifyEmail;