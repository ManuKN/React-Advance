import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name:"user",
    initialState:{
        user:'',
        isAuthenticated:false,
        username:''
    },
    reducers:{
        Name(state , action){
         state.username = action.payload
        },
        login(state , action)
        {
            console.log("Data Coming")
         state.user = action.payload
         state.isAuthenticated = true
        },
        logout(state)
        {
            state.isAuthenticated = false;
            state.user = null
        }
    }
})
export const {login  , logout , Name} = AppSlice.actions;
export default AppSlice.reducer;