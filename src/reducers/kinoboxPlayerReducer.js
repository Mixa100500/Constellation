import { createSlice } from '@reduxjs/toolkit'
export const nameSliceKinoboxPlayer = 'kinoboxPlayer'

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

export const selectKinoboxPlayerLoaded = (state) => state[nameSliceKinoboxPlayer].loaded
export default cartoonSlice.reducer