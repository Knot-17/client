import React from 'react';
import ClientNavbar from '../components/ClientDashboard/ClientDashNavbar'
import Filter from '../components/ClientDashboard/VendorsPages/Photographers/Filter';
import Photographers from '../components/ClientDashboard/VendorsPages/Photographers/Photographers';
import Footer from '../components/Footer';

const PhotographersList = () => {
    return (
       <div>
        
        <ClientNavbar />
        <Photographers/>
        
        
        {/* <Footer/> */}
           
        </div>
    );
}

export default PhotographersList;
