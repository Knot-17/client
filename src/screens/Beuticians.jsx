import React from 'react';
import ClientNavbar from '../components/ClientDashboard/ClientDashNavbar'
import Filter from '../components/ClientDashboard/VendorsPages/Photographers/Filter';
import Beuticians from '../components/ClientDashboard/VendorsPages/Beuticians/Beuticians';
import Footer from '../components/Footer';

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
