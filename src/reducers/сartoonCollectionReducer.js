import { createSlice } from '@reduxjs/toolkit'
import { getCartoons } from '../services/request/cartoon'
import { getYear } from '../helpers/simple'

export const nameSliceCartoonCollection = 'cartoonCollection'

const cartoonSlice = createSlice({
  name: nameSliceCartoonCollection,
  initialState: {
    cartoons: [],
    loaded: false,
  },
  reducers: {
    setCartoons: (state, { payload }) => {
      const cartoons = payload.map(a => {
        a.year = getYear(a)
        return a
      })
      state.cartoons = cartoons
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

export const selectCartoonsState = (state) => state[nameSliceCartoonCollection].cartoons
export const selectCartoonsLoadingState = (state) => state[nameSliceCartoonCollection].loaded
export default cartoonSlice.reducer