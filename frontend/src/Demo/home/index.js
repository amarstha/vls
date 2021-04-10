import React from 'react';
import Navbar from './Navbar';
import Book from '../../assets/images/5.png';
import thumb1 from '../../assets/images/1.png';
import '../../assets/scss/style.scss';

const Home = () => {
  const mystyle = {
      backgroundImage:`url(${Book})`,
      height: '100%',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
  };
	return (
		<div className="flex flex-col h-screen justify-between">
      
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
              <h2>1,904 results for “django”</h2>
              <div class="grid grid-cols-4 gap-4">
                <div>
                  <img src={thumb1} />
                  <h4>Master Google Sheets (and see why it's better than Excel)</h4>
                  <p>James Mares</p>
                </div>
                <div>
                  <img src={thumb1} />
                  <h4>Master Google Sheets (and see why it's better than Excel)</h4>
                  <p>James Mares</p>
                </div>
                <div>
                  <img src={thumb1} />
                  <h4>Master Google Sheets (and see why it's better than Excel)</h4>
                  <p>James Mares</p>
                </div>
                <div>
                  <img src={thumb1} />
                  <h4>Master Google Sheets (and see why it's better than Excel)</h4>
                  <p>James Mares</p>
                </div>
                <div>
                  <img src={thumb1} />
                  <h4>Master Google Sheets (and see why it's better than Excel)</h4>
                  <p>James Mares</p>
                </div>
                <div>
                  <img src={thumb1} />
                  <h4>Master Google Sheets (and see why it's better than Excel)</h4>
                  <p>James Mares</p>
                </div>
                <div>
                  <img src={thumb1} />
                  <h4>Master Google Sheets (and see why it's better than Excel)</h4>
                  <p>James Mares</p>
                </div>
                <div>
                  <img src={thumb1} />
                  <h4>Master Google Sheets (and see why it's better than Excel)</h4>
                  <p>James Mares</p>
                </div>
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
export default Home;