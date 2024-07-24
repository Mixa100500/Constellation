import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URLs } from '../../services/request/URL.js'
import { option } from '../../services/request/options.jsx'

export const theMovieApiBase = createApi({
	reducerPath: 'movieSelectionApi',
	baseQuery: fetchBaseQuery({
		baseUrl: URLs.themoviedbBaseURL,
		prepareHeaders: (headers, { getState }) => {
			headers.set('Accept', 'application/json')
			headers.set('Authorization', option.headers.Authorization)
			// headers.set('Authorization', `Bearer ${getState().auth.token}`);
			return headers;
		}
	}),
	endpoints :() => ({})
})