import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users:'',
  user:null,
  userType:null,
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        registerSuccess:(state,action) => {
            state.users = action.payload;
        }
    }
})


export const { registerSuccess} = authSlice.actions;

export default authSlice.reducer