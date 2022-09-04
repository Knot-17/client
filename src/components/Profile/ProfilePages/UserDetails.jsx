import React from 'react'
import { Form, FormContainer, InputBox, InputContainerDouble, Label , Input, InputContainerLeft, ButtonContainer, ButtonElement, Select } from '../profileElements'

const UserDetails = () => {
  return (
   <>
    <FormContainer>
      <Form>
        <InputContainerDouble>
        <InputContainerLeft>
          <Label> First Name </Label>
            <InputBox>
              <Input/>
            </InputBox>
          </InputContainerLeft>
          <InputContainerLeft>
          <Label> Last Name </Label>
            <InputBox>
              <Input/>
            </InputBox>
          </InputContainerLeft>
        </InputContainerDouble>
        <InputContainerDouble>
        <InputContainerLeft>
          <Label> Email </Label>
            <InputBox>
              <Input />
            </InputBox>
          </InputContainerLeft>
          <InputContainerLeft>
          <Label> Date of Birth</Label>
            <InputBox>
              <Input/>
            </InputBox>
          </InputContainerLeft>
        </InputContainerDouble>
        <InputContainerDouble>
        <InputContainerLeft>
          <Label> Gender </Label>
            <InputBox>
              <Select>
              <option value="" disabled selected hidden>Gender</option>
              <option value="">Female</option>
              <option value="">Male</option>
              <option value="">Others</option>
              </Select>
            </InputBox>
          </InputContainerLeft>
          <InputContainerLeft>
          <Label> Mobile </Label>
            <InputBox>
              <Input/>
            </InputBox>
          </InputContainerLeft>
        </InputContainerDouble>
        <InputContainerDouble>
        <InputContainerLeft>
          <Label> Address </Label>
            <InputBox>
              <Input/>
            </InputBox>
          </InputContainerLeft>
          <InputContainerLeft>
          <Label> City </Label>
            <InputBox>
              <Input/>
            </InputBox>
          </InputContainerLeft>
        </InputContainerDouble>
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