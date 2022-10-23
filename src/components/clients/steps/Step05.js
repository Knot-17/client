import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Input, Select } from "antd";
import { FilterContext } from "./context/FilterContext";

function Step05() {
  const { Option } = Select;
  const { filterdata, setFilterdata } = useContext(FilterContext);

  const handleChangeGuestCount = (value) => {
    setFilterdata({ ...filterdata, guestcount: value });
    console.log(value);
  };

  const handleChangeBudget = (value) => {
    setFilterdata({ ...filterdata, budget: value });
    console.log(value);
  };

  return (
    <div
      className="  w-[100%] h-[50%]   rounded-2xl pb-2 flex flex-col p-10
    items-center"
    >
      <h1 className="text-center font-semibold text-[16px] lg:text-[20px] xl:text-[24px]">
        That's great! What's your estimated <br></br>guest count and total
        budget
      </h1>{" "}
      <br></br>
      <form className="absolute top-[200px]">
        <div>
          <label className="text-[14px] lg:text-[18px] xl:text-[20px]">
            Estimated Guest count{" "}
          </label>
          <Select
            name="guestcount"
            placeholder="Select Guest count"
            style={{ width: "200px", border: "none", marginLeft: "10px" }}
            onChange={handleChangeGuestCount}
          >
            <Option value="1">0 - 50</Option>
            <Option value="2">50 - 150</Option>
            <Option value="3">150 - 300 </Option>
            <Option value="4">300 - 500</Option>
            <Option value="5">500 +</Option>
          </Select>
        </div>
        <div className="mt-8">
          <label className="text-[14px] lg:text-[18px] xl:text-[20px]">
            Budget range for each Services{" "}
          </label>
          <Select
            name="season"
            placeholder="Select Budget Range"
            style={{ width: "200px", border: "none" }}
            onChange={handleChangeBudget}
          >
            <Option value="1">Below 100000 Rs</Option>
            <Option value="2">100000 - 150000 Rs</Option>
            <Option value="3">150000 - 300000 Rs</Option>
            <Option value="4">Above 300000 Rs</Option>
          </Select>
        </div>
      </form>
    </div>
  );
}

export default Step05;
