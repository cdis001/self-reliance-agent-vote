// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import MainBackGround from "../../components/MainBackGround";
import JoyStickButtons from "../../components/JoyStickButtons";

import Agent1 from "../../assets/agent1.jpeg";
import Agent2 from "../../assets/agent2.jpeg";
import Agent3 from "../../assets/agent3.jpeg";
import Agent4 from "../../assets/agent4.jpeg";

const MainTitle = styled.div`
  font-family: "DungGeunMo";
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;
  & > h2 {
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
    color: #fff;
    font-size: 1.1em;
    letter-spacing: 0.1em;
    margin-bottom: 2vh;
  }
  & > h2:hover {
    text-shadow: -1px 0 #000, 0 2px #000, 2px 0 #000, 0 -1px #000;
  }
`;

const SelectCharacterBox = styled.div`
  width: 80vw;
  height: 80vw;
  background-color: #fff;
  border: dashed;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
  }
  & > div > button {
    text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  & > div > span {
    color: gold;
    // color: blue;
    // color: #2a3492;
    // text-shadow: -1px 0 blue, 0 1px blue, 1px 0 blue, 0 -1px blue;
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
    font-size: 2em;
    line-height: initial;
    position: absolute;
    top: 40%;
    z-index: 1;
  }

  & > div > button:hover {
    text-shadow: -1px 0 gold, 0 1px gold, 1px 0 gold, 0 -1px gold;
  }

  & > div > button:disabled {
    text-shadow: none;
    filter: opacity(0.5) drop-shadow(0 0 0 #ccc);
    cursor: default;
  }

  .agent1 {
    background-image: url("${Agent1}");
    background-position: 65% -35%;
    background-size: 120%;
  }
  .agent2 {
    background-image: url("${Agent2}");
    background-position: 50% -40%;
    background-size: 130%;
  }
  .agent3 {
    background-image: url("${Agent3}");
    background-position: 65% 15%;
    background-size: 130%;
  }
  .agent4 {
    background-image: url("${Agent4}");
    background-size: cover;
  }

  @media (min-width: 400px) {
    & {
      width: 320px;
      height: 320px;
    }
  }
`;

function SelectCharacter() {
  const navigate = useNavigate();
  return (
    <main>
      <MainBackGround>
        <MainTitle>
          <h2>요원을 선택해주세요!</h2>
        </MainTitle>
        <SelectCharacterBox>
          <div>
            <span>CLEAR!</span>
            <button
              onClick={() => {
                navigate("/self-reliance-agent-vote/characterSettings");
              }}
              className={"agent1"}
              disabled={true}
            >
              전창현
            </button>
          </div>
          <div>
            <span>CLEAR!</span>
            <button
              onClick={() => {
                navigate("/self-reliance-agent-vote/characterSettings");
              }}
              className={"agent2"}
              disabled={true}
            >
              변일수
            </button>
          </div>
          <div>
            <span>CLEAR!</span>
            <button
              onClick={() => {
                navigate("/self-reliance-agent-vote/characterSettings");
              }}
              className={"agent3"}
              disabled={true}
            >
              김은선
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/self-reliance-agent-vote/characterSettings");
              }}
              className={"agent4"}
            >
              김한송
            </button>
          </div>
        </SelectCharacterBox>
      </MainBackGround>
      <JoyStickButtons />
    </main>
  );
}

export default SelectCharacter;
