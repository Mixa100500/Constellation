import { createSlice } from '@reduxjs/toolkit'
import { rootReducer } from '../rootReducer.jsx'

const initialState = {
  loaded: false
}

export const playerSlice = createSlice({
  name: 'player',
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

rootReducer.inject(playerSlice)

export const { setLoaded } = playerSlice.actions

export const { selectPlayerLoaded } = playerSlice.selectors