import React from "react";
import {
  NormalText,
  Title,
  AboutUsWrapper,
  RowDiv,
  Divider,
} from "../styles/styles";
import Image from "next/image";
import me from "../assets/images/agron.jpg";
const About = () => {
  return (
    <AboutUsWrapper>
      <RowDiv>
        <Divider>
          <Title>About Us</Title>
          <br />
          <NormalText>
            Hello I am Agron Bajrami I am 21 years old, I study at FINKI
            currnetly on my 3rd year, my main passion is coding, but i always
            had a love for food and basketball, so i decided to make a webpage
            on the so called love for food, where people can experiment all
            sorts of stuff and also make a change every once in a while at their
            dinner table.
          </NormalText>
        </Divider>
        <Divider style={{ maxWidth: "400px", paddingLeft: "80px" }}>
          <Image src={me.src} alt="" height={500} width={400} />
        </Divider>
      </RowDiv>
      <br />
      <br />
    </AboutUsWrapper>
  );
};

export default About;
