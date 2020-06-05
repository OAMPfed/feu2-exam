import React from 'react';
import {Link} from 'react-router-dom';
const bergenSeaportImage = require('../static/images/miguel-angel-sanz-bergen.jpg');

function Homepage(){
    return(
        <div className="soft-ui-padding pageHomepage">
            <h1 className="pageHomepage__title">All the best Bergen can offer</h1>
            <img alt="The seaport in Bergen, Norway - by Miguel Angel Sanz" src={bergenSeaportImage}
            className="pageHomepage__image"/>
            <figcaption className="pageHomepage__figcaption">Photo by Manuel Angel Sanz.</figcaption>
            <p className="pageHomepage__text">Holidaze is a hotel and camping aggregator company based in Bergen on the beautiful western coast of Norway. 
                <br/>
                &nbsp;
                <br/>
                Our aim is to promote and increase tourist traffic by highlighting the options you have when you visit. Want to stay at a five star hotel or maybe just a simple parking spot for your mini-camper? No problem, Holidaze has all the information you need!
                <br/>
                &nbsp;
                <br/>
                Go to our <Link to="/listings" className="pageHomepage__text--link">Listings</Link> to plan your stay now!
            </p>
        </div>
    )
}

export default Homepage;