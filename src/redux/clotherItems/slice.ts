import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ClotherSliceState, Status, clotherSliceItem } from "./types";
import { fetchClother } from "./actions";

const initialState : ClotherSliceState = {
    items: [],
    status: Status.LOADING,
   }
 
 export const clotherSlice = createSlice({
   name: 'clother',
   initialState,
   reducers: {
    setItems: (state, action : PayloadAction <clotherSliceItem[]>) =>  {
     state.items = action.payload;
    },
 },
 extraReducers: (builder) => {
   builder.addCase(fetchClother.pending, (state, action) => {
     state.status = Status.LOADING;
                 state.items = [];
                 console.log('Идет отправка');
   })
   builder.addCase(fetchClother.rejected, (state, action) => {
     state.status = Status.ERROR;
     state.items = [];
       console.log('Была ошибка');
   })
   builder.addCase(fetchClother.fulfilled, (state, action) => {
     state.items = (action.payload);
     state.status = Status.SUCCESS;
     console.log('Все нормально');
     
   
 })
 }})
 
 
 // Action creators are generated for each case reducer function
 export const {setItems} = clotherSlice.actions
 
 
 export default clotherSlice.reducer