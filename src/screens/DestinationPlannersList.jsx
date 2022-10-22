import React from 'react';
import ClientNavbar from '../components/ClientDashboard/ClientDashNavbar'
import Filter from '../components/ClientDashboard/VendorsPages/Photographers/Filter';

import Footer from '../components/Footer';
import DestinationPlanners from '../components/ClientDashboard/VendorsPages/DestinationPlaners/DestinationPlanners';

const DestinationPlannersList = () => {
    return (
       <div>
        
        <ClientNavbar />
        <DestinationPlanners/>
        
        
        {/* <Footer/> */}
           
        </div>
    );
}

export default DestinationPlannersList;