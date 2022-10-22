import React, {useState,useEffect} from 'react'
import { Form, FormContainer, InputBox, ButtonElementEdit, Label , Input, InputContainerLeft, ButtonContainer, ButtonElement, Select, SubTitle, InputContainerSingle, Margin } from '../profileElements'
import axios from 'axios' ;



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
   <>
    <FormContainer>
      <Form>
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

   </>
  )
}

export default AccountDetails;