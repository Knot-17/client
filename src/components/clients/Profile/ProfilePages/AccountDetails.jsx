import React, {useState,useEffect} from 'react'
import { Form, FormContainer, InputBox, ButtonElementEdit, Label , Input, InputContainerLeft, ButtonContainer, ButtonElement, Select, SubTitle, InputContainerSingle, Margin } from '../profileElements'
import axios from 'axios' ;

import { ArrowLeftOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import {Link as LinkR} from 'react-router-dom'

import styled from 'styled-components';


const Container =styled.div`  
`

const AccountDetails = () => {
  const [user , setUser] = useState('');


  useEffect(() =>{
    axios.get(`http://localhost:5000/api/v1/getaUser/${localStorage.getItem('id')}`)
        .then((res) => {
          setUser(res.data[0]);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
            });},[]);

  const  [editEmail, setEditEmail] = useState(false);
  const handleClickEdit= () => setEditEmail(!editEmail) 
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
        <SubTitle> Update your email </SubTitle>
        <InputContainerSingle>  
          <InputContainerLeft>
            <Label> Email </Label>
              <InputBox>
                <Input defaultValue={user.email} />
              </InputBox>
          </InputContainerLeft>
         
          {editEmail && (
          <InputContainerLeft>
            <Label> Password </Label>
              <InputBox>
                <Input type='password' />
              </InputBox>
          </InputContainerLeft>)}
        </InputContainerSingle>
        { !editEmail && (<ButtonContainer>
            <ButtonElementEdit onClick={handleClickEdit}>Edit Email</ButtonElementEdit>
          </ButtonContainer>)}
        {editEmail && (<ButtonContainer>
          <ButtonElementEdit onClick={handleClickEdit} >
            Cancel
          </ButtonElementEdit>
          <ButtonElement>
            Save Changes
          </ButtonElement>
        </ButtonContainer>)}
        <Margin/>
        <SubTitle> Update your Password </SubTitle>
        <InputContainerSingle>
          <InputContainerLeft>
            <Label> Current Password </Label>
              <InputBox>
                  <Input type='password' />
              </InputBox>
          </InputContainerLeft>
          <InputContainerLeft>
            <Label> New Password </Label>
              <InputBox>
                  <Input type='password' />
              </InputBox>
          </InputContainerLeft>
          <InputContainerLeft>
            <Label> Current Password </Label>
              <InputBox>
                <Input disabled />
              </InputBox>
          </InputContainerLeft>
        </InputContainerSingle>
        <ButtonContainer>
          <ButtonElement>
            Save Changes
          </ButtonElement>
        </ButtonContainer>
      </Form>
    </FormContainer>

   </Container>
  )
}

export default AccountDetails;