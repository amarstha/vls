import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import DEMO from "../../../store/constant";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Qs from 'qs'

const ForgotPasswordConfirm = (props) => {

    const[loading, setLoading] = useState(false);
    const[token,setToken]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setLoading(true)
        try{
          const queryParams = Qs.parse(props.location.search, {
            ignoreQueryPrefix: true,
        });
          const verification_token = queryParams.token;
          if(password !== confirmPassword){
            toast.error("Password didn't match")
            setLoading(false)
          }else{
            const results = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/forgot-password/confirm/`, {
                password,token: verification_token
            })
            toast.success("Password Reset Successfull")
            setLoading(false)
            setPassword('')
            setConfirmPassword('')
          }
          
        }
        catch(e){
         
          toast.error("Somethings went wrong. Please try again")
          setLoading(false)
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
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                <h3 className="mb-4">Reset Password Confirm</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group mb-3">
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Password"
                                            id="password"
                                            value={password}
                                            onChange={(e)=>setPassword(e.target.value)} 
                                            required
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input 
                                            type="password" 
                                            className="form-control"
                                            placeholder="Confirm Password"
                                            id="confirmPassword"
                                            onChange={(e)=>setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button className="btn btn-primary shadow-2 mb-4">Send
                                        {loading && (
                                            <div class="spinner-border" role="status" style={{height: '15px', width: '15px', marginLeft: '5px'}}>
                                              <span class="sr-only">Loading...</span>
                                            </div>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        </>
    );
    
}

export default ForgotPasswordConfirm;