import { createSlice } from '@reduxjs/toolkit'
export const nameSliceKinoboxPlayer = 'kinoboxPlayer'
export const selectKinoboxPlayerLoaded = (state) => state[nameSliceKinoboxPlayer].loaded

const initialState = {
  loaded: false
}

const cartoonSlice = createSlice({
  name: nameSliceKinoboxPlayer,
  initialState,
  reducers: {
    setLoaded: (state) => {
      state.loaded = true
    },
  },
})

export const { setLoaded } = cartoonSlice.actions

export default cartoonSlice.reducer