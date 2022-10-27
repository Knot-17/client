import React from "react";
import {
  Amount,
  AmountH1,
  CheckBox,
  CheckBoxCont,
  Container,
  Pay,
  PayH1,
  Payment,
  Wrapper,
} from "./PaymentGetwayElements";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";
import Swal from "sweetalert2";

import { useForm } from "react-hook-form";

const PaymentGetway = ({ dealersID, clientsID, Price }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const response = axios
      .post("http://localhost:5000/api/v1/payment", { ...data, amount: Price })
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your Payment done",
        });
      })
      .catch((err) => {
        if (err && err.response);
        console.log(err);
      });
  };

  return (
    <div>
      <Wrapper>
        <Container>
          <div className="flex h-[400px]">
            <CheckBox>
              <CheckBoxCont>
                {" "}
                <img src="https://img.freepik.com/free-photo/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual_8353-10047.jpg?w=2000" />{" "}
              </CheckBoxCont>
              <AmountH1>Total Amount</AmountH1>
              <Amount> Rs :{Price}</Amount>
            </CheckBox>
            <Payment>
              <PayH1>Payment Details</PayH1>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="ml-[20px]  w-[80%]"
              >
                <input
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  name="dealersID"
                  hidden
                  value={dealersID}
                  {...register("dealersID", { required: true })}
                />
                <input
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  hidden
                  name="clientsID"
                  value={clientsID}
                  {...register("clientsID", { required: true })}
                />
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  Person Name
                </div>
                <div className="bg-white my-2 p-1 flex border border-[#01bf71] rounded ">
                  <input
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    placeholder="Name"
                    name="firstname"
                    {...register("firstname", { required: true })}
                  />
                </div>
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  Card Number
                </div>
                <div className="bg-white my-2 p-1 flex border border-[#01bf71] rounded ">
                  <input
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    placeholder="1234 5678 435678"
                    name="cardnumber"
                    {...register("cardnumber", { required: true })}
                  />
                </div>
                <div className="flex justify-between ">
                  <div className=" w-[48%]">
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                      Expiry
                    </div>
                    <div className="bg-white my-2 p-1 flex border border-[#01bf71] rounded ">
                      <input
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        placeholder="Name"
                        name="expiry"
                        {...register("expiry", { required: true })}
                      />
                    </div>
                  </div>
                  <div className=" w-[48%]">
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                      CVV/CVC
                    </div>
                    <div className="bg-white my-2 p-1 flex border border-[#01bf71] rounded ">
                      <input
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        placeholder="CVV"
                        type="password"
                        name="cvv"
                        {...register("cvv", { required: true })}
                      />
                    </div>
                  </div>
                </div>

                <Pay type="submit">Confirm Payment</Pay>
              </form>
            </Payment>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default PaymentGetway;
