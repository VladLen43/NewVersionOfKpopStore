import { configureStore } from '@reduxjs/toolkit'
import filter from './filters/slice'
import cart from './cart/slice'
import clother from './clotherItems/slice'
import { useDispatch } from 'react-redux'
import users from './userInfo/slice'


export const store = configureStore({
  reducer: {
    filter,
    cart,
    clother,
    users,
  },
})

type FuncType = typeof store.getState;
export type RootState = ReturnType<FuncType>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();