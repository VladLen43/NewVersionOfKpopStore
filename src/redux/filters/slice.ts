import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SortSlice, filterSlicestate } from "./types";

const initialState : filterSlicestate = {
    searchValue: '',
    categoryId: 0,
    page: 1,
  sort:{
    name: 'popular',
    property: 'rating'
  }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
   setCategoryId: (state, action: PayloadAction<number>) => {
    state.categoryId = action.payload;
   },
   setSearchValue: (state, action:PayloadAction<string>) => {
    state.searchValue = action.payload;
   },
   setSortType: (state, action:PayloadAction<SortSlice>) => {
   state.sort = action.payload;
  },
  setPageCount: (state, action:PayloadAction<number>) => {
    state.page = action.payload;
   },
   setFilters: (state, action: PayloadAction<filterSlicestate>) => {
    state.page = action.payload.page;
    state.sort = action.payload.sort;
    state.categoryId = action.payload.categoryId;

   }}
})

// Action creators are generated for each case reducer function
export const { setCategoryId, setSortType, setPageCount, setFilters,setSearchValue } = filterSlice.actions

export default filterSlice.reducer