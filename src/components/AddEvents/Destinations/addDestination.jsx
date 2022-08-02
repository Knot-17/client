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
                            <Label> Name of the Destination </Label>
                            <InputBox>
                              <Input  />
                            </InputBox>
                          </InputContainerLeft>
                          <InputContainerRight>
                            <Label> Category </Label>
                            <InputBox>
                              <Input  />
                            </InputBox>
                          </InputContainerRight>
                          <InputContainerLeft>
                            <Label> Max-Guest </Label>
                            <InputBox>
                              <Input  />
                            </InputBox>
                          </InputContainerLeft>
                          <InputContainerRight>
                            <Label> Amount </Label>
                            <InputBox>
                              <Input  />
                            </InputBox>
                          </InputContainerRight>
                          <InputContainerLeft>
                            <Label> Location </Label>
                            <InputBox>
                              <Input  />
                            </InputBox>
                          </InputContainerLeft>
                          <InputContainerRight>
                            <Label> Street </Label>
                            <InputBox>
                              <Input  />
                            </InputBox>
                          </InputContainerRight>
                          <InputContainerLeft>
                            <Label> District </Label>
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