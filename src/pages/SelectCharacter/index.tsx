// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import MainBackGround from "../../components/MainBackGround";
import JoyStickButtons from "../../components/JoyStickButtons";

import Animals1 from "../../assets/animals1.jpeg";
// import Animals2 from "../../assets/animals2.jpeg";

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

  //   & > button:hover {
  //     border: solid;
  //     width: 41vw;
  //     height: 41vw;
  //   }
  .fox {
    background-image: url("${Animals1}");
    background-position: 6% 6%;
    background-size: 300%;
  }
  .deer {
    background-image: url("${Animals1}");
    background-position: 50% 6%;
    background-size: 300%;
  }
  .bunny {
    background-image: url("${Animals1}");
    background-position: 94% 6%;
    background-size: 300%;
  }
  .wolf {
    background-image: url("${Animals1}");
    background-position: 50% 94%;
    background-size: 300%;
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
          <button
            onClick={() => {
              navigate("/self-reliance-agent-vote/characterSettings");
            }}
            className={"fox"}
          />
          <button
            onClick={() => {
              navigate("/self-reliance-agent-vote/characterSettings");
            }}
            className={"deer"}
          />
          <button
            onClick={() => {
              navigate("/self-reliance-agent-vote/characterSettings");
            }}
            className={"bunny"}
          />
          <button
            onClick={() => {
              navigate("/self-reliance-agent-vote/characterSettings");
            }}
            className={"wolf"}
          />
        </SelectCharacterBox>
      </MainBackGround>
      <JoyStickButtons />
    </main>
  );
}

export default SelectCharacter;
