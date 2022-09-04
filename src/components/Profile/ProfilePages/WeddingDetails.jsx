import React from 'react'
import { Form, FormContainer, InputBox, InputContainerDouble, Label , Input, InputContainerLeft, ButtonContainer, ButtonElement, SubTitle, Select, InputContainerCheckbox, CheckboxContainer } from '../profileElements'
import { green } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';


const UserDetails = () => {
  return (
   <>
    <FormContainer>
      <Form>
        <InputContainerDouble>
        <InputContainerLeft>
          <Label> Wedding Date </Label>
            <InputBox>
              <Input/>
            </InputBox>
          </InputContainerLeft>
          <InputContainerLeft>
          <Label> Wedding Place </Label>
            <InputBox>
              <Input/>
            </InputBox>
          </InputContainerLeft>
        </InputContainerDouble>
        <InputContainerDouble>
        <InputContainerLeft>
          <Label> No of Guests </Label>
            <InputBox>
              <Select>
              <option value="" disabled selected hidden>Estimated guest count</option>
              <option value="">0-100</option>
              <option value="">100-250</option>
              <option value="">250-500</option>
              <option value="">500-1000</option>
              <option value="">1000 +</option>
              </Select>
            </InputBox>
          </InputContainerLeft>
          <InputContainerLeft>
          <Label> Wedding Budget</Label>
            <InputBox>
              <Select>
                <option  value="" disabled selected hidden>Budget range</option>
                <option  value="" >500000 Rs - 600000 Rs</option>
                <option  value="" >600000 Rs - 1000000 Rs</option>
                <option  value="" >1000000 Rs - 1500000 Rs</option>
                <option  value="" >1500000 Rs - 2000000 Rs</option>
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

   </>
  )
}

export default UserDetails