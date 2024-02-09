import { createSlice } from '@reduxjs/toolkit'
import { getSerials } from '../services/request/serials'

export const nameSliceSerialCollection = 'serialCollection'

const serialsSlice = createSlice({
  name: nameSliceSerialCollection,
  initialState: {
    serials: null,
    loaded: false,
  },
  reducers: {
    setSerials: (state, action) => {
      state.serials = action.payload
      state.loaded = true
    },
  },
})

export const initializeSerials = () => {
  return async (dispatch) => {
    const cartoons = await getSerials()
    dispatch(setSerials(cartoons))
  }
}

export const { setSerials } = serialsSlice.actions
export const selectSerialsState = (state) => state[nameSliceSerialCollection].serials
export const selectSerialsLoadingState = (state) => state[nameSliceSerialCollection].loaded
export default serialsSlice.reducer