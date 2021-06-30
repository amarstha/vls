import React, { useState,useEffect,useContext } from 'react'
import {Link,NavLink} from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../../contexts/Auth";

import axios from "axios";

const SignIn = (props) => {

    const loggedIn = useContext(AuthContext).isLoggedIn;

    const initialState={
        email: '',
        password: ''
    }
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)

    const { email,password } = data

    function clearState(){
      setData({ ...initialState });
    }

    function handleChange(e) {
      setData({ ...data, [e.target.id]: e.target.value });
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            setLoading(true)
            const results = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/login/`, {
                email, password
            })
            clearState()
            localStorage.setItem("jwt_token", results.data.token);
            //window.location.reload();
            window.location.href = "/dashboard";
            setLoading(false)
        }catch(error){
            if(error.response.data){
                toast.error(error.response.data.error[0])
            }
            setLoading(false)
        }
    }

    useEffect(() => {
        if(loggedIn){
          props.history.push("/dashboard")
        }
    }, [])
    
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
                                <h3 className="mb-4">Login</h3>
                                <form onSubmit={handleSubmit}>
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
                                        placeholder="password"
                                        id="password"
                                        value={password} 
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4">Login
                                    {loading && (
                                        <div class="spinner-border" role="status" style={{height: '15px', width: '15px', marginLeft: '5px'}}>
                                          <span class="sr-only">Loading...</span>
                                        </div>
                                    )}
                                </button>
                                </form>
                                <p className="mb-2 text-muted">Forgot password? <NavLink to="/forgot-password">Reset</NavLink></p>
                                <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup">Signup</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        </>
    );
    
}

export default SignIn;