import { configureStore } from '@reduxjs/toolkit'
import { data } from '../features/counter/counterSlice'
import { postslice } from '../features/counter/postSlice'

export const store = configureStore({
  reducer: {
    counters: data,
    post:postslice
  },
})