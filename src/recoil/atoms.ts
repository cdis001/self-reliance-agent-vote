import { atom } from "recoil";
// import { recoilPersist } from "recoil-persist";

import { Character, Stat } from "../interfaces";

// const { persistAtom } = recoilPersist();

export const characterListState = atom<Character[]>({
  key: "characterListState",
  default: [
    { id: 1, name: "전창현", isCommited: false, statList: [] },
    { id: 2, name: "변일수", isCommited: false, statList: [] },
    { id: 3, name: "김은선", isCommited: false, statList: [] },
    { id: 4, name: "김한송", isCommited: false, statList: [] },
  ],
  // effects_UNSTABLE: [persistAtom],
});

export const statListState = atom<Stat[]>({
  key: "statListState",
  default: [
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
    {
      id: 4,
      title: "공감능력",
      value: 0,
    },
    {
      id: 5,
      title: "자립지식",
      value: 0,
    },
    {
      id: 6,
      title: "문제해결",
      value: 0,
    },
  ],
  // effects_UNSTABLE: [persistAtom],
});

export const isAdminState = atom<boolean>({
  key: "isAdminState",
  default: false,
  // effects_UNSTABLE: [persistAtom],
});
