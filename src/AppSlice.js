import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const CurrencyConverter = createAsyncThunk('user/currencyconverter',
      async function({amount1 , currency1}){
        console.log('Iam in Thunk')
        const result = await fetch(`https://api.frankfurter.app/latest?amount=${amount1}&from=${currency1}&to=USD`)
        const data = await result.json()
        const converted = data.rates.USD
        console.log(converted)
        return {converted}
      })

const AppSlice = createSlice({
    name:"user",
    initialState:{
        user:'',
        isAuthenticated:false,
        username:'',
        amount:'',
        status:'idle',
        currency:'',
        error:''
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
        },
        extraReducers:(builder) =>
        builder.addCase(CurrencyConverter.pending , (state ) =>{state.status = 'loading';})
               .addCase(CurrencyConverter.fulfilled , (state , action) => {console.log("Data Coming")
                                                                           state.amount.push(action.payload.converted);
                                                                           state.status = 'idle';})
               .addCase(CurrencyConverter.rejected , (state , action) => {state.status = 'error';
                                                                          state.error = action.error.message;})                                                           
    }
})
export const {login  , logout , Name } = AppSlice.actions;
export {CurrencyConverter}
export default AppSlice.reducer;