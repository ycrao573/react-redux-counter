import { createSlice } from '@reduxjs/toolkit'

// Create a Redux "slice" reducer with createSlice
// - Call createSlice with a string name, an initial state, and named reducer functions
// - Reducer functions may "mutate" the state using Immer
// - Export the generated slice reducer and action creators

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    count2: 0
  },
  reducers: {
    increment: (state) => {
      return {...state,
        count: state.count + 1,}
    },
    decrement: (state) => {
      return {...state,
        count: state.count - 1,}
    },
    increment2: (state) => {
      return {...state,
        count2: state.count2 + 1,}
    },
    decrement2: (state) => {
      return {...state,
        count2: state.count2 - 1,}
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, increment2, decrement2 } = counterSlice.actions

export default counterSlice.reducer