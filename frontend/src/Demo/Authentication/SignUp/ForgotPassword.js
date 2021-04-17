import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import DEMO from "../../../store/constant";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = (props) => {

    const[email,setEmail]=useState('')
    const[loading, setLoading] = useState(false)

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setLoading(true)
        try{
          const results = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/forgot-password/`, {
            email
          })
          toast.success("Verification mail has been send to you email. Please check your email")
          setLoading(false)
          setEmail('')
        }
        catch(e){
            if(e.response.data){
                setLoading(false)
                toast.error(e.response.data.email[0])
            }
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
                                <h3 className="mb-4">Reset Password</h3>
                                <form onSubmit={handleSubmit}>
                                <div className="input-group mb-3">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Email"
                                        id="email"
                                        value={email} 
                                        onChange={(e)=>setEmail(e.target.value)}
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

export default ForgotPassword;