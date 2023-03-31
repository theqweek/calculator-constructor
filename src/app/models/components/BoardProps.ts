import { DnDFunctions } from "../DnDFunctions"
import { IBlock } from "./BlocksProps"

export interface IBoard {
  side: string,
  blocks: IBlock[]
}

export interface BoardProps {
  board: IBoard,
  fns: DnDFunctions
  curBlock: IBlock
}