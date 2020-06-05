import React, { useState } from 'react';
import { X } from 'react-feather';
import holidazeLogoSvg from '../static/images/holidaze-logo.svg';

function ComponentEstablishmentModal(props) {
    const [EstablishmentModalTrigger, setEstablishmentModalTrigger] = useState(props.establishmentModal)

  return (
    <div className="componentModalBg">
        <div className="soft-ui-padding componentEnquiryModal">
            <button className="componentModalBg__button" onClick={() => props.modalTrigger()}><X size="40" color="#2c3e50"/></button>
            <br/>
            <form action="http://localhost:8080/hotel-booking/add-establishments-success.php" method="POST">
                <label for="establishmentName">Establishment name:</label>
                <input className="form__input" type="text" name="establishmentName"/>
                <label for="EstablishmentEmail">Establishment email:</label>
                <input className="form__input" type="text" name="establishmentName" />
                <label for="imageUrl">Image url:</label>
                <input className="form__input" type="text" name="imageUrl"/>
                <label for="price">Price per night:</label>
                <input className="form__input" type="text" name="price"/>
                <label for="maxGuests">Max guests:</label>
                <input className="form__input" type="text" name="maxGuests"/>
                <label for="Description">Description:</label>
                <input className="form__input" type="text" name="description"/>
                <label for="selfCatering">Catering:</label>
                <input className="form__input" type="text" name="selfCatering"/>
                <label for="id">Id:</label>
                <input className="form__input" type="text" name="id"/>
                <input className="form__button" type="submit" value="SEND"/>
            </form>
        </div>
    </div>
  );
}

export default ComponentEstablishmentModal;