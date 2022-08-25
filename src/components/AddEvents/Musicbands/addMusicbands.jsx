import React ,{useState} from 'react'
import { FormBox, FormContainer, ImageBox, ImageContainer, Input, InputBox, InputContainerLeft,  Label, PrimaryContainer, SecondaryContainer, TitleContainer ,Form, MainContainer, InputContainerFull, InputContainerSingle, InputContainerDouble, ButtonContainer, Button, TextArea } from '../AddEventsElements'
import Image from './../../../images/Personal site.gif'
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import { yupResolver } from "@hookform/resolvers";


const AddBeauticians = () => {
  const  [hasInstagram, setHasInstagram] = useState(false);
  const handleClickInstagram = () => setHasInstagram(!hasInstagram) 
  const  [hasFacebook, setHasFacebook] = useState(false);
  const handleClickFacebook = () => setHasFacebook(!hasFacebook)


  return (
    <>
      <MainContainer>
        <PrimaryContainer>
            <SecondaryContainer>
                <ImageContainer>
                  <ImageBox src={Image} />
                </ImageContainer>
                <FormContainer>
                    <TitleContainer> Add your Band! </TitleContainer>
                    <Form>
                      <FormBox>
                         <InputContainerFull>
                            <InputContainerLeft>
                              <Label> Name of the Music Band </Label>
                              <InputBox>
                                <Input  />
                              </InputBox>
                            </InputContainerLeft>
                          </InputContainerFull>
                          <InputContainerFull>
                            <InputContainerLeft>
                              <Label> Description </Label>
                              <InputBox>
                                <TextArea 
                                  rows={4}/>
                              </InputBox>
                            </InputContainerLeft>
                          </InputContainerFull>
                          <InputContainerFull>
                            <InputContainerLeft>
                              <Label>Website URL</Label>
                              <InputBox>
                                <Input  />
                              </InputBox>
                            </InputContainerLeft>
                          </InputContainerFull>
                          <InputContainerFull>
                            
                              <Label>Social Media</Label>
                              
                              <FormControlLabel
                                    control={
                                      <Checkbox onClick={handleClickInstagram} checked={hasInstagram} color="primary"  name="hasPhone" />
                                    }
                                    label="Instagram Page"
                                  />
                                   {hasInstagram && (
                                    <InputContainerLeft>
                                      <Label>Instagram URL</Label>
                                      <InputBox>
                                        <Input/>
                                      </InputBox>
                                    </InputContainerLeft>
                                    
                                    )}

                                  <FormControlLabel
                                    control={
                                      <Checkbox onClick={handleClickFacebook} checked={hasFacebook} color="primary"  name="hasPhone" />
                                    }
                                    label="Facebook Page"
                                  />
                                   {hasFacebook && (
                                    <InputContainerLeft>
                                      <Label>Facebook URL</Label>
                                      <InputBox>
                                        <Input/>
                                      </InputBox>
                                    </InputContainerLeft>
                                    
                                    )}
                                    
                          </InputContainerFull>
                          <InputContainerDouble>
                            <InputContainerLeft>
                              <Label> Location </Label>
                              <InputBox>
                                <Input  />
                              </InputBox>
                            </InputContainerLeft>
                            <InputContainerLeft>
                              <Label> Street </Label>
                              <InputBox>
                                <Input  />
                              </InputBox>
                            </InputContainerLeft>
                          </InputContainerDouble>
                          <InputContainerSingle>
                            <InputContainerLeft>
                              <Label> District </Label>
                              <InputBox>
                                <Input  />
                              </InputBox>
                            </InputContainerLeft>
                          </InputContainerSingle>
                          <InputContainerSingle>
                            <InputContainerLeft>
                                <Label> Amount </Label>
                                <InputBox>
                                  <Input  />
                                </InputBox>
                              </InputContainerLeft>
                          </InputContainerSingle>
                          <Label> Upload Samples </Label>
                          <InputContainerDouble>
                            <InputContainerLeft>
                              <InputBox>
                                <Input type={'file'} />
                              </InputBox>
                            </InputContainerLeft>
                            <InputContainerLeft>
                              <InputBox>
                                <Input type={'file'} />
                              </InputBox>
                            </InputContainerLeft>
                          </InputContainerDouble>
                          <ButtonContainer>
                            <Button type='submit'>Submit</Button>
                          </ButtonContainer>
                      </FormBox>
                    </Form>
                </FormContainer>
            </SecondaryContainer>
        </PrimaryContainer>
      </MainContainer>
    </>
  )
}

export default AddMusicbands;