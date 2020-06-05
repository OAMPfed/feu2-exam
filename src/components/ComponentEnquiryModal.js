import React, { useState } from 'react';
import { X } from 'react-feather';
import holidazeLogoSvg from '../static/images/holidaze-logo.svg';

function ComponentLoginModal(props) {
    const [enquiryModalTrigger, setEnquiryModalTrigger] = useState(props.enquiryModal)

    const establishmentValueName = props.establishment;

  return (
    <div className="componentModalBg">
        <div className="soft-ui-padding componentEnquiryModal">
            <button className="componentModalBg__button" onClick={() => props.modalTrigger()}><X size="40" color="#2c3e50"/></button>
            <img alt="Holidaze logo" src={holidazeLogoSvg} className="componentLoginModal__logo"/>
            <p className="componentEnquiryModal__text">Send your enquiry to the admins</p>
            <br/>
            <form action="http://localhost:8080/hotel-booking/enquiry-success.php" method="POST">
                <label for="establishment">Establishment:</label>
                <input className="form__input" value={establishmentValueName} readOnly type="text" name="establishment" id="establishment"/>
                <label for="clientName">Your name:</label>
                <input className="form__input" type="text" name="clientName" id="clientName"/>
                <label for="clientName">Your email:</label>
                <input className="form__input" type="text" name="email" id="email"/>
                <label for="clientName">Your checkin date (yyyy-mm-dd):</label>
                <input className="form__input" type="text" name="checkin" id="checkin"/>
                <label for="clientName">Your checkout date (yyyy-mm-dd):</label>
                <input className="form__input" type="text" name="checkout" id="checkout"/>
                <input className="form__button" type="submit" value="SEND"/>
            </form>
        </div>
    </div>
  );
}

export default ComponentLoginModal;