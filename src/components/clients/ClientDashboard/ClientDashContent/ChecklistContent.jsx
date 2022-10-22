import React, {useState} from 'react';
import {  ChecklistLink, ListIcon, RadioIcon, SelectIcon} from './YourWeddingElements';


const ChecklistContent = () => {
    const [isClick, set] = useState("flase");
    return (
        <div>
             <ChecklistLink className=' text-[14px] md:text-[18px] font-medium'><ListIcon/>Next on your checklist</ChecklistLink>

<div className=' overflow-hidden mt-[5%] '>

<ChecklistLink className={` relative  duration-[2s] text-[14px] md:text-[16px]  ${isClick === 'true1' ? "top-[-60px]" : "top-[0px]" }`}

onClick={() => set("true1")}
>
 {isClick==='true1' ? <SelectIcon/> : <RadioIcon/>}  
   Start planing with Knot</ChecklistLink>
</div>
<div className=' overflow-hidden mt-[30px] '>

<ChecklistLink className={` relative  duration-[2s] text-[14px] md:text-[16px]  ${isClick === 'true2' ? "top-[-60px]" : "top-[0px]" }`}

onClick={() => set("true2")}
>
 {isClick==='true2' ? <SelectIcon/> : <RadioIcon/>}  
   Get Engaged</ChecklistLink>
</div>
<div className=' overflow-hidden mt-[30px] '>

<ChecklistLink className={` relative  duration-[2s] text-[14px] md:text-[16px]  ${isClick === 'true3' ? "top-[-60px]" : "top-[0px]" }`}

onClick={() => set("true3")}
>
 {isClick==='true3' ? <SelectIcon/> : <RadioIcon/>}  
   Start planing with Knot</ChecklistLink>
</div>










        </div>
    );
}

export default ChecklistContent;
