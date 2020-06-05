import React, { useState, useEffect } from 'react';
import ComponentNavBar from './components/ComponentNavBar';
import ComponentMobileNavBar from './components/ComponentMobileNavBar';
import ComponentFooter from './components/ComponentFooter';
import ComponentHero from './components/ComponentHero';
import ComponentLoginModal from './components/ComponentLoginModal';

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  {/*const fetchServerData = () => {
    fetch('http://localhost:8080/hotel-booking/get-contacts.php')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setContactData(data);
      })
      .catch(err => {
        console.log(err)
      })
    fetch('http://localhost:8080/hotel-booking/get-enquiries.php')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setEnquiriesData(data);
      })
      .catch(err => {
        console.log(err)
      })
    */}

  const toggleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <>
    <div className="app soft-bg">
      <ComponentNavBar  isLoggedIn={isLoggedIn} toggleModal={toggleLogin}/>
      {!isLoggedIn ? <ComponentHero/> : null}
      {props.children}
      <ComponentFooter isLoggedIn={isLoggedIn}  toggleModal={toggleLogin}/>
      <ComponentMobileNavBar isLoggedIn={isLoggedIn}  toggleModal={toggleLogin}/>
    </div>
    </>
  );
}

export default App;