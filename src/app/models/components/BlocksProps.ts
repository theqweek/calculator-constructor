import { DnDFunctions } from "../DnDFunctions"
import { IBoard } from "./BoardProps"

export interface IBlock {
  id: number,
  name: string,
  data: (number | string)[]
}

export interface BlockProps {
  component: IBlock,
  board: IBoard,
  fns: DnDFunctions;
}