import { createSlice } from '@reduxjs/toolkit'
import {
	getCartoonCollection,
	getMovieCollection,
	getSerialCollection,
} from '../services/request/collection'
import { collectionsNames } from '../сompositions/Router'
export const nameSliceDisplayCollection = 'displayCollection'

const initialState = {
	page: 0,
	pages: [],
}

const displayCollectionSlice = createSlice({
	name: [nameSliceDisplayCollection],
	initialState,
	reducers: {
		setDisplayCollection: (state, action) => {
			state.pages.push(action.payload)
			state.page = 1
			return state
		},
		clearDisplayCollection: () => {
			return initialState
		},
		addPageOfCollection: (state, action) => {
			state.pages.push(action.payload)
			state.page++
			return state
		},
	},
})

export const {
	setDisplayCollection,
	clearDisplayCollection,
	addPageOfCollection,
} = displayCollectionSlice.actions

export const initializeCollection = (type) => {
	return async (dispatch) => {
		let pageOfCollection
		let first, second, last
		
		switch (type) {
			case collectionsNames.movies:
				first = await getMovieCollection(1)
				second = await getMovieCollection(2)
				last = await getMovieCollection(3)
				break
			case collectionsNames.serials:
				first = await getSerialCollection(1)
				second = await getSerialCollection(2)
				last = await getSerialCollection(3)
				break
			case collectionsNames.cartoons:
				first = await getCartoonCollection(1)
				second = await getCartoonCollection(2)
				last = await getCartoonCollection(3)
				break
			default:
				return
		}
		pageOfCollection = [...first, ...second, ...last]
		dispatch(setDisplayCollection(pageOfCollection))
	}
}

export const fetchNewPageCollection = (type) => {
	return async (dispatch, getState) => {
		const page = getState()[nameSliceDisplayCollection].page
		let pageOfCollection
		let first, second, last

		switch (type) {
			case collectionsNames.movies:
				first = await getMovieCollection(page * 3 + 1)
				second = await getMovieCollection(page * 3 + 2)
				last = await getMovieCollection(page * 3 + 3)
				break
			case collectionsNames.serials:
				first = await getSerialCollection(page * 3 + 1)
				second = await getSerialCollection(page * 3 + 2)
				last = await getSerialCollection(page * 3 + 3)
				break
			case collectionsNames.cartoons:
				first = await getCartoonCollection(page * 3 + 1)
				second = await getCartoonCollection(page * 3 + 2)
				last = await getCartoonCollection(page * 3 + 3)
				break
			default:
				return
		}
		pageOfCollection = [...first, ...second, ...last]
		dispatch(addPageOfCollection(pageOfCollection))
	}
}

export const selectDisplayCollectionPages = (state) =>
	state[nameSliceDisplayCollection].pages

export default displayCollectionSlice.reducer
