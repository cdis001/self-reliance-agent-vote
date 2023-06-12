import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

import { Character, Stat } from "interfaces";

const { persistAtom } = recoilPersist();

export const statState = atom<Stat[]>({
  key: "statState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const statFilterState = atom({
  key: "statFilterState",
  default: "ALL",
});

export const statsSelector = selector<Stat[]>({
  key: "statsSelector",
  get: ({ get }) => {
    const stats = get(statState);
    const filter = get(statFilterState);

    //   switch (filter) {
    //     case "ALL":
    //       return toDoLists;
    //     case "COMPLETED":
    //       return toDoLists.filter((data) => data.completed);
    //     case "UNCOMPLETED":
    //       return toDoLists.filter((data) => !data.completed);

    //     default:
    //       return toDoLists;
    //   }

    //   return toDoLists;
  },
  // set: ({ set }, newToDo) => {
  //   set(toDoListState, newToDo);
  // },
});
