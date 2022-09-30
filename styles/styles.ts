import cookingMan from "../assets/images/cooking-man.jpg";
import styled from "styled-components";
import Image from "next/image";
import { Button, Input } from "antd";
import croissant from "../assets/images/croissant.jpg";
import germanFood from "../assets/images/germany.jpg";
import italianFood from "../assets/images/italy.jpg";

export const Wrapper = styled.div``;
export const AboutUsWrapper = styled.div`
  padding: 0 200px;
`;
export const Banner = styled.div`
  width: 100%;
  height: 800px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${cookingMan.src});
`;

export const BoldText = styled.p`
  font-size: 90px;
  color: white;
  position: absolute;
  margin: 14rem 0 0 12rem;
  font-weight: bold;
`;

export const LightText = styled.p`
  font-size: 20px;
  color: white;
  position: absolute;
  margin: 26rem 0 0 36rem;
  width: 370px;
  text-align: center;
`;

export const Content = styled.div`
  padding: 0 200px;
`;

export const CookingDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

export const Divider = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const CookingBoldText = styled.span`
  font-size: 80px;
  color: #db545a;
  font-weight: bold;
`;
export const CookingLightText = styled.span`
  font-size: 80px;
  color: #111111;
  margin-top: -40px !important;
`;

export const CookingDetailsText = styled.span`
  font-size: 18px;
  color: #111111;
  line-height: 2;
  width: 90%;
`;

export const CookingDetailsTextBold = styled(CookingDetailsText)`
  font-weight: bold;
`;

export const StyledImage = styled(Image)`
  border-radius: 50%;
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  column-gap: 10px;
`;
export const Title = styled.div`
  font-size: 36px;
  color: #111111;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const NormalText = styled(Title)`
  font-size: 18px;
`;

export const VideoWrapper = styled.div`
  padding: 100px 200px;
  background-color: #e5e5e5;
  margin-top: 40px;
  display: grid;
  grid-template-columns: auto auto;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 100px;
`;

export const ContactWrapper = styled.div`
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContactTitle = styled.span`
  font-size: 48px;
  font-weight: bold;
  color: #111111;
  padding-top: 3rem;
`;

export const StyledInput = styled(Input)`
  border-bottom: 2px solid black;
  width: 500px;
  :hover {
    border: 2px solid black;
  }
`;

export const StyledTextArea = styled(Input.TextArea)`
  border-bottom: 2px solid black;
  width: 500px;
  :hover {
    border: 2px solid black;
  }
`;

export const StyledButton = styled(Button)`
  border-color: black;
`;

export const FrenchBanner = styled.div`
  width: 100%;
  height: 1000px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${croissant.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const SingleVideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const GermanBanner = styled.div`
  width: 100%;
  height: 1000px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${germanFood.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const ItalianBanner = styled.div`
  width: 100%;
  height: 1000px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${italianFood.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
