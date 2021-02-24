import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { WEATHER_API_KEY } from '../../constants'

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async city => {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`)
    return response.data
  },
)

export const counterSlice = createSlice({
    name: 'weather',
    initialState: {
        data: 0,
    },
    reducers: {

    },
    extraReducers: {
      [getWeather.fulfilled]: (state, action) => {
        state.data = action.payload
      }
    }
})

export default counterSlice.reducer