import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';

const Navbar = () => {

	const [ active, setActive ] = useState(false)
	const toggleClass = ()=>{
	   setActive(!active);
	}

	return (

		<header>
			<nav className="theme-bg2 shadow py-2">
		        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		          <div className="flex items-center justify-between h-16">
		            <div className="flex items-center">
		                <img style={{ maxWidth:"65px"}} src={logo} className="mr-8" alt="logo"  width="100%"/>
	                    <div className="bg-white rounded-full border border-gray-400 px-4 py-2 flex">
				            <span className="w-auto flex justify-end items-center text-gray-500">
				                <i className="fa fa-search" aria-hidden="true"></i>
				            </span>
				            <input className="w-full rounded pl-2 py-2 pr-12 outline-none" type="text" placeholder="Search for anything" />
				        </div>
		            </div>
		            <div className="ml-4 flex items-center md:ml-6">

		              	<button className="bg-white theme-border px-4 py-2 font-semibold border-2 rounded mr-8 text-black">Login</button>
		              	<button className="bg-white theme-border px-4 py-2 font-semibold border-2 rounded mr-8 text-black">Register</button>

		              	<button className="theme-bg p-1 rounded-full text-white hover:text-white">
				          <span className="sr-only">View notifications</span>
				          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
				            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
				          </svg>
				        </button>

		                <div className="ml-3 relative" onClick={toggleClass}>
		                    <button type="button" className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
		                      	<span className="sr-only">Open user menu</span>
		                      	<img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
		                    </button>
		                  	{active ? (
		                  	<div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
		                    	<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>

		                    	<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

		                    	<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
		                  	</div>
		                  	) : (

		                  	<div className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
		                    	<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Home</a>
		                    	<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
		                    	<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
		                    	<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
		                  	</div>

		                  	)}
		                </div>
		            </div>
		          </div>
		        </div>
		    </nav>
		</header>


	)
}
export default Navbar;