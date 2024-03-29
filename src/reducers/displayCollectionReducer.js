import { createSlice } from '@reduxjs/toolkit'
import {
	getCartoonCollection,
	getMovieCollection,
	getSerialCollection,
} from '../services/request/collection'
import { collectionsNames } from '../сompositions/Router'
import { getYear } from '../helpers/simple'
export const nameSliceDisplayCollection = 'displayCollection'

const initialState = {
	pageCount: 0,
	pages: [],
}

const displayCollectionSlice = createSlice({
	name: [nameSliceDisplayCollection],
	initialState,
	reducers: {
		setDisplayCollection: (state, action) => {
			const collection = action.payload.map(a => {
        a.year = getYear(a)
        return a
      })
			state.pages = [collection]
			state.pageCount = 1
			return state
		},
		clearDisplayCollection: () => {
			return initialState
		},
		addPageOfCollection: (state, action) => {
			const collection = action.payload.map(a => {
        a.year = getYear(a)
        return a
      })

			state.pages.push(collection)
			state.pageCount++
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


export const fetchNewPageCollection = ({ type }) => {

	return async (dispatch, getState) => {
		const page = getState()[nameSliceDisplayCollection].pageCount

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
