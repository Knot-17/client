import * as React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { PContainer, PH1, PH1Container, PH1DropDown } from './DecoratorsElements';

import Search from './Search';
import Filter from './Filter';
import Cardss from './Card';

import caterer from './../../../../../images/caterer.jpg'
import photographer from './../../../../../images/photographer.jpg'

const Decorators = () => {

  const [user, setUser] = useState({});
  const [dealer, setDealer] = useState([]);
  const [updateUser, setUpdateUser] = useState("");

  async function getDetails() {
    axios
      .get(
        `http://localhost:5000/api/v1/getaUser/${localStorage.getItem("id")}`
      )
      .then((res) => {
        setUser(res.data[0]);
        console.log(res.data[0].city);
        axios
          .get(
            `http://localhost:5000/api/v1/decorationFilter/${res.data[0].city}`
          )
          .then((res) => {
            setDealer(res.data);
            console.log(res.data);
            localStorage.setItem("count", res.data.length);
          });
      });
  }

  useEffect(() => {
    getDetails();
  }, []);

  const cities = [
    "Colombo",
    "Dehiwala",
    "Moratuwa",
    "Kaluatara",
    "Negombo",
    "Kandy",
    "Kalmunai",
    "Vavuniya",
    "Galle",
    "Trincomalee",
    "Batticaloa",
    "Jaffna",
    "Katunayake",
    "Kolonnawa",
    "Anuradhapura"
]

 
    return (

      <PContainer>

     <PH1Container> 
     <div className='  xs:hidden'>
  <Search options={cities}/>
        </div>
        <PH1>
          ({localStorage.getItem("count")}) Wedding Decorators in {user.city}
        </PH1>
          <div className='flex '>
          {/* <Category/>
          <Locations options={cities}/> */}
          <div className='hidden xs:block'>
            <Search options={cities}/>
          </div>
          
          </div>
         
          
        </PH1Container>
        
        <div className='mt-[10px]'>
        <Filter/>
        </div>
        
        <div className='mt-[50px]'>

         

        <ul className="w-[85%] md:flex gap-5 mb-5  ml-[8.5%]">
          {dealer.map((dealers) => (
            <li>
              <Cardss
                AvailableArea={dealers.location}
                VendorPic={photographer}
                Price={dealers.amount}
                Name={dealers.destinations}
                Maxguest={dealers.maxGuest}
                DealerID={dealers.dealersID}
              />
            </li>
          ))}
        </ul>
  
       
        </div>
        
      </PContainer>
      
    
    );
}

export default Decorators;
