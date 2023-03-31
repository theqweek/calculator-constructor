import { IBlock } from "./components/BlocksProps";
import { IBoard } from "./components/BoardProps";

export interface DnDFunctions {
  dragOverHandler: (e: React.DragEvent<HTMLDivElement>) => void;
  dragLeaveHandler: (e: React.DragEvent<HTMLDivElement>) => void
  dragStartHandler: (e: React.DragEvent<HTMLDivElement>, board: IBoard, block: IBlock) => void,
  dragEndHandler: (e: React.DragEvent<HTMLDivElement>) => void,
  dropHandler: (e: React.DragEvent<HTMLDivElement>, board: IBoard, block: IBlock) => void,
  dropCard: (e: React.DragEvent<HTMLDivElement>, board: IBoard) => void,
}