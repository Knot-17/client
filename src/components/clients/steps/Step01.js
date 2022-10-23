import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
import { FilterContext } from "./context/FilterContext";

function Step01() {
  const { filterdata, setFilterdata } = useContext(FilterContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterdata({ ...filterdata, [name]: value });
  };

  return (
    <div
      className="w-[100%] h-[50%]   rounded-2xl pb-2 flex flex-col p-10
     items-center "
    >
      <h1 className=" text-center font-semibold text-[16px] lg:text-[20px] xl:text-[24px] ">
        Tell us about your self so we can <br></br> customize your planing
        exprience.
      </h1>

      <form className="absolute top-[40%] flex flex-col">
        <div>
          <label className="text-lg mr-4">My name is </label>
          <Input
            style={{
              width: "200px",
              border: "none",
              borderBottom: "1px solid #a5a5a5",
            }}
            onChange={handleChange}
            value={filterdata["firstname"] || ""}
            name="firstname"
            type="text"
            className="text-lg"
            placeholder="Your first name"
          />
          <Input
            style={{
              width: "200px",
              border: "none",
              borderBottom: "1px solid #a5a5a5",
            }}
            onChange={handleChange}
            value={filterdata["lastname"] || ""}
            name="lastname"
            type="text"
            className="text-lg"
            placeholder="Your last name"
          />
        </div>
        <div className="mt-12">
          <label className="text-lg mr-4">My partner name is </label>
          <Input
            style={{
              width: "200px",
              border: "none",
              borderBottom: "1px solid #a5a5a5",
            }}
            onChange={handleChange}
            value={filterdata["partnerFirstName"] || ""}
            name="partnerFirstName"
            type="text"
            className="text-lg"
            placeholder="Their first name"
          />
          <Input
            style={{
              width: "200px",
              border: "none",
              borderBottom: "1px solid #a5a5a5",
            }}
            onChange={handleChange}
            value={filterdata["partnerLastName"] || ""}
            name="partnerLastName"
            type="text"
            className="text-lg"
            placeholder="Their last name"
          />
        </div>
      </form>
    </div>
  );
}

export default Step01;
