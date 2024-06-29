import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    // put the intial value of the state
    initialState: {
        value: 0,
        },
        // actions
        reducers: {
            increment: (state) => {
                // logic
                state.value += 1
                },
            decrement:(state)=>{
                state.value -= 1
            },
            reset:(state)=>{
                state.value = 0
            },
            rangeChange:(state,action)=>{
                state.value += action.payload
            }
        }
})

// actions are for the components
export const {increment, decrement, reset,rangeChange} = counterSlice.actions

// reducer is for store
export default counterSlice.reducer

