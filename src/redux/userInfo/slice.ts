import {createSlice,PayloadAction} from '@reduxjs/toolkit';

export type usersSliceType = {
    email:string,
    token:string,
    id:string,
}
const initialState= {
   email:null,
   token:null,
   id:null,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser(state, action : PayloadAction<usersSliceType>) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = '';
            state.token = '';
            state.id = '';
        },
    },
});
export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;