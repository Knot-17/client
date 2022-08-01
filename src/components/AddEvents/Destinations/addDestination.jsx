import React from 'react'
import { FormBox, FormContainer, ImageBox, ImageContainer, Input, InputBox, InputContainer, InputContainerLeft, InputContainerRight, Label, PrimaryContainer, SecondaryContainer, TitleContainer ,Form } from '../AddEventsElements'
import Image from './../../../images/Personal site.gif'

const AddDestinations = () => {
  return (
    <>
        <PrimaryContainer>
            <SecondaryContainer>
                <ImageContainer>
                  <ImageBox src={Image} />
                </ImageContainer>
                <FormContainer>
                    <TitleContainer> Add your sight! </TitleContainer>
                    <Form>
                      <FormBox>
                          <InputContainerLeft>
                            <Label> username </Label>
                            <InputBox>
                              <Input  />
                            </InputBox>
                          </InputContainerLeft>
                          <InputContainerRight>
                            <Label> username </Label>
                            <InputBox>
                              <Input  />
                            </InputBox>
                          </InputContainerRight>
                          <InputContainerLeft>
                            <Label> username </Label>
                            <InputBox>
                              <Input  />
                            </InputBox>
                          </InputContainerLeft>
                          <InputContainerRight>
                            <Label> username </Label>
                            <InputBox>
                              <Input  />
                            </InputBox>
                          </InputContainerRight>
                          <InputContainerLeft>
                            <Label> username </Label>
                            <InputBox>
                              <Input  />
                            </InputBox>
                          </InputContainerLeft>
                      </FormBox>
                    </Form>
                </FormContainer>
            </SecondaryContainer>
        </PrimaryContainer>

    </>
  )
}

export default AddDestinations;