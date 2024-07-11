import { configureStore } from '@reduxjs/toolkit'
import { themoviedbApi } from '../services/request/themoviedbService.jsx'
import { rootReducer } from './rootReducer.jsx'

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(themoviedbApi.middleware),
})