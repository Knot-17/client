<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components';


import Image from '../../../../images/Completed.gif';

export const Img = styled.img`
    width: 50%;
    height: 50%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

const Complete = () => {
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col  items-center">
        <div className="wrapper justify-center flex">
          <Img src={Image}/>
        </div>
        <div className="mt-3 text-xl font-semibold uppercase text-green-600">
          Congratulations!
        </div>
        <div className="text-lg font-semibold text-gray-500">
          Your Account has been created.
        </div>
        <a className="mt-10" href="/signin">
          <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
            Close
          </button>
        </a>
      </div>
    </div>
  )
}

=======
import React from 'react'
import styled from 'styled-components';


import Image from '../../../../images/Completed.gif';

export const Img = styled.img`
    width: 50%;
    height: 50%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

const Complete = () => {
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col  items-center">
        <div className="wrapper justify-center flex">
          <Img src={Image}/>
        </div>
        <div className="mt-3 text-xl font-semibold uppercase text-green-600">
          Congratulations!
        </div>
        <div className="text-lg font-semibold text-gray-500">
          Your Account has been created.
        </div>
        <a className="mt-10" href="/signin">
          <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
            Close
          </button>
        </a>
      </div>
    </div>
  )
}

>>>>>>> 29f386f35d00451c03c2b5d2aee8a2625e1c3fa7
export default Complete;