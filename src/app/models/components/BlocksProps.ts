export interface IBlock {
  id: number,
  name: string,
  data: (number | string)[]
}

export interface BlockProps {
  component: IBlock
}