import React from 'react';
import DEMO  from './../../../../../store/constant';
import Aux from "../../../../../hoc/_Aux";
import logo from '../../../../../assets/images/logo.png';

const navLogo = (props) => {
    let toggleClass = ['mobile-menu'];
    if (props.collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    return (
        <Aux>
            <div className="navbar-brand header-logo">
                 <a href={'/dashboard'} className="b-brand">
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
                 </a>
                <a href={DEMO.BLANK_LINK} className={toggleClass.join(' ')} id="mobile-collapse" onClick={props.onToggleNavigation}><span /></a>
            </div>
        </Aux>
    );
};

export default navLogo;
