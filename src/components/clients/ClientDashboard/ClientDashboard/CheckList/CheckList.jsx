import React from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

const CheckList = () => {

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
    
    ];

    return (
        <div>
            <div className='bg-slate-300 h-[100px] w-[85%] ml-[8.5%] mt-[140px]'></div>
            <div className='ml-[8.5%] mt-[50px] w-[400px]'>
           

  {cities.map(city => (

<div>
<FormControl>
  
  <FormGroup 
    aria-labelledby="demo-radio-buttons-group-label"
    
    name="radio-buttons-group"
  >
    <FormControlLabel value="Boot Camps"  control={<Checkbox />} label={city} />
    
    
    
    
  </FormGroup >
  
  </FormControl>
</div>
  
      
             
          ))}
            </div>
        </div>
    );
}

export default CheckList;
