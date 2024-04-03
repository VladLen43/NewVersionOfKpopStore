import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { clotherSliceItem } from "./types";

export const fetchClother = createAsyncThunk(
    'users/fetchClotherStatus', async ({sortBy,src,order,category, page}:clotherSliceItem) => {
        const { data } = await  axios.get<clotherSliceItem[]>(
    `https://651310f58e505cebc2e98800.mockapi.io/items?${category}&page=${page}&limit=8${src}&sortBy=${sortBy}&order=${order}`
        )
      return data as clotherSliceItem[];

    });