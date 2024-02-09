import { createSlice } from '@reduxjs/toolkit'
import { getCartoons } from '../services/request/cartoon'

export const nameSliceCartoonCollection = 'cartoonCollection'

const cartoonSlice = createSlice({
  name: nameSliceCartoonCollection,
  initialState: {
    cartoon: null,
    loaded: false,
  },
  reducers: {
    setCartoons: (state, action) => {
      state.cartoon = action.payload
      state.loaded = true
    },
  },
})

export const { setCartoons } = cartoonSlice.actions

export const initializeCartoon = () => {
  return async (dispatch) => {
    const cartoons = await getCartoons()
    dispatch(setCartoons(cartoons))
  }
}

export const selectCartoonsState = (state) => state[nameSliceCartoonCollection].cartoon
export const selectCartoonsLoadingState = (state) => state[nameSliceCartoonCollection].loaded
export default cartoonSlice.reducer