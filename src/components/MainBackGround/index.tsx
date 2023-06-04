import React from "react";
import styled from "styled-components";

import backgroundImg from "../../assets/background4.png";

const MainBackGroundStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dae3e4;
  background-image: url("${backgroundImg}");
  background-position: center;
  background-size: cover;
  width: 90%;
  height: 90vh;
  border-radius: 10px;
  border: 10px solid #ddd;
  padding: 20px 0;
  margin: auto;
  @media (min-width: 400px) {
    & {
      height: auto;
      aspect-ratio: 19 / 31;
    }
  }
`;

interface MainBackGroundProps {
  children?: React.ReactNode;
}

const MainBackGround = ({ children }: MainBackGroundProps) => {
  return <MainBackGroundStyle>{children}</MainBackGroundStyle>;
};

export default MainBackGround;
