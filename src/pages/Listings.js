import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Listings(){
    const [establishmentsData, setEstablishmentData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/hotel-booking/get-establishments.php')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setEstablishmentData(data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const listEstablishments = establishmentsData.map((establishmentCard, index) => {
            return(
            <div className="pageListings__card soft-ui" key={index}>
                <img src={establishmentsData[index].imageUrl} alt={establishmentsData[index].establishmentName} 
                className="pageListings__card--img"/>
                <div className="pageListings__card--info">
                    <p style={{fontWeight: 'bold'}}>{establishmentsData[index].establishmentName}</p>
                    <p>Bergen, Oslo</p>
                    <a href={establishmentsData[index].establishmentEmail}>{establishmentsData[index].establishmentEmail}</a>
                    <p style={{marginBottom: '10px'}}>{establishmentsData[index].price}$/night</p>
                    <Link className="form__button" to={`/listings/${establishmentsData[index].id}`}>More Info</Link>
                </div>
            </div>)
    })

    return(
        <>
        <div className="pageListings soft-ui-padding">
            <h1 className="pageListings__title">Listings</h1>
            <p className="pageListings__text">We are working daily to reach out and get more businesses listed on our website for the ease of our users. Daydream as you scroll through the options.</p>
        </div>
        <div className="pageListings__listingsWrapper">
            {listEstablishments ? listEstablishments : null}
        </div>
        </>
    )
}

export default Listings;