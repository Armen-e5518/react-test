import React from 'react'
import Carlist from '../containers/CarList'
import Details from "./Details";

const WebPage = () => {
    return <div>
        <h3>Cars:</h3>
        <Carlist/>
        <hr/>
        <h3>Details:</h3>
        <Details/>
    </div>

};

export default WebPage;