import React from 'react'
import { Form, FormContainer, InputBox, InputContainerDouble, Label , Input, InputContainerLeft, ButtonContainer, ButtonElement, SubTitle, Select, InputContainerCheckbox, CheckboxContainer } from '../profileElements'
import { green } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { useState ,useEffect } from 'react';
import axios from 'axios';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import {Link as LinkR} from 'react-router-dom'

import styled from 'styled-components';


const Container =styled.div`  
`
const WeddingDetails = () => {
  const [filter , setFilter] = useState('');

  useEffect(() =>{
    axios.get(`http://localhost:5000/api/v1/filter/${localStorage.getItem('id')}`)
        .then((res) => {
          setFilter(res.data[0]);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
            });},[]);

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
          <Label> Wedding Date </Label>
            <InputBox>
              <Input name="weddingdate" defaultValue={filter.date}  />
            </InputBox>
          </InputContainerLeft>
          <InputContainerLeft>
          <Label> Wedding Place </Label>
            <InputBox>
              <Input name="location" defaultValue={filter.location} />
            </InputBox>
          </InputContainerLeft>
        </InputContainerDouble>
        <InputContainerDouble>
        <InputContainerLeft>
          <Label> No of Guests </Label>
            <InputBox>
              <Select name='guestcount' defaultValue={filter.guestcount}>
                <option value="" disabled  hidden>Estimated guest count</option>
                <option value="1">0 - 50</option>
                <option value="2">50 - 150</option>
                <option value="3">150 - 300 </option>
                <option value="4">300 - 500</option>
                <option value="5">500 +</option>
              </Select>
            </InputBox>
          </InputContainerLeft>
          <InputContainerLeft>
          <Label> Wedding Budget</Label>
            <InputBox>
              <Select name='budget' defaultValue={filter.budget} >
                <option  value="" disabled  hidden>Budget range</option>
                <option value="1">Below 100000 Rs</option>
                <option value="2">100000 - 150000 Rs</option>
                <option value="3">150000 - 300000 Rs</option>
                <option value="4">Above 300000 Rs</option>
              </Select>
              </InputBox>
          </InputContainerLeft>
        </InputContainerDouble>
        <SubTitle> Desired venue type </SubTitle>
        <CheckboxContainer>
          <InputContainerDouble>
            <InputContainerCheckbox>
                  <Label> Hotel </Label>
                  <Checkbox
                    label='Hotel'
                    
                    sx={{
                      color: green[800],
                      '&.Mui-checked': {
                        color: green[400]},
                      '& .MuiSvgIcon-root': {fontSize: 35}
                      ,
                    }}
                  />
            </InputContainerCheckbox>
            <InputContainerCheckbox>
                  <Label> Mountain </Label>
                  <Checkbox
                    label='Mountain'
                    
                    sx={{
                      color: green[800],
                      '&.Mui-checked': {
                        color: green[400]},
                      '& .MuiSvgIcon-root': {fontSize: 35}
                      ,
                    }}
                  />
            </InputContainerCheckbox>
          </InputContainerDouble>
          <InputContainerDouble>
            <InputContainerCheckbox>
                  <Label> Beach </Label>
                  <Checkbox
                    label='Beach'
                    
                    sx={{
                      color: green[800],
                      '&.Mui-checked': {
                        color: green[400]},
                      '& .MuiSvgIcon-root': {fontSize: 35}
                      ,
                    }}
                  />
            </InputContainerCheckbox>
            <InputContainerCheckbox>
                  <Label> Estate </Label>
                  <Checkbox
                    label='Estate'
                    
                    sx={{
                      color: green[800],
                      '&.Mui-checked': {
                        color: green[400]},
                      '& .MuiSvgIcon-root': {fontSize: 35}
                      ,
                    }}
                  />
            </InputContainerCheckbox>
          </InputContainerDouble>
          <InputContainerDouble>
            <InputContainerCheckbox>
                  <Label> Religious Setting </Label>
                  <Checkbox
                    label='Religious Setting'
                    
                    sx={{
                      color: green[800],
                      '&.Mui-checked': {
                        color: green[400]},
                      '& .MuiSvgIcon-root': {fontSize: 35}
                      ,
                    }}
                  />
            </InputContainerCheckbox>
            <InputContainerCheckbox>
                  <Label> Cruise </Label>
                  <Checkbox
                    label='Cruise'
                    
                    sx={{
                      color: green[800],
                      '&.Mui-checked': {
                        color: green[400]},
                      '& .MuiSvgIcon-root': {fontSize: 35}
                      ,
                    }}
                  />
            </InputContainerCheckbox>
          </InputContainerDouble>
          <InputContainerDouble>
            <InputContainerCheckbox>
                  <Label> Rooftop </Label>
                  <Checkbox
                    label='Rooftop'
                    
                    sx={{
                      color: green[800],
                      '&.Mui-checked': {
                        color: green[400]},
                      '& .MuiSvgIcon-root': {fontSize: 35}
                      ,
                    }}
                  />
            </InputContainerCheckbox>
            <InputContainerCheckbox>
                  <Label> Park </Label>
                  <Checkbox
                    label='Park'
                    
                    sx={{
                      color: green[800],
                      '&.Mui-checked': {
                        color: green[400]},
                      '& .MuiSvgIcon-root': {fontSize: 35}
                      ,
                    }}
                    />
            </InputContainerCheckbox>
          </InputContainerDouble>
        </CheckboxContainer>
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

export default WeddingDetails