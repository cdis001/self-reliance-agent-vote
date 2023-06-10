import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import MainBackGround from "../../components/MainBackGround";
import JoyStickButtons from "../../components/JoyStickButtons";
import CharacterStatComponents from "../../components/CharacterStatComponents";
import SubmitButton from "../../components/SubmitButton";

// import Agent1 from "../../assets/agent1.jpeg";
// import Agent2 from "../../assets/agent2.jpeg";
// import Agent3 from "../../assets/agent3.jpeg";
import Agent4 from "../../assets/agent4.jpeg";

const CharacterImg = styled.div`
  width: 150px;
  height: 150px;
  border: 5px dashed #333;
  border-radius: 50%;
  background-image: url("${Agent4}");
  background-size: cover;
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
  .nonvisible {
    visibility: hidden;
  }
`;

const MoveButton = styled.button`
  background-color: red;
  padding: 5px 15px;
  border: 3px solid #000;
  border-radius: 10%;
  color: #fff;
  z-index: 12;
  visibility: visible;
`;

const characterStatLists1 = [
  {
    id: 1,
    title: "집착",
    value: 0,
  },
  {
    id: 2,
    title: "꼰대력",
    value: 0,
  },
  {
    id: 3,
    title: "귀여움",
    value: 0,
  },
];

const characterStatLists2 = [
  {
    id: 1,
    title: "공감능력",
    value: 0,
  },
  {
    id: 2,
    title: "자립지식",
    value: 0,
  },
  {
    id: 3,
    title: "문제해결",
    value: 0,
  },
];

function CharacterSettings() {
  const [prevHover, setPrevHover] = useState(false);
  const [nextHover, setNextHover] = useState(false);
  const [isCommit, setIsCommit] = useState(false);
  const [characterStats, setCharacterStats] = useState(characterStatLists1);
  const navigate = useNavigate();

  return (
    <main>
      <MainBackGround>
        <CharacterImg />
        <CharacterName>김한송</CharacterName>
        <CharacterPosition>요원</CharacterPosition>
        <CharacterStatBox>
          {characterStats.map((data, index) =>
            data.title === "제출하기" ? (
              <SubmitButton key={index} {...data} />
            ) : (
              <CharacterStatComponents
                key={index}
                {...data}
                characterStats={characterStats}
                setCharacterStats={setCharacterStats}
              />
            )
          )}
        </CharacterStatBox>
        <MoveButtonList>
          <MoveButton
            onMouseEnter={() => setPrevHover(true)}
            onMouseLeave={() => setPrevHover(false)}
            onClick={() => {
              if (isCommit) {
                setIsCommit(false);
                setCharacterStats(characterStatLists1);
              } else {
                navigate("/self-reliance-agent-vote/selectCharcter");
              }
            }}
            className={prevHover ? "selected" : ""}
          >
            이전
          </MoveButton>
          <MoveButton
            onMouseEnter={() => setNextHover(true)}
            onMouseLeave={() => setNextHover(false)}
            className={`${nextHover ? "selected" : ""}
            `}
            // ${isCommit ? " nonvisible" : ""}
            onClick={() => {
              if (!isCommit) {
                setIsCommit(true);
                setCharacterStats(characterStatLists2);
              } else {
                navigate("/self-reliance-agent-vote/ending");
              }
            }}
          >
            {isCommit ? "제출하기" : "다음"}
          </MoveButton>
        </MoveButtonList>
      </MainBackGround>
      <JoyStickButtons />
    </main>
  );
}

export default CharacterSettings;
