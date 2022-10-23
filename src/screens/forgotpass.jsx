import { useFormik } from "formik";
import React, { useState } from "react";
import {
  ActiveLink,
  FormContainer,
  MutedLink,
  SignInFormContainer,
  SignInHead,
  SignInImage,
  SignInInputBox,
  SignInLinkBox,
  SignInSubmitButton,
  SignInWrapper,
  FieldError,
  FormError,
} from "../components/common/Forgotpass/ForgotpassPageElements";
import Image from "./../images/forgotpass.svg";
import axios from "axios";
import * as yup from "yup";

const ForgotpassPage = () => {
  const [error, setError] = useState(null);

  const validationSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const onSubmit = async (values) => {
    setError(null);
    const response = await axios
      .post("http://localhost:5000/api/v1/signin", values)
      .catch((err) => {
        if (err && err.response);
        setError(err.response.data.message);
      });

    if (response.status === 200) {
      alert("Authenticated");
    }
  };

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  return (
    <div className="md:w-3/5 mx-auto shadow-xl rounded-2xl pb-2 bg-white sm:w-full xs:w-full ">
      <div className="container horizontal mt-5">
        <SignInWrapper>
          <SignInImage src={Image} />
          <FormContainer onSubmit={formik.handleSubmit}>
            <SignInFormContainer>
              <SignInHead>Forgot Password</SignInHead>
              <FormError>{error ? error : ""}</FormError>
              <SignInInputBox>
                <div className="w-full mx-2 flex-1">
                  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Please Enter Your Username
                  </div>
                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      name="username"
                      placeholder="Username"
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
              </SignInInputBox>
              {
                <FieldError>
                  {formik.touched.username && formik.errors.username
                    ? formik.errors.username
                    : ""}
                </FieldError>
              }
              {/* <SignInInputBox> 
                            <div className="w-full mx-2 flex-1">
                                  <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                    Password
                                  </div>
                                  <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                    <input
                                      type="password"
                                      value={formik.values.password}
                                      onChange={formik.handleChange}
                                      name="password"
                                      placeholder="Password"
                                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                      onBlur={formik.handleBlur}

                                    />
                                  </div>
                              </div>
                      </SignInInputBox> */}
              {/* {<FieldError>{formik.touched.password && formik.errors.password ? formik.errors.password : '' }</FieldError>} */}
              {/* <SignInLinkBox>  
                        <MutedLink> Forgot your Password ? <ActiveLink>Click here</ActiveLink>  </MutedLink>
                      </SignInLinkBox> */}
              <h1>Send passwrod recovery email</h1>
              <SignInSubmitButton disabled={!formik.isValid}>
                Submit
              </SignInSubmitButton>
              {/* <MutedLink> Don't have an account ? <ActiveLink >SignUp</ActiveLink>  </MutedLink>  */}
            </SignInFormContainer>
          </FormContainer>
        </SignInWrapper>
      </div>

      <div className="my-10 p-10"></div>
    </div>
  );
};

export default ForgotpassPage;
