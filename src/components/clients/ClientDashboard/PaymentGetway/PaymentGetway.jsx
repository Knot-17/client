import React from 'react';
import { Amount, AmountH1, CheckBox, CheckBoxCont, Container, Pay, PayH1, Payment, Wrapper } from './PaymentGetwayElements';
import { IoCloseOutline } from "react-icons/io5";

const PaymentGetway = () => {
    return (
        <div>
            <Wrapper>
            <Container>
                <IoCloseOutline className='ml-auto text-[24px] mr-[5px] cursor-pointer'/>
                <div className='flex h-[400px]'>
                <CheckBox>
                <CheckBoxCont></CheckBoxCont>
                <AmountH1>Total Amount</AmountH1>
                <Amount></Amount>
                </CheckBox>
                <Payment>
                    <PayH1>Payment Details</PayH1>

                    <form className='ml-[20px]  w-[80%]'>
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Person Name
                </div>
                <div className="bg-white my-2 p-1 flex border border-[#01bf71] rounded ">
                  <input
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    placeholder='Name'
                  />
                </div>
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Card Number
                </div>
                <div className="bg-white my-2 p-1 flex border border-[#01bf71] rounded ">
                  <input
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    placeholder='1234 5678 435678'
                  />
                </div>
                <div className='flex justify-between '>
                    <div className=' w-[48%]'>
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Expiry
                </div>
                <div className="bg-white my-2 p-1 flex border border-[#01bf71] rounded ">
                  <input
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    placeholder='Name'
                  />
                </div>
                    </div>
                    <div className=' w-[48%]'>
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    CVV/CVC
                </div>
                <div className="bg-white my-2 p-1 flex border border-[#01bf71] rounded ">
                  <input
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    placeholder='Name'
                  />
                </div>
                    </div>
                

                </div>

                <Pay>Confirm Payment</Pay>
                    </form>
                    </Payment>
                    </div>
            </Container>
            </Wrapper>
            
        </div>
    );
}

export default PaymentGetway;
