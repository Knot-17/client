import React, { useState } from "react";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroButtonWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroElements";
import Video from "../../../videos/wedding.mp4";
import { Button } from "../../ButtonElements";

import styled from "styled-components";

const Container = styled.div``;

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <Container>
      <HeroContainer>
        <HeroBg>
          <VideoBg src={Video} autoPlay loop muted type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1> Dream your wedding with knot </HeroH1>
          <HeroP>
            A great marriage isn’t something that just happens- it’s something
            that must be created.
          </HeroP>
          <HeroButtonWrapper>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              {" "}
              Get started {hover ? <ArrowForward /> : <ArrowRight />}{" "}
            </Button>
          </HeroButtonWrapper>
        </HeroContent>
      </HeroContainer>
    </Container>
  );
};

export default HeroSection;
