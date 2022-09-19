import React,{ useContext} from 'react';
import styled from 'styled-components';
import { DealersContext } from '../context/DealersContext';


import Image from '../../../../images/Enter OTP.gif';

export const Img = styled.img`
    width: 70%;
    height: 70%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export default function OTPInformation() {
  const {dealersData,setDealersData} = useContext(DealersContext);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDealersData({ ...dealersData, [name]: value });
  };
  return (
    <div className='grid grid-flow-col grid-cols-2'>
        <div className='flex justify-center items-center h-full w-full'>
            <Img src={Image}/>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="mt-3 text-xl font-semibold uppercase text-green-600 text-center">
            Almost done ! Check your mail for OTP
          </div>
          <div className="w-1/2 mx-2 flex flex-col  justify-center">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
              Enter Your OTP
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
              <input
                onChange={handleChange}
                value={dealersData["otp"] || ""}
                name="otp"
                placeholder="OTP"
                type="password"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>
        </div>
    </div>
  );
}