import React, { useState, useEffect } from 'react';
import ComponentEstablishmentModal from '../components/ComponentEstablishmentModal';

function Admin(){
    const [adminState, setAdminState] = useState('contact');
    const [contactData, setContactData] = useState([]);
    const [enquiryData, setEnquiryData] = useState([]);
    const [establishmentModal, setEstablishmentModal] = useState(false);

    const toggleAdminState = (content) => {
        switch(content){
            case 'enquiry':
                setAdminState('enquiry');
                break;
            case 'contact':
                setAdminState('contact');
                break;
            case 'modal':
                return null;
                break;
            default:
                break;
        
        }
        console.log('FUCK');
    }
    const toggleEstablishmentModal = () => {
        setEstablishmentModal(!establishmentModal)
    }

    const listEnquiries = enquiryData.map((enquiry, index) => {
            return(
        <div className="soft-ui-padding pageAdmin__card--enquiry" key={index}>
            <p>{enquiry.establishment}</p>
            <p>{enquiry.clientName}</p>
            <p>{enquiry.email}</p>
            <p>{enquiry.checkin}</p>
            <p style={{marginBottom: '20px'}}>{enquiry.checkout}</p>
            <a className="form__button" href={`mailto: ${enquiry.email}`}>RESPOND</a>
        </div>
            )
        })

    const listContacts = contactData.map((contact, index) => {
            return(
        <div className="soft-ui-padding pageAdmin__card--enquiry" key={index}>
            <p>{contact.clientName}</p>
            <p>{contact.email}</p>
            <p style={{marginBottom: '20px'}}>{contact.message}</p>
            <a className="form__button" href={`mailto: ${contact.email}`}>RESPOND</a>
        </div>
            )
        })


    useEffect(() => {
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
    }, [])
    useEffect(() => {
        fetch('http://localhost:8080/hotel-booking/get-enquiries.php')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setEnquiryData(data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <>
        <div className="soft-ui-padding pageAdmin">
            <h1 className="pageAdmin__title">Admin Area</h1>
            <div>
                <button className="form__button admin__button" onClick={() => toggleAdminState('contact')}>CONTACT</button>
                <button className="form__button admin__button" onClick={() => toggleAdminState('enquiry')}>ENQUIRIES</button>
                <button className="form__button admin__button" onClick={() => toggleEstablishmentModal()}>ADD ESTABLISHMENT</button>
            </div>
        </div>
        {adminState === 'enquiry' ? listEnquiries : listContacts }
        {establishmentModal ? <ComponentEstablishmentModal modalTrigger={toggleEstablishmentModal}
            establishmentModal={establishmentModal}/> : null}
        </>
    )
}

export default Admin;