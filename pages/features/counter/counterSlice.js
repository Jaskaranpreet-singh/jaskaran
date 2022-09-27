import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:0,
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value =10
    },
    decrement: (state) => {
      state.value = 4
    },
    incrementByAmount: (state, action) => {
      state.value = action.payload
    },
  },
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const data=counterSlice.reducer