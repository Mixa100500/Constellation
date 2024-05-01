import { createSlice } from '@reduxjs/toolkit'

export const nameSlicePageCollection = 'pageCollection'
const initialState = [1]

const cartoonSlice = createSlice({
  name: nameSlicePageCollection,
  initialState,
  reducers: {
    addPage: (state) => {
      state.push(state.length + 1)
    },
    resetPage: () => {
      return initialState
    }
  },
})

export const { addPage, resetPage } = cartoonSlice.actions

export const selectPageCollection = (state) => state[nameSlicePageCollection]
export default cartoonSlice.reducer