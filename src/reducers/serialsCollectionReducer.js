import { createSlice } from '@reduxjs/toolkit'
import { getSerials } from '../services/request/serials'
import { getYear } from '../helpers/simple'

export const nameSliceSerialCollection = 'serialCollection'

const serialsSlice = createSlice({
  name: nameSliceSerialCollection,
  initialState: {
    serials: [],
    loaded: false,
  },
  reducers: {
    setSerials: (state, { payload }) => {
      const cartoons = payload.map(a => {
        a.year = getYear(a)
        return a
      })
      state.serials = cartoons
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