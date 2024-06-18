import { createSlice } from '@reduxjs/toolkit'
export const nameSliceKinoboxPlayer = 'kinoboxPlayer'
export const selectKinoboxPlayerLoaded = (state) => state[nameSliceKinoboxPlayer].loaded

const initialState = {}

const cartoonSlice = createSlice({
  name: nameSliceKinoboxPlayer,
  initialState,
  reducers: {
  },
})

export const { setLoaded } = cartoonSlice.actions

export default cartoonSlice.reducer