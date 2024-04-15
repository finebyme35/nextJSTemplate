import {
    createAsyncThunk,
    createSlice,
    current,
    PayloadAction,
  } from "@reduxjs/toolkit";
  import IResponseData from "../../types/IResponseData";
import { IProcessMiner } from "types/IProcessMinerData";
  
  export interface ProcessMinerState {
    processMiners?: IProcessMiner[] | null;
  }
  const initialState: ProcessMinerState = {
    processMiners: null,
  } as const;
  export const processMinerSlice = createSlice({
    name: "processMiner",
    initialState,
    reducers: {
      setProcessMinerList: (state: ProcessMinerState, action: PayloadAction<any>) => {
        state.processMiners = action.payload;
  
      },
    },
    // "builder callback API", recommended for TypeScript users
    extraReducers: (builder) => {
    },
  });
  
  export const getHardwareFeaturesState = (state: { processMiner: ProcessMinerState }) => state.processMiner;
  
  export const { setProcessMinerList } = processMinerSlice.actions;
  
  export default processMinerSlice.reducer;
  