import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TogglerState } from "../../models/reducers/TogglerState";

const initialState: TogglerState = {
  isRuntime: false
}

export const togglerSlice = createSlice({
  name: 'toggler',
  initialState,
  reducers: {
    revert(state, action: PayloadAction<string>) {
      if (
        (action.payload === 'Runtime' && !state.isRuntime) 
        || 
        (action.payload === 'Constructor' && state.isRuntime)) {
        state.isRuntime = !state.isRuntime
      }
    }
  }
})

export default togglerSlice.reducer;