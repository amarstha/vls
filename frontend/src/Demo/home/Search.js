import React, { useState,useContext } from 'react';
import loader from '../../assets/images/loader.gif';
import nophoto from '../../assets/images/nophoto.png';
import '../../assets/scss/style.scss';
import { AuthContext } from '../../contexts/Auth';
import Enroll from './Enroll';


const Search = ({searchValue,searchData,loading}) => {

  const { isLoggedIn } = useContext(AuthContext)

	return (
    <div className="px-4 sm:px-0">
        {loading && loading ? (
            <img src={loader} style={{margin: 'auto'}}/>
        ): (
          <>
            <h4 className="py-4">{searchData && searchData.count} results for "{searchValue && searchValue}"</h4>
            <div className="grid grid-cols-4 gap-4">
              {searchData && searchData.results && searchData.results.map((item,index) => (
                 <div className="wrapper" key={index}>
                  {item.thumbnail === null ? (
                    <div style={{ backgroundImage: `url(${nophoto})` }} className="searchimage"></div>
                    ):(
                    <div style={{ backgroundImage: `url(${item.thumbnail})` }} className="searchimage"></div>
                  )}
                  <h5 className="text-base m-0 py-2">{item.title}</h5>
                  <p className="m-0 pb-2">{item.title}</p>
                  <Enroll props={item.id}/>
                </div>
              ))}
              </div>
          </>
        )}
        
    </div>
	)
}
export default Search;