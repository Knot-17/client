<<<<<<< HEAD
import React,{ useContext , useState } from 'react';
import 'antd/dist/antd.css';
import Image from '../../../../images/Personal site.gif';
import styled from 'styled-components';
import { StepperContext } from '../context/StepperContext';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd'
import * as yup from "yup";


import Select from 'react-select';
import { districts, typesOfServices } from '../data/data';

export const Img = styled.img`
  width: 70%;
  height: 70%;
  margin: 0 0 10px 0;
  padding-right: 0;
`

const FieldError = styled.span`
  color: #b32e2e;
  font-size: 11px;
`;

const FormSuccess = styled.span`
  color: #28a828;
  font-size: 12px;
  min-height: 20px;
  font-weight: 600;
`;


const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
  
    previewFile(file) {
      console.log('Your upload file:', file); // Your process logic. Here we just mock to the same file
  
      return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file,
      })
        .then((res) => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  };




export default function PersonalDetails() {
  const {dealersData,setDealersData} = useContext(StepperContext);
  const {success,setSuccess} = useState(null);

  // const {register,handleSubmit,formState:{errors}} = useForm();y

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDealersData({ ...dealersData, [name]: value });
  };


  // const formik = useFormik({initialValues:{firstname:"",lastname:""},
  // validationSchema:validation,
  // validateOnBlur:true
  // })

  return (
    <div className='grid grid-flow-col grid-cols-2'>
      <div className='flex justify-center items-center h-full w-full '>
          <Img src={Image}/>
      </div>
      <form>
      {/* <FormSuccess> {success ? success : ""} </FormSuccess>  */}

          <div className="flex flex-col ">
            <div className="flex flex-col"> 
              <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  Services Types
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                  <Select
                    name="servicestype"
                    onChange={handleChange}
                    options={typesOfServices}
                    classNamePrefix ="select"
                    // {...register("firstname",{required:true,maxLength:3})}
                    className="appearance-none outline-none h-full w-full text-gray-800 "
                  />
                </div>
                  {/* {errors.firstname && <FieldError>PLease</FieldError>} */}
              </div>
              <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  Services Locations
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                  <Select
                    isMulti
                    name="districts"
                    options={districts}
                    classNamePrefix ="select"
                    onChange={handleChange}
                    // {...register("firstname",{required:true,maxLength:3})}
                    className="appearance-none outline-none h-full w-full text-gray-800 "
                  />
                </div>
                  {/* {errors.firstname && <FieldError>PLease</FieldError>} */}
              </div>
              <div className='w-full mx-2 flex-1'>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                    Display Picture
                </div>  

                <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                    <Upload {...props}
                        onChange={handleChange}
                        name="displayPicture"
                    >
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </div>
              </div>
              <div className='w-full mx-2 flex-1'>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                    Description
                </div>  

                <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                    <textarea
                        onChange={handleChange}
                        value={dealersData["description"]  || ""}
                        name='description'
                        placeholder='description'
                        className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                    >
                    </textarea>
                </div>
              </div>
            </div>
          </div>
      </form>
    </div>
  );
=======
import React,{ useContext , useState } from 'react';
import 'antd/dist/antd.css';
import Image from '../../../../images/Personal site.gif';
import styled from 'styled-components';
import { StepperContext } from '../context/StepperContext';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd'
import * as yup from "yup";


import Select from 'react-select';
import { districts, typesOfServices } from '../data/data';

export const Img = styled.img`
  width: 70%;
  height: 70%;
  margin: 0 0 10px 0;
  padding-right: 0;
`

const FieldError = styled.span`
  color: #b32e2e;
  font-size: 11px;
`;

const FormSuccess = styled.span`
  color: #28a828;
  font-size: 12px;
  min-height: 20px;
  font-weight: 600;
`;


const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
  
    previewFile(file) {
      console.log('Your upload file:', file); // Your process logic. Here we just mock to the same file
  
      return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file,
      })
        .then((res) => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  };




export default function PersonalDetails() {
  const {dealersData,setDealersData} = useContext(StepperContext);
  const {success,setSuccess} = useState(null);

  // const {register,handleSubmit,formState:{errors}} = useForm();y

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDealersData({ ...dealersData, [name]: value });
  };


  // const formik = useFormik({initialValues:{firstname:"",lastname:""},
  // validationSchema:validation,
  // validateOnBlur:true
  // })

  return (
    <div className='grid grid-flow-col grid-cols-2'>
      <div className='flex justify-center items-center h-full w-full '>
          <Img src={Image}/>
      </div>
      <form>
      {/* <FormSuccess> {success ? success : ""} </FormSuccess>  */}

          <div className="flex flex-col ">
            <div className="flex flex-col"> 
              <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  Services Types
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                  <Select
                    name="servicestype"
                    onChange={handleChange}
                    options={typesOfServices}
                    classNamePrefix ="select"
                    // {...register("firstname",{required:true,maxLength:3})}
                    className="appearance-none outline-none h-full w-full text-gray-800 "
                  />
                </div>
                  {/* {errors.firstname && <FieldError>PLease</FieldError>} */}
              </div>
              <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  Services Locations
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                  <Select
                    isMulti
                    name="districts"
                    options={districts}
                    classNamePrefix ="select"
                    onChange={handleChange}
                    // {...register("firstname",{required:true,maxLength:3})}
                    className="appearance-none outline-none h-full w-full text-gray-800 "
                  />
                </div>
                  {/* {errors.firstname && <FieldError>PLease</FieldError>} */}
              </div>
              <div className='w-full mx-2 flex-1'>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                    Display Picture
                </div>  

                <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                    <Upload {...props}
                        onChange={handleChange}
                        name="displayPicture"
                    >
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </div>
              </div>
              <div className='w-full mx-2 flex-1'>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                    Description
                </div>  

                <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                    <textarea
                        onChange={handleChange}
                        value={dealersData["description"]  || ""}
                        name='description'
                        placeholder='description'
                        className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                    >
                    </textarea>
                </div>
              </div>
            </div>
          </div>
      </form>
    </div>
  );
>>>>>>> 29f386f35d00451c03c2b5d2aee8a2625e1c3fa7
}