import React ,{useContext} from 'react'
import 'antd/dist/antd.css';
import { Input , Select } from 'antd';
import { FilterContext } from './context/FilterContext';


function Step04() {
  const { Option } = Select;
  const {filterdata,setFilterdata} = useContext(FilterContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterdata ({ ...filterdata, [name]: value });
  };

  const handleChangeSeason = (value) => {
    setFilterdata ({ ...filterdata, "season": value });
    console.log(value);
  };

  const handleChangeYear = (value) => {
    setFilterdata ({ ...filterdata, "year": value });
    console.log(value);
  };

  return (
   
  <div className=' w-[100%] h-[50%]   rounded-2xl pb-2 flex flex-col p-10 items-center'>
        
      <h1 className="text-center font-semibold text-[16px] lg:text-[20px] xl:text-[24px]">Got it!Do you have place and<br></br>season in mind?</h1> <br></br>
     
      <form className="absolute top-[200px] flex flex-col">
        <div>
          <label className="text-[14px] lg:text-[18px] xl:text-[20px]">We are thinking about </label>
          <Input placeholder="Location"
          onChange={handleChange}
             style={{ width:'200px',
             border:'none',
             borderBottom:'1px solid #a5a5a5'
           }}
           name="location"
           value={filterdata["location"] || ""}
          />
        </div>
       <div className='mt-8'>    
        <label className="text-[14px] lg:text-[18px] xl:text-[20px]">During </label>
        <Select
          name="season"
          placeholder="Select a Month"
          style={{ width:'200px',
          border:'none',
        }}
          onChange={handleChangeSeason}>
          <Option value="january">January</Option>
          <Option value="february">February</Option>
          <Option value="march">March</Option>
          <Option value="april">April</Option>
          <Option value="may">May</Option>
          <Option value="june">June</Option>
          <Option value="july">July</Option>
          <Option value="august">August</Option>
          <Option value="september">September</Option>
          <Option value="october">October</Option>
          <Option value="november">November</Option>
          <Option value="december">December</Option>
        </Select>
        <Select 
          name="year"
          placeholder="Select Year"
          style={{ width:'200px',
          border:'none',
          marginLeft:'10px',

        }}
          onChange={handleChangeYear}>
          <Option value="2022">2022</Option>
          <Option value="2023">2023</Option>
          <Option value="2024">2024</Option>
          <Option value="2025">2025</Option>
        </Select>
       </div>        
      </form>
</div>
  )
}

export default Step04