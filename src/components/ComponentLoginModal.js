import React, { useState } from 'react';
import {X} from 'react-feather';
import holidazeLogoSvg from '../static/images/holidaze-logo.svg';

function ComponentLoginModal(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [wrongInfo, setWrongInfo] = useState(false);

    
  const handleSubmit = (event) => {
    event.preventDefault();
    let usernameCheck = localStorage.getItem('adminUsername')
    let passwordCheck = localStorage.getItem('adminPassword')
    if(username === usernameCheck && password === passwordCheck){
      localStorage.setItem('isLoggedIn', true)
      alert('You are logged in')
    } else {
      setWrongInfo(true);
    }
  }

  return (
        <div className="componentModalBg">
          <div className="componentLoginModal">
          <button className="componentModalBg__button" onClick={() => props.exitModal()}><X size="40" color="#2c3e50"/></button>
            <img alt="Holidaze logo" src={holidazeLogoSvg} className="componentLoginModal__logo"/>
            <br/>
            <form onSubmit={handleSubmit}>
                <p>Admin username: </p>
                <input type="text"
                    name="username" className="form__input"
                    onChange={e => setUsername(e.target.value)}
                />
                <br />
                <p>Admin password:</p>
                <input type="password"
                    name="password" className="form__input"
                    onChange={e => setPassword(e.target.value)}
                />
                <input type="submit" className="form__button" value="Login"/>
                {wrongInfo ? <p>Sorry, wrong information!</p> : null}
            </form>
            </div>
    </div>
  );
}

export default ComponentLoginModal;