import React from 'react'
import { ActiveLink, MutedLink, SignInFormContainer, SignInHead, SignInImage, SignInInputBox, SignInLinkBox, SignInSubmitButton, SignInWrapper } from '../components/Signin/SignInPageElements';
import Image from './../images/Computer login.gif';
const SignInPage = () => {
  return (
    <div className='md:w-3/5 mx-auto shadow-xl rounded-2xl pb-2 bg-white sm:w-full xs:w-full '>
        <div className='container horizontal mt-5'>
            <SignInWrapper>
                <SignInImage src={Image} />
                <SignInFormContainer>
                    <SignInHead>Sign In</SignInHead>
                    <SignInInputBox> 
                        <div className="w-full mx-2 flex-1">
                              <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                Username
                              </div>
                              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                <input
                              
                                  name="username"
                                  placeholder="Username"
                                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                />
                              </div>
                          </div>
                    </SignInInputBox>
                    <SignInInputBox> 
                          <div className="w-full mx-2 flex-1">
                                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                                  Password
                                </div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                  <input
                                  
                                    name="password"
                                    placeholder="Password"
                                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                  />
                                </div>
                            </div>
                    </SignInInputBox>
                    <SignInLinkBox>  
                      <MutedLink> Forgot your Password ? <ActiveLink>Click here</ActiveLink>  </MutedLink>
                    </SignInLinkBox>
                    <SignInSubmitButton>Sign In</SignInSubmitButton>
                    <MutedLink> Don't have an account ? <ActiveLink>SignUp</ActiveLink>  </MutedLink>
                    
                </SignInFormContainer>
            </SignInWrapper>
        </div>

        <div className='my-10 p-10'>
        
        </div>
    </div>
  )
}

export default SignInPage;