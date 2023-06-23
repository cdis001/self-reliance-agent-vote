import axios from "axios";

// import { Code } from "../interfaces";

export const getCode = async () => {
  try {
    const { data, status } = await axios.get(
      `${import.meta.env.VITE_SERVER_HOST}/code/1`
    );

    return { data, status };
  } catch (error) {
    alert("코드를 가져오는데 실패했습니다!\n개발자를 갈궈주세요");
  }
};
