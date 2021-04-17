import React from 'react';
import Navbar from './Navbar';
import Book from '../../assets/images/5.png';
import thumb1 from '../../assets/images/1.png';
import '../../assets/scss/style.scss';

const Search = () => {
	return (
		<div className="flex flex-col h-screen justify-between">
      
      <Navbar />
      <main>
          <div className="px-4 sm:px-0">
            <h2 className="py-10" style={{marginTop: '-80px'}}>1,904 results for “django”</h2>
            <div className="grid grid-cols-4 gap-4">
            
              <div className="wrapper">
                <img src={thumb1} />
                <h5 className="text-base m-0 py-2">Master Google Sheets (and see why it's better than Excel)</h5>
                <p className="m-0 pb-2">James Mares</p>
                <h5 className="text-gray-900 font-medium">$11.99</h5>
              </div>

            </div>
          </div>
      </main>
      <footer class='w-full text-center text-white font-bold border-t border-grey p-4 pin-b theme-bg2'>
            Copyright &copy; 2021 VlS. All rights reserved.
      </footer>
    </div>
	)
}
export default Search;