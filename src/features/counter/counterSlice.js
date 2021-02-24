import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const someAction = createAsyncThunk(
  'test/someAction',
  async type => {
    const response = await axios.get(`/api/${type}`)
    return response.data
  },
)

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        someProperty: null
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
    extraReducers: {
      [someAction.fulfilled]: (state, action) => {
        state.someProperty = action.payload
      },
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer