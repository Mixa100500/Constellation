import { createSlice } from '@reduxjs/toolkit'
export const nameSliceKinoboxPlayer = 'kinoboxPlayer'

const initialState = {
  loaded: false
}

export const playerSlice = createSlice({
  name: 'kinoboxPlayer',
  initialState,
  reducers: {
    setLoaded: (state) => {
      state.loaded = true
    },
  },
  selectors: {
    selectPlayerLoaded: (sliceState) => sliceState.loaded
  }
})

export const { setLoaded } = playerSlice.actions

export const { selectPlayerLoaded } = playerSlice.selectors