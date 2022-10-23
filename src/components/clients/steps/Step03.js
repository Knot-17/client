import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Radio, Space } from "antd";
import { FilterContext } from "./context/FilterContext";

function Step03() {
  const { filterdata, setFilterdata } = useContext(FilterContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterdata({ ...filterdata, [name]: value });
  };

  return (
    <div
      className="  w-[100%] h-[40vh]   rounded-2xl pb-2 flex flex-col p-10
    items-center "
    >
      <h1 className="text-center font-semibold text-[16px] lg:text-[20px] xl:text-[24px] ">
        Congrats!<br></br>Do you know your venue yet?
      </h1>{" "}
      <br></br>
      <form className="absolute top-[200px] flex flex-col ">
        <Radio.Group
          onChange={handleChange}
          name="place"
          value={filterdata["place"] || ""}
        >
          <Space direction="vertical" size="large">
            <Radio
              className="text-lg mr-4"
              style={{
                fontSize: "17px",
                margin: "0px",
                padding: "2px",
              }}
              value={true}
            >
              Yes,we even booked it.
            </Radio>
            <Radio
              className="text-lg mr-4"
              style={{
                fontSize: "17px",
                margin: "0px",
                padding: "2px",
              }}
              value={false}
            >
              Nope,we`re still considering options
            </Radio>
          </Space>
        </Radio.Group>
      </form>
    </div>
  );
}

export default Step03;
