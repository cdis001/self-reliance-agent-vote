import axios from "axios";

import { Stat } from "../interfaces";

export const commit = async (characterData: any) => {
  try {
    const newData = characterData?.statList?.map((data: Stat) => {
      return { title: data.title, value: data.value };
    });

    const { data, status } = await axios.post(
      `${import.meta.env.VITE_SERVER_HOST}/stat/${characterData.id}`,
      newData
    );

    return { data, status };
  } catch (error) {
    alert("제출에 실패했습니다!\n김한송 선생님에게 말해주세요");
  }
};

export const getCharacterStat = async (userId: number) => {
  try {
    const { data, status } = await axios.get(
      `${import.meta.env.VITE_SERVER_HOST}/stat/${userId}`
    );

    return { data, status };
  } catch (error) {
    alert("값을 가져오는데 실패했습니다!\n개발자를 갈궈주세요");
  }
};
