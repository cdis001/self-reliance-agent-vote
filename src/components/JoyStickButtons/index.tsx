import React from "react";
import styled from "styled-components";

const JoyStickButtonsStyle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ButtonStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  margin: 0 1vw;
  & > .joy-head {
    background-color: red;
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
    margin-bottom: -1vh;
    // position: relative;
    z-index: 6;
  }
  & > .joy-head > div {
    background-color: #ff8888;
    width: 3vw;
    height: 3vw;
    border-radius: 75% 50%;
    position: absolute;
    top: 6px;
    left: 4px;
  }
  & > .joy-body {
    background-color: #333;
    width: 3vw;
    height: 7vh;
  }
  & > .button-head {
    background-color: #d6d6d6;
    width: 15vw;
    height: 1vh;
    border-radius: 4px 4px 0 0;
  }
  & > .button-body {
    background-color: #fff;
    width: 20vw;
    height: 1.2vh;
    border-radius: 4px 4px 0 0;
  }
  @media (min-width: 400px) {
    & {
      margin: 0 1vw;
      & > .joy-head {
        background-color: red;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-bottom: -1vh;
        z-index: 6;
      }
      & > .joy-body {
        background-color: #333;
        width: 12px;
        height: 45px;
      }
      & > .button-head {
        background-color: #d6d6d6;
        width: 60px;
        height: 6px;
        border-radius: 4px 4px 0 0;
      }
      & > .button-body {
        background-color: #fff;
        width: 75px;
        height: 8px;
        border-radius: 4px 4px 0 0;
      }
    }
    .color-red {
      background-color: red;
    }
    .color-gold {
      background-color: gold;
    }
    .color-blueviolet {
      background-color: blueviolet;
    }
  }
`;

const JoyStickButtons = () => {
  return (
    <JoyStickButtonsStyle>
      <ButtonStyle>
        <button className="button-head color-red"></button>
        <button className="button-body"></button>
      </ButtonStyle>
      <ButtonStyle>
        <button className="button-head color-gold"></button>
        <button className="button-body"></button>
      </ButtonStyle>
      <ButtonStyle>
        <button className="button-head color-blueviolet"></button>
        <button className="button-body"></button>
      </ButtonStyle>
      <ButtonStyle>
        <div className="joy-head">{/* <div /> */}</div>
        <div className="joy-body"></div>
        <div className="button-head"></div>
        <div className="button-body"></div>
      </ButtonStyle>
    </JoyStickButtonsStyle>
  );
};

export default JoyStickButtons;
