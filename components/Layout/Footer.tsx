import React from "react";
import { FooterWrapper, StyledText, TopsideContent } from "./styles";
const Footer = () => {
  return (
    <FooterWrapper>
      <TopsideContent>
        <StyledText>@LearningHowToCook</StyledText>
        <StyledText>Sponsored By: BAJRAMI</StyledText>
      </TopsideContent>
      <br />
      <br />
      <StyledText>Copyright © 2022-2023. All Rights Reserved.</StyledText>
    </FooterWrapper>
  );
};

export default Footer;
