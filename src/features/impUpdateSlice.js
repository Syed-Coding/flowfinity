import { createSlice } from "@reduxjs/toolkit";
import { importUpadtes } from "../data";

const initialState = importUpadtes;

const impUpdateSlice = createSlice({
  name: "impUpdateSlice",
  initialState,
  reducers: {
    deleteUpdates: (state, action) => {
      return (state = state.filter((state) => state.id !== action.payload.id));
    },
    clearAllUpdates: () => {
      return [];
    },
    createUpdate: (state, action) => {
      state.unshift(action.payload);
    },
    UpdateRead: (state, action) => {
      return (state = state.map((data) => {
        if (data.id === action.payload) {
          return { ...data, isRead: true };
        } else {
          return data;
        }
      }));
    },
    UpdateAllMarkRead:(state)=>{
        return state.map((updates)=>{
         if(updates.isRead === false){
          return {...updates,isRead:true}
         }else{
          return updates
         }
        })
    
    }
  },
});

export const { deleteUpdates, createUpdate, clearAllUpdates,UpdateAllMarkRead ,UpdateRead} =
  impUpdateSlice.actions;
export default impUpdateSlice.reducer;
