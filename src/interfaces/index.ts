interface Character {
  id: string;
  name: string;
  statId: string;
  isCommited: boolean;
  statList: Stat[];
}
interface Stat {
  id: string;
  title: string;
  value: number;
}
