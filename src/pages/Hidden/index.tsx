import { FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import styled from "styled-components";

import {
  characterListState,
  statListState,
  isAdminState,
} from "../../recoil/atoms";
import { getCode } from "../../api/code";
import MainBackGround from "../../components/MainBackGround";

const MainTitle = styled.div`
  font-family: "DungGeunMo";
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;
  & > h1 {
    font-size: 3em;
    background-image: linear-gradient(
      to right,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      purple,
      red
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: gradient 2s linear infinite;
    background-size: 200% 100%;
  }

  @keyframes gradient {
    0% {
      background-position: 0;
    }
    100% {
      background-position: 200%;
    }
  }
`;

const AdmissionCodeInput = styled.input`
  margin-top: 2vh;
  padding: 2px 8px;
  width: 90%;
  border: 2px solid #333;
  border-radius: 4px;
  font-size: 1.1em;
  &:focus {
    outline: none;
  }
`;

const EntryBtn = styled.button`
  margin-top: 2vh;
  padding: 0 10px;
  font-size: 1.4em;
  letter-spacing: 0.05em;
  background-color: red;
  border: 3px solid #333;
  border-radius: 4px;
  color: #fff;
  &:hover {
    text-shadow: 1px 1px #333;
    visibility: visible;
    color: gold;
  }
`;

function Hidden() {
  const [value, setValue] = useState("");
  const [code, setCode] = useState("");

  const setIsAdminState = useSetRecoilState(isAdminState);
  const resetStatList = useResetRecoilState(statListState);
  const resetCharacterListState = useResetRecoilState(characterListState);
  const navigate = useNavigate();

  const setCodeValue = async () => {
    const { data, status }: any = await getCode();
    if (status === 200) {
      setCode(data.value);
    } else {
      alert("코드를 읽어오는데 실패했습니다!\n개발자를 갈구세요");
    }
  };

  useEffect(() => {
    setCodeValue();
  }, []);
  return (
    <main>
      <MainBackGround>
        <MainTitle>
          <h1 className="firstHalf">HIDDEN PAGE!</h1>
        </MainTitle>
        <AdmissionCodeInput
          value={value}
          onChange={(e: FormEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement;
            const targetValue = target.value;
            setValue(targetValue);
          }}
        />
        <EntryBtn
          onClick={() => {
            if (value === "김한송바보") {
              alert("당신은 바보입니다!");
            } else if (value === code) {
              setIsAdminState(true);
              resetStatList();
              resetCharacterListState();
              navigate("/self-reliance-agent-vote/selectCharcter");
            }
          }}
        >
          입장하기
        </EntryBtn>
      </MainBackGround>
    </main>
  );
}

export default Hidden;
