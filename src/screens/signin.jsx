import { useFormik } from 'formik';
import React, { useState } from 'react'
import { ActiveLink, FormContainer, MutedLink, SignInFormContainer, SignInHead, SignInImage, SignInInputBox, SignInLinkBox, SignInSubmitButton, SignInWrapper ,FieldError,FormError} from '../components/common/Signin/SignInPageElements';
import Image from './../images/Computer login.gif';
import axios from 'axios';
import * as yup from "yup";
import {useHistory} from 'react-router-dom';

const SignInPage = () => {
  const history = useHistory();
  const [id,setId] = useState('');
  const [username,setUsername] = useState('');
  const [service , setService] = useState('');
  const [error , setError] = useState(null);

  const validationSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
  });

  const onSubmit = async (values) => {
    setError(null);
    const response = await axios.post('http://localhost:5000/api/v1/signin', values).catch((err) => {
      if (err && err.response);
        setError(err.response.data.message);
    });

    if(response.status === 200){
      if(response.data.user === "client" ){
      setUsername(response.data.username);
      setId(response.data.id);
      localStorage.setItem('username',response.data.username);
      localStorage.setItem('id',response.data.id);
      alert('Authenticated User');
      history.push('/form');
      }
      else if (response.data.user === "dealer"){
        const payload = {
          "username":response.data.username,
          "id":response.data.id,
          "service":response.data.service
        }
        console.log(payload);
        localStorage.setItem('username',response.data.username);
        localStorage.setItem('id',response.data.id);
        localStorage.setItem('services',response.data.service);
        alert('Authenticated Dealer');
        const addTemp = axios
        .post("http://localhost:5000/api/v1/dealersLogin", payload)
        .catch((err) => {
          if (err && err.response);
            console.log(err)
        });
        if(addTemp){
        window.location.replace('http://localhost:3001');
        }
      }
    }
  }

  const formik = useFormik({initialValues:{username:'', password:''}, validateOnBlur: true,onSubmit, validationSchema: validationSchema});
  return (
    <div className='md:w-3/5 mx-auto shadow-xl rounded-2xl pb-2 bg-white sm:w-full xs:w-full '>
        <div className='container horizontal mt-5'>
            <SignInWrapper>
                <SignInImage src={Image} />
                <FormContainer onSubmit={formik.handleSubmit}>
                  <SignInFormContainer>
                      <SignInHead>Sign In</SignInHead>
                      <FormError>{error ? error :''}</FormError>
                      <SignInInputBox> 
                          <div className="w-full mx-2 flex-1">
                                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                  Username
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
                      {<FieldError>{formik.touched.username && formik.errors.username ? formik.errors.username : '' }</FieldError>}
                      <SignInInputBox> 
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
                      </SignInInputBox>
                      {<FieldError>{formik.touched.password && formik.errors.password ? formik.errors.password : '' }</FieldError>}
                      <SignInLinkBox>  
                        <MutedLink> Forgot your Password ? <ActiveLink to='/forgotpass'>Click here</ActiveLink>  </MutedLink>
                      </SignInLinkBox>
                      <SignInSubmitButton disabled={!formik.isValid}>Sign In</SignInSubmitButton>
                      <MutedLink> Don't have an account ? <ActiveLink>SignUp</ActiveLink>  </MutedLink> 
                  </SignInFormContainer>
                </FormContainer>
            </SignInWrapper>
        </div>

        <div className='my-10 p-10'>
        
        </div>
    </div>
  )
}

export default SignInPage;