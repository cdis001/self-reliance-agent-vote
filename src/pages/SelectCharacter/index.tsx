import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { characterListState, isAdminState } from "../../recoil/atoms";

import MainBackGround from "../../components/MainBackGround";
import JoyStickButtons from "../../components/JoyStickButtons";

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

  @media (min-width: 400px) {
    & {
      width: 320px;
      height: 320px;
    }
  }
`;

type characterComponentsPorps = {
  id: number;
  name: string;
  isCommited: boolean;
};

const CharacterComponents = ({
  id,
  name,
  isCommited,
}: characterComponentsPorps) => {
  const navigate = useNavigate();
  return (
    <div>
      {isCommited ? <span>CLEAR!</span> : null}
      <button
        onClick={() => {
          navigate("/self-reliance-agent-vote/characterSettings", {
            state: { id, name },
          });
        }}
        className={`agent${id}`}
        disabled={isCommited}
      >
        {name}
      </button>
    </div>
  );
};

function SelectCharacter() {
  const characterList = useRecoilValue(characterListState);
  const isAdmin = useRecoilValue(isAdminState);

  const navigate = useNavigate();
  useEffect(() => {
    const commitedAgent = characterList.filter((data) => data.isCommited);

    if (commitedAgent.length === 4 && !isAdmin) {
      navigate("/self-reliance-agent-vote/ending");
    }
  }, []);

  useEffect(() => {
    // console.log(characterList);
  }, [characterList]);
  return (
    <main>
      <MainBackGround>
        <MainTitle>
          <h2>요원을 선택해주세요!</h2>
        </MainTitle>
        <SelectCharacterBox>
          {characterList.map((data, index) => (
            <CharacterComponents key={index} {...data} />
          ))}
        </SelectCharacterBox>
      </MainBackGround>
      <JoyStickButtons />
    </main>
  );
}

export default SelectCharacter;
