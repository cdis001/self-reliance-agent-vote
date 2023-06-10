import {
  FormEvent,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import styled from "styled-components";

const CharacterStatComponentsStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    display: flex;
    width: 100%;
    flex: 1;
    padding: 3px;
  }
  & > div > button {
    flex: 1;
    margin-right: 3px;
    height: 6vw;
  }
  & > div > button:last-child {
    margin: 0;
  }
  .existValueButton {
    background-color: yellowgreen;
  }
  .nonExistValueButton {
    background-color: indianred;
  }
  @media (min-width: 400px) {
    & > div > button {
      height: 25px;
    }
  }
`;

const CharacterStatTitle = styled.span``;

const CharacterStatValue = styled.input`
  border: 0;
  width: 20%;
  margin-left: 2vw;
`;

type CharacterStatsType = {
  id: number;
  title: string;
  value: number;
};

interface CharacterStatComponentsProps {
  id: number;
  title: string;
  value: number;
  characterStats: CharacterStatsType[];
  setCharacterStats: Dispatch<SetStateAction<CharacterStatsType[]>>;
}

const CharacterStatComponents = ({
  id,
  title,
  value,
  characterStats,
  setCharacterStats,
}: CharacterStatComponentsProps) => {
  const [statValue, setStatValue] = useState(value);
  const valueArray = Array.from(
    { length: statValue },
    (_: any, i: number) => i + 1
  );
  const valueArray2 = Array.from(
    { length: 10 - statValue },
    (_: any, i: number) => statValue + 1 + i
  );
  useEffect(() => {
    setStatValue(value);
  }, [title]);

  return (
    <CharacterStatComponentsStyle>
      <div>
        <CharacterStatTitle>{title}: </CharacterStatTitle>
        <CharacterStatValue
          type="number"
          min={"0"}
          max={"10"}
          value={statValue}
          onChange={(e: FormEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement;
            const targetValue = parseInt(target.value);
            if (isNaN(targetValue)) {
              setStatValue(0);
            } else {
              characterStats[id - 1] = { id, title, value: targetValue };
              setCharacterStats(characterStats);
              setStatValue(targetValue);
            }
          }}
        />
      </div>
      <div>
        {valueArray.length > 0
          ? valueArray.map((data) => (
              <button
                key={`${title}-${data}`}
                className={"existValueButton"}
                onClick={() => {
                  characterStats[id - 1] = { id, title, value: data };
                  setCharacterStats(characterStats);
                  setStatValue(data);
                }}
              />
            ))
          : null}
        {valueArray2.length > 0
          ? valueArray2.map((data) => (
              <button
                key={`${title}-${data}`}
                className={"nonExistValueButton"}
                onClick={() => {
                  characterStats[id - 1] = { id, title, value: data };
                  setCharacterStats(characterStats);
                  setStatValue(data);
                }}
              />
            ))
          : null}
      </div>
    </CharacterStatComponentsStyle>
  );
};

export default CharacterStatComponents;
