import {useStepperContext } from '../context/StepperContext';
import Image from './../../../images/Personal site.gif';
import styled from 'styled-components';

export const Img = styled.img`
  width: 70%;
  height: 70%;
  margin: 0 0 10px 0;
  padding-right: 0;
`

export default function PersonalDetails() {
  const {userData,setUserData} = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className='grid grid-flow-col grid-cols-2'>
      <div className='flex justify-center items-center h-full w-full '>
          <Img src={Image}/>
      </div>
      <form>
          <div className="grid grid-flow-row grid-rows-4 ">
            <div className="grid grid-flow-col grid-cols-2 gap-2"> 
              <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  Firstname
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                  <input
                    onChange={handleChange}
                    value={userData["firstname"] || ""}
                    name="firstname"
                    placeholder="Firstname"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />
                </div>
            </div>
            <div className="w-full mx-2 flex-1">
              <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Lastname
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData["lastname"] || ""}
                  name="lastname"
                  placeholder="Lastname"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </div>
            
            </div>
            <div className="grid grid-flow-col grid-cols-2 gap-2"> 
            
                <div className="w-full mx-2 flex-1">
                  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Date Of Birth
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                      onChange={handleChange}
                      value={userData["dob"] || ""}
                      name="dob"
                      placeholder="DOB"
                      type="date"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-400"
                    />
                  </div>
                </div>
                <div className="w-full mx-2 flex-1">
                  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Gender
                  </div>
                  <div className="bg-white my-2 p-1 flex justify-around">
                    <div className=' font-medium text-slate-500 '> Male  </div>
                    <input
                      onChange={handleChange}
                      value={userData["male"] || ""}
                      name="gender"
                      type="radio"
                      id="male"
                      className="p-1 px-2 h-8 w-8 text-gray-800"
                    />
                    <div className=' font-medium text-slate-500 '>Female</div>
                    <input
                      onChange={handleChange}
                      value={userData["female"] || ""}
                      name="gender"
                      type="radio"
                      id="female"
                      className="p-1 px-2 h-8 w-8 text-gray-800"
                    />
                  </div>
                </div>    
            </div>
            <div className="grid grid-flow-col grid-cols-2 gap-2">  
            
              <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  Mobile
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                  <input
                    onChange={handleChange}
                    value={userData["mobile"] || ""}
                    name="mobile"
                    placeholder="Mobile"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />
                </div>
              </div>

              <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  Email
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                  <input
                    onChange={handleChange}
                    value={userData["email"] || ""}
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />
                </div>
            </div>
            
            
            </div>
            <div className="grid grid-flow-col grid-cols-2 gap-2"> 
            
            <div className="w-full mx-2 flex-1">
              <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Address
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData["address"] || ""}
                  name="address"
                  placeholder="Address"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </div>
            
            
            <div className="w-full mx-2 flex-1">
              <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                City
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                  onChange={handleChange}
                  value={userData["city"] || ""}
                  name="city"
                  placeholder="City"
                  type="text"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </div>
      
            </div>
            
          </div>
      </form>
    </div>
  );
}