import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: white;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 200px;
`;

export const HeaderButton = styled.a`
  font-size: 18px;
  color: #111111;
  :active {
    color: #478ac9;
  }
`;

export const HeaderNavigation = styled.div`
  display: flex;
  column-gap: 35px;
  align-items: center;
  margin-left: 25px;
`;

export const LeftContent = styled.div`
  display: flex;
  justify-content: start;
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: end;
`;

export const FooterWrapper = styled.div`
  height: 200px;
  background-color: #333333;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const TopsideContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between !important;
  align-items: center;
  margin-top: 4rem;
  padding: 0 200px;
`;
export const StyledText = styled.p`
  font-size: 16px;
`;
