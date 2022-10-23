import * as React from "react";

import ClientNavbar from "../../ClientDashNavbar";
import {
  PContainer,
  PH1,
  PH1Container,
  PH1DropDown,
} from "./DestinationPlannersElements";

import Search from "./Search";
import Filter from "./Filter";
import Cardss from "./Card";

import caterer from "./../../../../../images/caterer.jpg";
import photographer from "./../../../../../images/photographer.jpg";

const DestinationPlanners = () => {
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

  return (
    <PContainer>
      <PH1Container>
        <div className="  xs:hidden">
          <Search options={cities} />
        </div>
        <PH1>(Count) Wedding Venues in (City)</PH1>
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
        <ul className="w-[85%] md:flex md:justify-between ml-[8.5%]">
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

export default DestinationPlanners;
