export interface Tasks {
  id: number;
  title: string;
}

export interface Props {
  name: string;
  surname: string;
  tasks: Tasks[];
}
export type counterState = {
  count: number;
};
