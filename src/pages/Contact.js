import React from 'react';
const bergenFasade = require('../static/images/bergen-fasade.jpg');
const bergenBusinessman = require('../static/images/bergen-businessman.jpg')

function Contact(){

    return(
        <>
        <div className="soft-ui-padding pageContact">
            <h1 className="pageContact__title" style={{padding: '0px 20px'}}>Contact</h1>
        </div>
        <div className="pageContact__infoWrapper">
            <div className="pageContact__infoCard soft-ui-padding">
                <ul className="pageContact__infoCard--info">
                    <li style={{fontWeight: 'bold'}}>Holidaze AS</li>
                    <li>Regngata 5, 0476</li>
                    <li>Bergen, Norway</li>
                    <li>+47 42 43 44 45</li>
                    <li>contact@holidaze.no</li>
                </ul>
                <img className="pageContact__infoCard--img" alt="The Holidaze building" src={bergenFasade}/>
            </div>
            <div className="pageContact__infoCard soft-ui-padding">
                <ul className="pageContact__infoCard--info">
                        <li style={{fontWeight: 'bold'}}>Ola Nordmann</li>
                        <li>Daily Manager</li>
                        <li>+47 12 34 56 78</li>
                        <li>ola.nordmann@holidaze.no</li>
                </ul>
                <img className="pageContact__infoCard--img" alt="Profile of Ola Nordmann" src={bergenBusinessman}/>
            </div>
        </div>
        <div className="soft-ui-padding pageContact__contact">
            <p className="pageContact__contact--title">Got any questions?</p>
            <p>We are ready to answer any questions you might have.
                <br/>
                Just fill out the form below and press send.
            </p>
            <form action="http://localhost:8080/hotel-booking/contact-success.php" method="POST">
                <label for="clientName">Your Name:</label>
                <input className="form__input" type="text" name="clientName" id="clientName"/>
                <label for="email">Your Email:</label>
                <input className="form__input" type="text" name="email" id="email"/>
                <label for="message">Your message:</label>
                <textarea className="form__textarea" type="text" name="message" id="message" />
                <input className="form__button" type="submit" value="SEND"/>
            </form>
        </div>
        </>
    )
}

export default Contact;