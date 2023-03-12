import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MyCanvasState } from "../../models/reducers/MyCanvasState";

const initialState: MyCanvasState = {
  blocks: [{
    id: 1,
    name: 'display',
    data: [0],
  },],
}

export const myCanvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    dragOverHandler() {

    },
    dragLeaveHandler() {

    },
    dragStartHandler() {
  
    },
    dragEndHandler() {
  
    },
    dropHandler() {
      
    }
  }
})

export default myCanvasSlice.reducer;