import React from 'react';
import ClientNavbar from '../components/ClientDashboard/ClientDashNavbar'
import Filter from '../components/ClientDashboard/VendorsPages/Photographers/Filter';

import Footer from '../components/Footer';
import MusicBands from '../components/ClientDashboard/VendorsPages/MusicBands/MusicBands';

const MusicBandsList= () => {
    return (
       <div>
        
        <ClientNavbar />
        <MusicBands/>
        
        
        {/* <Footer/> */}
           
        </div>
    );
}

export default MusicBandsList;
