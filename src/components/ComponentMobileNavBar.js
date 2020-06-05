import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn, User } from 'react-feather';

import holidazeLogoSvg from '../static/images/holidaze-logo.svg';

function ComponentMobileNavBar(props) {
    const [mobileMenuState, setMobileMenuState] = useState(false);


  return (
    <>
      <ul className={mobileMenuState ? "componentNavbar__links links-mobile" : "mobileNavbarDisabled" }>
        <img src={holidazeLogoSvg} alt="Holidaze logo"
        className={!mobileMenuState ? "componentNavbar__brand--logoImg mobileNavbarBrandDisabled" : "componentNavbar__brand--logoImg"}/>
        <li className="componentNavbar__links--link">
            <Link to={"/"}>Home</Link>
        </li>
        <li className="componentNavbar__links--link">
            <Link to={"/listings"}>Listings</Link>
        </li>
        <li className="componentNavbar__links--link">
            <Link to={"/contact"}>Contact</Link>
        </li>
        <li className="componentNavbar__links--link">
        {!props.isLoggedIn ?
                <button className="componentNavbar__links--button soft-ui"
                onClick={() => props.toggleModal()}>Login <LogIn color="white" style={{marginLeft: '10px'}}/></button>:
                <Link to="/admin" className="componentNavbar__links--button soft-ui" >Admin <User color="white" style={{marginLeft: '10px'}}/></Link>}
        </li>
      </ul>
      <button className="componentNavbar__hamburger" onClick={() => !setMobileMenuState(!mobileMenuState)}>
                {mobileMenuState ? <X color="white" size="40px"/> : <Menu color="white" size="40px"/>}
            </button>
    </>
  );
}

export default ComponentMobileNavBar;