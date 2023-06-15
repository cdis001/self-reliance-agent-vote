import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

const ButtonStyle = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  margin: 0 1vw;
  position: relative;
  padding-top: 15px;
  &:active:not(:last-child) > .button-head {
    visibility: hidden;
    height: 0;
    border: none;
    border-radius: 0;
    overflow: hidden;
  }
  & > .joy-head {
    background-color: red;
    width: 10vw;
    height: 10vw;
    border: 0;
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
    transition: all 0.1s ease-in-out;
  }
  & > .button-body {
    background-color: #fff;
    width: 20vw;
    height: 1.2vh;
    border-radius: 4px 4px 0 0;
  }
  @media (min-width: 400px) {
    & {
      margin: 0 15px;
      & > .joy-head {
        background-color: red;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-bottom: -2px;
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
`;

const JoyStickButtons = () => {
  const [redBtn, setRedBtn] = useState(0);
  const [goldBtn, setGoldBtn] = useState(0);
  const [blueBtn, setBlueBtn] = useState(0);
  const [goToEvent, setGoToEvent] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (goToEvent === 5) {
      navigate("/self-reliance-agent-vote/hidden");
    } else if (redBtn === 3 && goldBtn === 0 && blueBtn === 0) {
      setGoToEvent(1);
    } else if (redBtn === 3 && goldBtn === 0 && blueBtn === 2) {
      setGoToEvent(2);
    } else if (redBtn === 3 && goldBtn === 1 && blueBtn === 2) {
      setGoToEvent(3);
    } else if (redBtn === 3 && goldBtn === 1 && blueBtn === 3) {
      setGoToEvent(4);
    } else if (redBtn === 3 && goldBtn === 3 && blueBtn === 3) {
      setGoToEvent(5);
    }
    // console.log("redBtn", redBtn);
    // console.log("goldBtn", goldBtn);
    // console.log("blueBtn", blueBtn);
    // console.log("goToEvent", goToEvent);
  }, [redBtn, goldBtn, blueBtn, goToEvent]);

  return (
    <JoyStickButtonsStyle>
      <ButtonStyle onClick={() => setRedBtn(redBtn + 1)}>
        <div className="button-head color-red"></div>
        <div className="button-body"></div>
      </ButtonStyle>
      <ButtonStyle onClick={() => setGoldBtn(goldBtn + 1)}>
        <div className="button-head color-gold"></div>
        <div className="button-body"></div>
      </ButtonStyle>
      <ButtonStyle onClick={() => setBlueBtn(blueBtn + 1)}>
        <div className="button-head color-blueviolet"></div>
        <div className="button-body"></div>
      </ButtonStyle>
      <ButtonStyle
        onClick={() => {
          setRedBtn(0);
          setGoldBtn(0);
          setBlueBtn(0);
          setGoToEvent(0);
        }}
      >
        <div className="joy-head">{/* <div /> */}</div>
        <div className="joy-body"></div>
        <div className="button-head"></div>
        <div className="button-body"></div>
      </ButtonStyle>
    </JoyStickButtonsStyle>
  );
};

export default JoyStickButtons;
