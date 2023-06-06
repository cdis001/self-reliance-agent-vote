import styled from "styled-components";

import MainBackGround from "../../components/MainBackGround";
import JoyStickButtons from "../../components/JoyStickButtons";

import SlimeSprite from "../../assets/slimeSprite2.png";

const MainTitle = styled.div`
  font-family: "DungGeunMo";
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;
  & > h2 {
    // text-shadow: -1px 0 gold, 0 1px gold, 1px 0 gold, 0 -1px gold;
    color: #000;
    font-size: 1.1em;
    letter-spacing: 0.1em;
  }
  & > h1 {
    font-size: 3em;
    letter-spacing: 0.1em;
    background-image: linear-gradient(
      to right,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      purple
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const Slime = styled.div`
  width: 112px;
  height: 112px;
  background: url("${SlimeSprite}") left center;
  background-size: cover;
  animation: play 0.8s steps(6) infinite;

  @keyframes play {
    100% {
      background-position: -3350px;
    }
  }
`;

function Ending() {
  return (
    <main>
      <MainBackGround>
        <MainTitle>
          <h1>THE END</h1>
          <h2>6월 17일에 만나요</h2>
        </MainTitle>
        <Slime />
      </MainBackGround>
      <JoyStickButtons />
    </main>
  );
}

export default Ending;
