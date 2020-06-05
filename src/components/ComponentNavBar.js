import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import holidazeLogoSvg from '../static/images/holidaze-logo.svg';
import { LogIn, User } from 'react-feather';

function ComponentNavBar(props) {

  return (
    <>
    <nav className="componentNavbar soft-ui-padding">
      <div className="componentNavbar__brand">
        <img src={holidazeLogoSvg} alt="Holidaze logo" className="componentNavbar__brand--logoImg"/>
        <p className="componentNavbar__brand--logoName">HOLIDAZE</p>
      </div>
      <ul className="componentNavbar__links links-desktop">
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
    </nav>
    </>
  );
}

export default ComponentNavBar;