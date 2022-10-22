import React from 'react';
import ClientNavbar from '../components/ClientDashboard/ClientDashNavbar'
import Filter from '../components/ClientDashboard/VendorsPages/Photographers/Filter';
import Decorators from '../components/ClientDashboard/VendorsPages/Decorators/Decorators';
import Footer from '../components/Footer';

const DecoratorsList = () => {
    return (
       <div>
        
        <ClientNavbar />
        <Decorators/>
        
        
        {/* <Footer/> */}
           
        </div>
    );
}

export default DecoratorsList;
