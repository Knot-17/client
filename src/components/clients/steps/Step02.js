import React ,{useContext} from 'react'
import { DatePicker, Space } from 'antd';
import { FilterContext } from './context/FilterContext';


function Step02() {
  const {filterdata,setFilterdata} = useContext(FilterContext);
  const handleChange = (date, dateString) => {
    setFilterdata ({ ...filterdata, "date": dateString });
    console.log(date, dateString);
  };
  return (
   
    <div className=' w-[100%] h-[40vh]   rounded-2xl pb-2 flex flex-col p-10
    items-center '>
        
      <h1 className="text-center font-semibold text-[16px] lg:text-[20px] xl:text-[24px]">When you are going to get married?</h1> <br></br>
     
<form className="absolute top-[200px]">

  <DatePicker onChange={handleChange} 
    style={{
      height: "40px",
      width: "250px",
      border: "none",
      borderBottom:"1px solid #a5a5a5",
      borderRadius: "0px",
      cursor: "pointer",
      fontSize: "23px",
      margin: "0px",
      padding: "2px"
    }}
    name="date"
  />
</form>
</div>
  )
}

export default Step02