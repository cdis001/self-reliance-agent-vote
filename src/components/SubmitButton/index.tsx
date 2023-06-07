// import { FormEvent } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SubmitButtonStyle = styled.button`
  margin-top: 2em;
`;

interface SubmitButtonProps {
  title: string;
  value: number;
}

const SubmitButton = ({ title, value }: SubmitButtonProps) => {
  const [isFalse, setIsFalse] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isFalse) {
      console.log(title);
      console.log(value);
      setIsFalse(false);
    }
  }, []);
  return (
    <SubmitButtonStyle
      onClick={() => navigate("/self-reliance-agent-vote/ending")}
    >
      제출하기
    </SubmitButtonStyle>
  );
};

export default SubmitButton;
