import React from "react";
import styled from "styled-components";

import MainBackGround from "../../components/MainBackGround";
import JoyStickButtons from "../../components/JoyStickButtons";

const MainTitle = styled.div`
  font-family: "DungGeunMo";
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;
  & > h2 {
    text-shadow: -1px 0 gold, 0 1px gold, 1px 0 gold, 0 -1px gold;
    color: #fff;
    font-size: 1.1em;
    letter-spacing: 0.1em;
  }
  & > .firstHalf {
    color: red;
    font-size: 4em;
    text-shadow: 4px 3px #333;
  }

  & > .group {
    color: #ddd;
    font-size: 3em;
    margin-top: -20px;
    text-shadow: 4px 3px #333;
  }
`;
const GameStartBtn = styled.button`
  font-family: "DungGeunMo";
  color: gold;
  margin-top: 50px;
  font-size: 1.6em;
  letter-spacing: 0.05em;
`;

function MainPage() {
  return (
    <div>
      <MainBackGround>
        <MainTitle>
          <h2>성남시청소년자립지원관</h2>
          <h1 className="firstHalf">상반기</h1>
          <h1 className="group">자조모임</h1>
        </MainTitle>
        <GameStartBtn>
          <span>►</span> GAME START!
        </GameStartBtn>
      </MainBackGround>
      <JoyStickButtons />
    </div>
  );
}

export default MainPage;
