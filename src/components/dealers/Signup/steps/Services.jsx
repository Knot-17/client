import React,{ useContext , useState } from 'react';
import 'antd/dist/antd.css';
import Image from '../../../../images/Personal site.gif';
import styled from 'styled-components';
import { DealersContext } from '../context/DealersContext';

import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import * as yup from "yup";

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { districts, typesOfServices } from '../data/data';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



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


function getStyles(name, districts, theme) {
  return {
    fontWeight:
      districts.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function PersonalDetails() {
  const {dealersData,setDealersData} = useContext(DealersContext);
  const {success,setSuccess} = useState(null);
  const {services, setServices} =useContext(DealersContext);
  const {district, setDistrict} = useContext(DealersContext);
  const {profile, setProfile} = useContext(DealersContext);


  const theme = useTheme();

  const handleChangeDistrict = (event) => {
    const {
      target: { value },
    } = event;
    setDistrict(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );

  };


  const handleChangeService = (event) => {
    setServices(event.target.value);
  };

  const handleChangeProfile = (e) => {
    setProfile([...profile, e.target.files[0]]);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDealersData({ ...dealersData, [name]: value });
  };


  return (
    <div className='grid grid-flow-col grid-cols-2'>
      <div className='flex justify-center items-center h-full w-full '>
          <Img src={Image}/>
      </div>
      <form>

          <div className="flex flex-col ">
            <div className="flex flex-col"> 
              <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  Services Types
                </div>
                <div className="bg-white flex  rounded">
                  {/* select */}
                  <FormControl sx={{ m: 1, width: '100%'  , height: '100%'}}>
                    <InputLabel id="demo-multiple-chip-label">Services</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={services}
                      label="Services"
                      name ="services"
                      onChange={handleChangeService}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Destination">Destination</MenuItem>
                      <MenuItem value="Photography">Photography</MenuItem>
                      <MenuItem value="Decoration">Decoration</MenuItem>
                      <MenuItem value="Catering">Catering</MenuItem>
                      <MenuItem value="Makeup">Makeup</MenuItem>
                      <MenuItem value="Music Band">Music Band</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                  {/* {errors.firstname && <FieldError>PLease</FieldError>} */}
              </div>
              <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                  Services Locations
                </div>
                <div className="bg-white  flex  rounded">
                 {/* multi select  */}
                 <FormControl sx={{ m: 1, width: '100%'  , height: '100%'}}>
                    <InputLabel id="demo-multiple-chip-label">Select Districts</InputLabel>
                    <Select
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      value={district}
                      name="district"
                      onChange={handleChangeDistrict}
                      input={<OutlinedInput id="select-multiple-chip" label="Select Districts" />}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {districts.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, district, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  
                </div>
                  {/* {errors.firstname && <FieldError>PLease</FieldError>} */}
              </div>
              <div className='w-full mx-2 flex-1'>
                <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                    Display Picture
                </div>  

                <div className='bg-white my-2 p-1 flex  rounded'>
                <Upload
                  action={"http://localhost:3000/signupdealers"}
                  name='file'
                  listType="picture"
                  maxCount={1}
                  onChange={handleChangeProfile}
                  beforeUpload={(file) =>
                  {return false}}
                  className='overflow-hidden'
                >
                  <Button icon={<UploadOutlined />}>Upload Profile</Button>
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
                        placeholder='Description'
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
}