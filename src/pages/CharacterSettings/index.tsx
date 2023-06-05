import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import MainBackGround from "../../components/MainBackGround";
import JoyStickButtons from "../../components/JoyStickButtons";
import CharacterStatComponents from "../../components/CharacterStatComponents";

const CharacterImg = styled.div`
  width: 150px;
  height: 150px;
  border: 5px dashed #333;
  border-radius: 50%;
  background-color: #ccc;
  margin-bottom: 15px;
`;

const CharacterName = styled.span`
  font-size: 2em;
  letter-spacing: 0.15em;
  color: yellowgreen;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
`;

const CharacterPosition = styled.span`
  font-family: "DungGeunMo";
  font-size: 1.3em;
  letter-spacing: 0.05em;
  margin-top: -0.5em;
`;

const CharacterStatBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  background-color: #fff;
  border: dashed;
  padding: 8px;
`;

const MoveButtonList = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-around;
  position: absolute;
  bottom: 0;

  .selected {
    background-color: red;
    color: #000;
    // box-shadow: 1px 1px #333;
  }
`;

const MoveButton = styled.button`
  background-color: red;
  padding: 5px 15px;
  border: 3px solid #000;
  border-radius: 10%;
  color: #fff;
  z-index: 12;
`;

const CharacterStatList = [
  {
    title: "바보력",
    value: 10,
  },
  {
    title: "호구력",
    value: 10,
  },
  {
    title: "재력",
    value: 0,
  },
  //   {
  //     title: "사격실력",
  //     value: 10,
  //   },
  //   {
  //     title: "독재력",
  //     value: 10,
  //   },
];

function CharacterSettings() {
  const [prevHover, setPrevHover] = useState(false);
  const [nextHover, setNextHover] = useState(false);
  const navigate = useNavigate();
  return (
    <main>
      <MainBackGround>
        <CharacterImg />
        <CharacterName>김한송</CharacterName>
        <CharacterPosition>요원</CharacterPosition>
        <CharacterStatBox>
          {CharacterStatList.map((data, index) => (
            <CharacterStatComponents key={index} {...data} />
          ))}
        </CharacterStatBox>
        <MoveButtonList>
          <MoveButton
            onMouseEnter={() => setPrevHover(true)}
            onMouseLeave={() => setPrevHover(false)}
            onClick={() => navigate("/self-reliance-agent-vote")}
            className={prevHover ? "selected" : ""}
          >
            이전
          </MoveButton>
          <MoveButton
            onMouseEnter={() => setNextHover(true)}
            onMouseLeave={() => setNextHover(false)}
            className={nextHover ? "selected" : ""}
          >
            다음
          </MoveButton>
        </MoveButtonList>
      </MainBackGround>
      <JoyStickButtons />
    </main>
  );
}

export default CharacterSettings;
