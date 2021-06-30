import React, { useState } from 'react';
import {Link,NavLink} from 'react-router-dom';
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import DEMO from "../../../store/constant";
import Logo from '../../../assets/images/logo.png';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const initialState={
        name: '',
        email: '',
        password: '',
        is_staff: false,
    }
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState('')

    const { name,email,password,is_staff } = data

    function clearState(){
        setData({ ...initialState });
    }

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value });
    }

    function handleCheckboxChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const id = target.id;
        setData({ ...data, [id]: value });
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            setLoading(true)
            setErrMsg('')
            const results = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/users/`, {
                name, email, password, is_staff
            })
            toast.success('Success!! Please check mail for verification')
            setLoading(false)
            clearState()
        }catch(error){
            if(error.response.data){
                console.log(error.response.data)
                setLoading(false)
                setErrMsg('')
            }
        }
    }

    return(
        <>
            <ToastContainer autoClose={3000} pauseOnHover={false}/>
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
                                   <Link to="/"><img src={Logo} width="100px" height="100px" style={{ margin: 'auto' }}/></Link>
                                </div>
                                <h3 className="mb-4">Sign up</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Name"
                                            id="name"
                                            value={name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input 
                                            type="email" 
                                            className="form-control"
                                            placeholder="Email"
                                            id="email"
                                            value={email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="input-group mb-4">
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Password"
                                            id="password"
                                            value={password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="input-group mb-4">
                                        <div style={{ width: "100%", display: "block"}}>
                                            <label style={{ width: "25%", display: "inline-block", float: "left", clear: "left"}}>
                                                <input 
                                                    type="checkbox" 
                                                    className="mr-1"
                                                    id="is_staff"
                                                    onChange={handleCheckboxChange}
                                                />Teacher</label>
                                            <label style={{ width: "45%", display: "inline-block", float: "right", clear: "right"}}>
                                                <input type="checkbox" value="" className="mr-1"/>Student</label>
                                        </div>
                                    </div>
                                    
                                    <button className="btn btn-primary shadow-2 mb-4">Sign up
                                        {loading && (
                                            <div class="spinner-border" role="status" style={{height: '15px', width: '15px', marginLeft: '5px'}}>
                                              <span class="sr-only">Loading...</span>
                                            </div>
                                        )}
                                    </button>
                                </form>
                                <p className="mb-0 text-muted">Allready have an account? <NavLink to="/auth/signin">Login</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        </>
    );
    
}

export default SignUp;