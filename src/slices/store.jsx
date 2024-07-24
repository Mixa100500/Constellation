import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer.jsx'
import { theMovieApiBase } from './Api/baseApi.js'

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(theMovieApiBase.middleware),
})