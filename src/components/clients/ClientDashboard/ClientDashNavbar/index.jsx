import React, { useEffect, useState } from "react";
import { LogoutOutlined } from "@mui/icons-material";
import {
  Nav,
  NavbarContainer,
  NavButton,
  NavButtonLink,
  NavItem,
  ClientNavLogo,
  NavMenu,
  Logout,
} from "./ClientNavbarElements";
import PlaningTools from "./PlaningTools";
import Vendors from "./Vendors";
import { useHistory } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2";

const ClientNavbar = ({ toggle }) => {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logged out!", "You have been logged out.", "success");
        history.push("/signin");
      }
    });
  };

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

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const [displayPTools, setDisplayPTools] = useState(false);

  const [displayVendors, setDisplayVendors] = useState(false);

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <div>
          <ClientNavLogo to={"/clientdash"}>knoT</ClientNavLogo>

          <NavMenu>
            <NavItem
              className={` ${
                displayPTools ? "border-b-[3px] border-red-500" : ""
              }`}
            >
              <button
                className={` mt-[5px] ${
                  scrollNav === false ? "text-black" : "text-white"
                }`}
                onClick={() => {
                  if (displayPTools === false && displayVendors === false) {
                    setDisplayPTools(true);
                  } else if (
                    displayPTools === false &&
                    displayVendors === true
                  ) {
                    setDisplayVendors(false);
                    setDisplayPTools(true);
                  } else {
                    setDisplayPTools(false);
                  }
                }}
              >
                Planing Tools
              </button>
            </NavItem>
            <NavItem
              className={`ml-[20px] ${
                displayVendors ? "border-b-[3px] border-red-500" : ""
              }`}
            >
              <button
                className={`  mt-[5px] ${
                  scrollNav === false ? "text-black" : "text-white"
                }`}
                onClick={() => {
                  if (displayPTools === false && displayVendors === false) {
                    setDisplayVendors(true);
                  } else if (
                    displayPTools === true &&
                    displayVendors === false
                  ) {
                    setDisplayPTools(false);
                    setDisplayVendors(true);
                  } else {
                    setDisplayVendors(false);
                  }
                }}
              >
                Vendors
              </button>
            </NavItem>
          </NavMenu>
        </div>

        <NavButton>
          <NavButtonLink to={"/user/profile"}>
            {filter.firstname} & {filter.partnerFirstName}
          </NavButtonLink>
          <Logout onClick={logout}>
            <LogoutOutlined className="text-slate-800" />
          </Logout>
        </NavButton>
      </NavbarContainer>
      <div className={`${displayPTools === false ? "hidden" : "block"}`}>
        <PlaningTools />
      </div>
      <div className={`${displayVendors === false ? "hidden" : "block"}`}>
        <Vendors />
      </div>
    </Nav>
  );
};

export default ClientNavbar;
