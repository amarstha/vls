import React from 'react';
import Navbar from './Navbar';
import Book from '../../assets/images/5.png';
import thumb1 from '../../assets/images/1.png';
import '../../assets/scss/style.scss';

const Home = () => {
  const mystyle = {
      backgroundImage:`url(${Book})`,
      height: '570px',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
  };
	return (
		<div className="flex flex-col h-screen justify-between">
      
      <Navbar />
      <main>
          <div style={mystyle}></div>
          <div className="px-4 sm:px-0"></div>
      </main>
      <footer class='w-full text-center text-white font-bold border-t border-grey p-4 pin-b theme-bg2'>
            Copyright &copy; 2021 VlS. All rights reserved.
      </footer>
    </div>
	)
}
export default Home;