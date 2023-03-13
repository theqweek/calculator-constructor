import { IBlock } from "./BlocksProps"

export interface IBoard {
  side: string,
  blocks: IBlock[]
}

export interface BoardProps {
  board: IBoard,
  fns:((e: any, board?: any, item?: any) => any)[]
}