import React, { useState } from "react";
import {
  FormBox,
  FormContainer,
  ImageBox,
  ImageContainer,
  Input,
  InputBox,
  InputContainerLeft,
  Label,
  PrimaryContainer,
  SecondaryContainer,
  TitleContainer,
  Form,
  MainContainer,
  InputContainerFull,
  InputContainerSingle,
  InputContainerDouble,
  ButtonContainer,
  Button,
} from "../AddEventsElements";
import Image from "../../../../images/Personal site.gif";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
const Container = styled.div``;

const AddDestinations = () => {
  const [hasInstagram, setHasInstagram] = useState(false);
  const handleClickInstagram = () => setHasInstagram(!hasInstagram);
  const [hasFacebook, setHasFacebook] = useState(false);
  const handleClickFacebook = () => setHasFacebook(!hasFacebook);
  // const [image1, setImage1] = useState("");
  // const [image2, setImage2] = useState("");

  const convert2base64 = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      console.log(fileReader.result);
      // setImage1(fileReader.result.toString());
    };
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    convert2base64(data.image1[0]);
    convert2base64(data.image2[0]);
    const response = axios
      .post("http://localhost:5000/api/v1/dealersAds", data)
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your ad has been posted",
        });
        window.location.replace("http://localhost:3001/events");
      })
      .catch((err) => {
        if (err && err.response);
        console.log(err);
      });
  };

  return (
    <Container>
      <MainContainer>
        <PrimaryContainer>
          <SecondaryContainer>
            <ImageContainer>
              <ImageBox src={Image} />
            </ImageContainer>
            <FormContainer>
              <TitleContainer> Add your sight! </TitleContainer>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormBox>
                  <Input
                    name="dealersID"
                    {...register("dealersID", {
                      required: true,
                    })}
                    value={localStorage.getItem("did")}
                    hidden
                    readOnly
                  />
                  <Input
                    name="services"
                    {...register("services", {
                      required: true,
                    })}
                    value={localStorage.getItem("dservice")}
                    hidden
                    readOnly
                  />

                  <InputContainerFull>
                    <InputContainerLeft>
                      <Label> Name of the Destination </Label>
                      <InputBox>
                        <Input
                          name="destinations"
                          {...register("destinations", {
                            required: true,
                            minLength: 2,
                          })}
                        />
                      </InputBox>
                    </InputContainerLeft>
                  </InputContainerFull>
                  <InputContainerSingle>
                    <InputContainerLeft>
                      <Label> Category </Label>
                      <InputBox>
                        <Input
                          name="category"
                          {...register("category", {
                            required: true,
                            minLength: 2,
                          })}
                        />
                      </InputBox>
                    </InputContainerLeft>
                  </InputContainerSingle>
                  <InputContainerFull>
                    <InputContainerLeft>
                      <Label>Website URL</Label>
                      <InputBox>
                        <Input
                          name="websiteurl"
                          {...register("websiteurl", {
                            required: true,
                            minLength: 2,
                          })}
                        />
                      </InputBox>
                    </InputContainerLeft>
                  </InputContainerFull>
                  <InputContainerDouble>
                    <InputContainerLeft>
                      <Label> Location </Label>
                      <InputBox>
                        <Input
                          name="location"
                          {...register("location", {
                            required: true,
                            minLength: 2,
                          })}
                        />
                      </InputBox>
                    </InputContainerLeft>
                    <InputContainerLeft>
                      <Label> Street </Label>
                      <InputBox>
                        <Input
                          name="street"
                          {...register("street", {
                            required: true,
                            minLength: 2,
                          })}
                        />
                      </InputBox>
                    </InputContainerLeft>
                  </InputContainerDouble>
                  <InputContainerSingle>
                    <InputContainerLeft>
                      <Label> District </Label>
                      <InputBox>
                        <Input
                          name="district"
                          {...register("district", {
                            required: true,
                            minLength: 2,
                          })}
                        />
                      </InputBox>
                    </InputContainerLeft>
                  </InputContainerSingle>
                  <InputContainerFull>
                    <Label>Social Media</Label>

                    <FormControlLabel
                      control={
                        <Checkbox
                          onClick={handleClickInstagram}
                          checked={hasInstagram}
                          color="primary"
                          name="hasPhone"
                        />
                      }
                      label="Instagram Page"
                    />
                    {hasInstagram && (
                      <InputContainerLeft>
                        <Label>Instagram URL</Label>
                        <InputBox>
                          <Input
                            name="instagram"
                            {...register("instagram", {
                              minLength: 2,
                            })}
                          />
                        </InputBox>
                      </InputContainerLeft>
                    )}

                    <FormControlLabel
                      control={
                        <Checkbox
                          onClick={handleClickFacebook}
                          checked={hasFacebook}
                          color="primary"
                          name="hasPhone"
                        />
                      }
                      label="Facebook Page"
                    />
                    {hasFacebook && (
                      <InputContainerLeft>
                        <Label>Facebook URL</Label>
                        <InputBox>
                          <Input
                            name="facebook"
                            {...register("facebook", {
                              minLength: 2,
                            })}
                          />
                        </InputBox>
                      </InputContainerLeft>
                    )}
                  </InputContainerFull>
                  <InputContainerDouble>
                    <InputContainerLeft>
                      <Label>Maximum Guest Count </Label>
                      <InputBox>
                        <Input
                          name="maxGuest"
                          {...register("maxGuest", {
                            required: true,
                          })}
                        />
                      </InputBox>
                    </InputContainerLeft>
                    <InputContainerLeft>
                      <Label> Amount </Label>
                      <InputBox>
                        <Input
                          name="amount"
                          {...register("amount", {
                            required: true,
                          })}
                        />
                      </InputBox>
                    </InputContainerLeft>
                  </InputContainerDouble>
                  <Label> Upload Destinations </Label>
                  <InputContainerDouble>
                    <InputContainerLeft>
                      <InputBox>
                        <Input
                          name="image1"
                          {...register("image1", {
                            required: true,
                          })}
                          type={"file"}
                        />
                      </InputBox>
                    </InputContainerLeft>
                    <InputContainerLeft>
                      <InputBox>
                        <Input
                          name="image2"
                          {...register("image2", {
                            required: true,
                          })}
                          type={"file"}
                        />
                      </InputBox>
                    </InputContainerLeft>
                  </InputContainerDouble>
                  <ButtonContainer>
                    <Button type="submit">Submit</Button>
                  </ButtonContainer>
                </FormBox>
              </Form>
            </FormContainer>
          </SecondaryContainer>
        </PrimaryContainer>
      </MainContainer>
    </Container>
  );
};

export default AddDestinations;
