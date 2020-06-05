import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Home, DollarSign, BookOpen, Compass, User, Mail, PieChart } from 'react-feather';
import ComponentEnquiryModal from '../components/ComponentEnquiryModal';

function SpecificListing(){
    const [specificListing, setSpecificListing] = useState([]);
    const [enquiryModal, setEnquiryModal] = useState(false);
    let { id } = useParams();

    useEffect(() => {
        console.log('component');
        fetch('http://localhost:8080/hotel-booking/get-establishments.php')
            .then(response => {
                return response.json()
            })
            .then(data => {
                data.forEach(d => {
                    if(d.id === id){
                        setSpecificListing([d]);
                    } else {
                        return null;
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const toggleEnquiryModal = () => {
        setEnquiryModal(!enquiryModal)
    }

    const listEstablishment = specificListing.map(e => {
        return(
            <>
            <div className="pageSpecificListings__card soft-ui" key={e.id}>
                <img src={e.imageUrl} alt={e.establishmentName} 
                className="pageSpecificListings__img"/>
                <div className="pageSpecificListings__info">
                    <p style={{fontWeight: 'bold'}} className="pageSpecificListings__info--text"><Home color="#2c3e50" style={{marginRight: '10px', minHeight: '30px', minWidth: '30px'}}/>{e.establishmentName}</p>
                    <p className="pageSpecificListings__info--text"><Compass color="#2c3e50" style={{marginRight: '10px', minHeight: '30px', minWidth: '30px'}}/>Bergen, Norway</p>
                    <a href={e.establishmentEmail} className="pageSpecificListings__info--text"><Mail style={{marginRight: '10px', minHeight: '30px', minWidth: '30px'}}/>{e.establishmentEmail}</a>
                    <p className="pageSpecificListings__info--text"><DollarSign color="#2c3e50" style={{marginRight: '10px', minHeight: '30px', minWidth: '30px'}}/>{e.price}$/night</p>
                    <p className="pageSpecificListings__info--text"><Home color="#2c3e50" style={{marginRight: '10px', minHeight: '30px', minWidth: '30px'}}/>{e.maxGuests} rooms</p>
                    {e.selfCatering ? <p className="pageSpecificListings__info--text"><PieChart color="#2c3e50" style={{marginRight: '10px', minHeight: '30px', minWidth: '30px'}}/>Buffet available</p> : null}
                    <p className="pageSpecificListings__info--text"><BookOpen color="#2c3e50" style={{marginRight: '10px', minHeight: '30px', minWidth: '30px'}}/>{e.description}</p>
                    </div>
                <button className="form__button pageSpecificListings__button" onClick={() => toggleEnquiryModal()}>Send an enquiry</button>
            </div>
            {enquiryModal ? <ComponentEnquiryModal modalTrigger={toggleEnquiryModal} 
            establishment={specificListing[0].establishmentName}
            enquiryModal={enquiryModal}/> : null}
            </>
        )
    })


    return(
        <>
            {listEstablishment}
        </>
    )
}

export default SpecificListing;