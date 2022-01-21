import React, { useState, useContext } from 'react';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Book from '../../assets/images/5.png';
import thumb1 from '../../assets/images/1.png';
import '../../assets/scss/style.scss';
import Search from './Search';
import { AuthContext } from "../../contexts/Auth";
import axios from 'axios';


const Home = () => {
  const mystyle = {
      backgroundImage:`url(${Book})`,
      height: '570px',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
  };

  const [isSearchManipulated, setIsSearchManipulated] = useState(false)
  const loggedIn = useContext(AuthContext).isLoggedIn;
  const { loggedInUser } = useContext(AuthContext);
  const [searchValue, setSearchValue] = useState('');
  const [searchData, setSearchData] = useState('');
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const [ active, setActive ] = useState(false)
  const toggleClass = ()=>{
     setActive(!active);
  }

  function handleClick(){
    localStorage.removeItem('jwt_token')
    window.reload()
  }

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setErrMsg('')
    setLoading(true)
    setIsSearchManipulated(true)
    try{
      const results = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/lesson/?search=${searchValue}`)
      setSearchData(results.data)
      setLoading(false)
    }catch(e){
      if(e.response.data){
        setErrMsg(e.response.data)
        setLoading(false)
      }
    }

  }

	return (
		<div className="flex flex-col h-screen justify-between">
      
      <header>
        <nav className="theme-bg2 shadow py-2">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <Link to={'/'} onClick={() => setIsSearchManipulated(false)}>
                        <p style={{
                              color: "#fff",
                              textTransform: "uppercase",
                              fontWeight: "bold",
                              marginTop: "22px",
                              padding: "20px 10px",
                              marginRight: "40px",
                              fontSize: "25px",
                              lineHeight: "21px"
                        }}>E-learning <span style={{ 
                            display: "block",
                            textTransform: "capitalize",
                            fontStyle: "inherit",
                            fontSize: "12px"
                        }}>Management System</span></p>
                      </Link>
                        <div className="bg-white rounded-full border border-gray-400 px-4 py-2 flex">
                        <span className="w-auto flex justify-end items-center text-gray-500">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </span>
                        <form onSubmit={handleSubmit}>
                          <input 
                            className="w-full rounded pl-2 py-2 pr-12 
                            outline-none" 
                            type="text" 
                            placeholder="Search for anything" 
                            value={searchValue}
                            onChange={handleSearchInputChanges}
                          />
                        </form>
                  </div>
                  </div>
                  <div className="ml-4 flex items-center md:ml-6">

                    {!loggedIn ? (
                      <>
                          <Link to={'/auth/signin'}>
                            <button className="bg-white theme-border px-4 py-2 font-semibold border-2 rounded mr-8 text-black">Login</button>
                          </Link>
                          <Link to={'/auth/signup'}>
                            <button className="bg-white theme-border px-4 py-2 font-semibold border-2 rounded mr-8 text-black">Register</button>
                          </Link>
                        </>
                      ):(
                      <>  
                        {/*
                          <button className="theme-bg p-1 rounded-full text-white hover:text-white">
                        <span className="sr-only">View notifications</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </button>
                    */}

                        <div className="ml-3 relative" onClick={toggleClass}>
                            <button type="button" className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                <span className="sr-only">Open user menu</span>
                                { loggedInUser && loggedInUser.image ? (
                                  <img className="h-8 w-8 rounded-full" src={`http://127.0.0.1:8000${loggedInUser.image}`} alt="" />
                                ):(
                                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                )}
                            </button>
                            {active ? (
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                              <Link to="/"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Home</Link>
                              <Link to="/dashboard"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</Link>
                              <Link to="/profile"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</Link>
                              <Link onClick={handleClick} to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</Link>
                            </div>
                            ) : (

                            <div className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                              <Link to="/"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Home</Link>
                              <Link to="/"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</Link>
                              <Link to="/"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</Link>
                              <Link to="/"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</Link>
                            </div>

                            )}
                        </div>
                    </>
                    )}
                  </div>
                </div>
              </div>
        </nav>
      </header>

      <main>
          {!isSearchManipulated ? (
            <>
              <div style={mystyle}></div>
              <div className="px-4 sm:px-0"></div>
            </>
          ):(
            <Search searchValue={searchValue} searchData={searchData} loading={loading} />
          )}
      </main>
      <footer class='w-full text-center text-white font-bold border-t border-grey p-4 pin-b theme-bg2'>
            Copyright &copy; 2022 E-Learning Management System. All rights reserved.
      </footer>
    </div>
	)
}
export default Home;