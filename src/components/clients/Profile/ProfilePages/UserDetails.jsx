import React ,{useEffect} from 'react'
import { Form, FormContainer, InputBox, InputContainerDouble, Label , Input, InputContainerLeft, ButtonContainer, ButtonElement, Select } from '../profileElements'
import axios from 'axios' ;
import { useState } from 'react';

import styled from 'styled-components';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import {Link as LinkR} from 'react-router-dom'

const Container =styled.div`  
`


const UserDetails = () => {
  const [user , setUser] = useState('');
  const [updateUser,setUpdateUser] = useState('');
  useEffect(() =>{
    axios.get(`http://localhost:5000/api/v1/getaUser/${localStorage.getItem('id')}`)
        .then((res) => {
          setUser(res.data[0]);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
            });},[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser({ ...updateUser, [name]: value });
  }
  console.log(updateUser);

  return (
   <Container>
    <FormContainer>
      <Breadcrumb>
        <Breadcrumb.Item>
          <div className='flex flex-row justify-center items-center'>
              <ArrowLeftOutlined />
              <a className='text-green-500 ml-3 font-semibold' href='http://localhost:3000/clientdash'>Back to Dashboard</a>
          </div>
        </Breadcrumb.Item>
      </Breadcrumb>
      {/* {user.map((users) => ( */}
      <Form className='mt-10'>
        <InputContainerDouble>
        <InputContainerLeft>
          <Label> First Name </Label>
            <InputBox>
              <Input  name="firstname"  onChange={handleChange} defaultValue={user.firstname}  />
            </InputBox>
          </InputContainerLeft>
          <InputContainerLeft>
          <Label> Last Name </Label>
            <InputBox>
              <Input name="lastname"  onChange={handleChange} defaultValue={user.lastname}/>
            </InputBox>
          </InputContainerLeft>
        </InputContainerDouble>
        <InputContainerDouble>
        <InputContainerLeft>
          <Label> Email </Label>
            <InputBox>
              <Input name="email"  onChange={handleChange} defaultValue={user.email} />
            </InputBox>
          </InputContainerLeft>
          <InputContainerLeft>
          <Label> Date of Birth</Label>
            <InputBox>
              <Input name="dob"  onChange={handleChange} defaultValue={user.dob} />
            </InputBox>
          </InputContainerLeft>
        </InputContainerDouble>
        <InputContainerDouble>
        <InputContainerLeft>
          <Label> Gender </Label>
            <InputBox>
              <Select name="gender"  onChange={handleChange} value={user.gender}>
              <option value="" disabled  hidden>Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              </Select>
            </InputBox>
          </InputContainerLeft>
          <InputContainerLeft>
          <Label> Mobile </Label>
            <InputBox>
              <Input name="mobile"  onChange={handleChange} defaultValue={user.mobile} />
            </InputBox>
          </InputContainerLeft>
        </InputContainerDouble>
        <InputContainerDouble>
        <InputContainerLeft>
          <Label> Address </Label>
            <InputBox>
              <Input name="address"  onChange={handleChange} defaultValue={user.address} />
            </InputBox>
          </InputContainerLeft>
          <InputContainerLeft>
          <Label> City </Label>
            <InputBox>
              <Input name="city"  onChange={handleChange} defaultValue={user.city} />
            </InputBox>
          </InputContainerLeft>
        </InputContainerDouble>
        <ButtonContainer>
          <ButtonElement>
            Save Changes
          </ButtonElement>
        </ButtonContainer>
      </Form>
      {/* ))} */}
    </FormContainer>
   </Container>
  )
}

export default UserDetails