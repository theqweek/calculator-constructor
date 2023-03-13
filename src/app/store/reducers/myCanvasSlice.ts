import { createSlice, PayloadAction,  } from "@reduxjs/toolkit"
import { data } from "../../components/mock-up/mock-up";
import { IBlock } from "../../models/components/BlocksProps";
import { IBoard } from "../../models/components/BoardProps";
import { MyCanvasState } from "../../models/reducers/MyCanvasState";

const dataClone: IBoard = {...data};

const initialState: MyCanvasState = {
  boards: [
    dataClone,
    {
      side: 'right',
      blocks: []
    }
  ] 
  
}

export const myCanvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addFirst(state, action: PayloadAction<[IBoard, IBlock]>) {
      // const curIdx = curBoard?.blocks.indexOf(curBlock as IBlock);
      // const copyCurBoardBlocks = [...curBoard.blocks]
      // copyCurBoardBlocks.splice(curIdx as number, 1)
      const [board, block] = action.payload;
      if (board.side === 'right') {
        state.boards[1].blocks.push(block)
      }
      
    },
    remove(state, action: PayloadAction<number>) {
      state.boards[1].blocks = state.boards[1].blocks.filter(item => item.id !== action.payload)
    },
    replace(state, action: PayloadAction<[IBoard, IBoard, IBlock, IBlock]>) {
      const [curBoard, board, curBlock, block] = action.payload;

      const curIdx = curBoard?.blocks.indexOf(curBlock as IBlock);
      const dropIdx = board.blocks.indexOf(block);
      
      const copyBoardBlocks = [...board.blocks];
      const copyCurBoardBlocks = [...curBoard.blocks]

      copyBoardBlocks.splice(dropIdx + 1 as number, 0, curBlock as IBlock)
      copyCurBoardBlocks.splice(curIdx as number, 1)
      
      state.boards = state.boards.map(b => {
        if (b.side === board.side) {
          return {
            side: board.side,
            blocks: copyBoardBlocks
          };
        }
        if (b.side === curBoard.side) {  
          return {
            side: curBoard.side,
            blocks: copyCurBoardBlocks
          }
        }
        return b;
      })  
    }
  }
})

export default myCanvasSlice.reducer;