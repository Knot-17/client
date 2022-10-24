import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ClientNavbar from "../../ClientDashNavbar";
import {
  PContainer,
  PH1,
  PH1Container,
  PH1DropDown,
} from "./BeuticiansElements";

import Search from "./Search";
import Filter from "./Filter";
import Cardss from "./Card";

import caterer from "./../../../../../images/caterer.jpg";
import photographer from "./../../../../../images/photographer.jpg";

const Beuticians = () => {
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
    "Anuradhapura",
  ];

  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/filter/${localStorage.getItem("id")}`)
      .then((res) => {
        setFilter(res.data[0]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PContainer>
      <PH1Container>
        <div className="  xs:hidden">
          <Search options={cities} />
        </div>
        <PH1>(Beautician count) Bauticians in ({filter.location})</PH1>
        <div className="flex ">
          {/* <Category/>
          <Locations options={cities}/> */}
          <div className="hidden xs:block">
            <Search options={cities} />
          </div>
        </div>
      </PH1Container>

      <div className="mt-[10px]">
        <Filter />
      </div>

      <div className="mt-[50px]">
        <ul className=" w-[85%] md:flex md:justify-between ml-[8.5%]">
          <li>
            <Cardss AvailableArea="Available Area" VendorPic={photographer} />
          </li>
          <li>
            <Cardss AvailableArea="Available Area" VendorPic={caterer} />
          </li>
          <li>
            <Cardss AvailableArea="Available Area" VendorPic={photographer} />
          </li>
          <li>
            <Cardss AvailableArea="Available Area" VendorPic={caterer} />
          </li>
        </ul>
      </div>
    </PContainer>
  );
};

export default Beuticians;
