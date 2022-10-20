import React from 'react';
import ClientNavbar from '../components/ClientDashboard/ClientDashNavbar'

import Caterers from '../components/ClientDashboard/VendorsPages/Caterers/Caterers';

const CaterersList = () => {
    return (
       <div>
        
        <ClientNavbar />
        <Caterers/>
        
        
        {/* <Footer/> */}
           
        </div>
    );
}

export default CaterersList;
