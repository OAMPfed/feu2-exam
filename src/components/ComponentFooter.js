import React from 'react';
import { Link } from 'react-router-dom';

function ComponentFooter(props) {

  return (
    <footer className="soft-ui-padding footer">
      <div className="footer__contact">
          <p className="footer__contact--title">CONTACT</p>
          <ul className="footer__contact--info">
              <li>Regngata 5, 0476</li>
              <li>Bergen, Norway</li>
              <li>+47 42 43 44 45</li>
              <li>contact@holidaze.no</li>
          </ul>
      </div>
      <div className="footer__tos">
          <p className="footer__tos--title">TERMS OF SERVICE</p>
          <p className="footer__tos--info">Holidaze is a hotel and camping aggregator. 
              We are not responsible for the booking, stays or other areas of business of the businesses listed on this site. 
            </p>
      </div>
      <div className="footer__nav">
          <p className="footer__nav--title">NAVIGATION</p>
          <ul className="footer__nav--info">
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/listings">Listings</Link>
              </li>
              <li>
                  <Link to="/contact">Contact</Link>
              </li>
              {!props.isLoggedIn ?
                <li>
                <button className="footer__nav--button" onClick={() => props.toggleModal()}>Login</button>
            </li>
            :
                <li>
                  <Link to="/admin">Admin</Link>
              </li>}
          </ul>
      </div>
    </footer>
  );
}

export default ComponentFooter;