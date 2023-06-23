import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import styled from "styled-components";
import { createBrowserHistory } from "history";

import {
  characterListState,
  statListState,
  isAdminState,
} from "../../recoil/atoms";
import { commit, getCharacterStat } from "../../api/stat";

import MainBackGround from "../../components/MainBackGround";
import JoyStickButtons from "../../components/JoyStickButtons";
import CharacterStatComponents from "../../components/CharacterStatComponents";
// import SubmitButton from "../../components/SubmitButton";

const CharacterImg = styled.div`
  width: 150px;
  height: 150px;
  border: 5px dashed #333;
  border-radius: 50%;
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

function CharacterSettings() {
  const [prevHover, setPrevHover] = useState(false);
  const [nextHover, setNextHover] = useState(false);
  const [isCommit, setIsCommit] = useState(false);

  const statList = useRecoilValue(statListState);
  const characterList = useRecoilValue(characterListState);
  const isAdmin = useRecoilValue(isAdminState);
  const setCharacterListState = useSetRecoilState(characterListState);
  const setStatList = useSetRecoilState(statListState);
  const resetStatList = useResetRecoilState(statListState);

  const history = createBrowserHistory();
  const navigate = useNavigate();
  const location = useLocation();

  const { id: userId, name } = location.state;

  const getStat = async () => {
    const { data, status }: any = await getCharacterStat(userId);

    if (status === 200) {
      setStatList(data);
    } else {
      alert("값을 가져오는데 실패했습니다!\n개발자를 갈궈주세요");
    }
  };

  useEffect(() => {
    history.listen(() => {
      if (history.action === "POP") resetStatList();
    });
  }, [history]);

  useEffect(() => {
    //
  }, [statList]);

  useEffect(() => {
    if (isAdmin) {
      getStat();
    }
  }, []);

  return (
    <main>
      <MainBackGround>
        <CharacterImg className={`agent${userId}`} />
        <CharacterName>{name}</CharacterName>
        <CharacterPosition>요원</CharacterPosition>
        <CharacterStatBox>
          {isCommit
            ? statList
                .slice(3, 6)
                .map((data, index) => (
                  <CharacterStatComponents
                    key={index}
                    id={data.id}
                    title={data.title}
                    value={data.value}
                  />
                ))
            : statList
                .slice(0, 3)
                .map((data, index) => (
                  <CharacterStatComponents
                    key={index}
                    id={data.id}
                    title={data.title}
                    value={data.value}
                  />
                ))}
        </CharacterStatBox>
        <MoveButtonList>
          <MoveButton
            onMouseEnter={() => setPrevHover(true)}
            onMouseLeave={() => setPrevHover(false)}
            onClick={() => {
              if (isCommit) {
                setIsCommit(false);
              } else {
                resetStatList();
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
            ${isAdmin && isCommit ? " nonvisible" : ""}
            `}
            onClick={async () => {
              if (!isCommit) {
                setIsCommit(true);
              } else {
                const newCharacterList = [...characterList];
                newCharacterList[userId - 1] = {
                  id: userId,
                  name,
                  isCommited: true,
                  statList,
                };

                const { status }: any = await commit({ id: userId, statList });

                if (status === 201) {
                  setCharacterListState(newCharacterList);
                  const commitedAgent = newCharacterList.filter(
                    (data) => data.isCommited
                  );

                  if (commitedAgent.length === 4) {
                    navigate("/self-reliance-agent-vote/ending");
                  } else {
                    resetStatList();
                    navigate("/self-reliance-agent-vote/selectCharcter");
                  }
                } else {
                  alert("제출 실패! 김한송 요원에게 전달해주세요");
                }
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
