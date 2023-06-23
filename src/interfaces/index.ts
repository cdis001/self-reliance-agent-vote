export interface Character {
  id: number;
  name: string;
  isCommited: boolean;
  statList?: StatType[];
}

type StatType = {
  id: number;
  title: string;
  value: number;
};

export interface Stat {
  id: number;
  title: string;
  value: number;
  character?: Character;
}

export interface Code {
  id: number;
  value: string;
}
