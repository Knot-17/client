import React from 'react';
import ClientNavbar from '../ClientDashNavbar'

import Beuticians from '../VendorsPages/Beuticians/Beuticians';
import Footer from '../../Footer';

const BeuticiansList = () => {
    return (
       <div>
        
        <ClientNavbar />
        <Beuticians/>
        
        
        {/* <Footer/> */}
           
        </div>
    );
}

export default BeuticiansList;
