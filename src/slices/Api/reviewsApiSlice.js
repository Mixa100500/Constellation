import { getType } from '../../helpers/url.jsx'
import { theMovieApiBase } from './baseApi.js'

const params = 'language=en-US&page=1'

const reviewsApi = theMovieApiBase.injectEndpoints({
	endpoints: (builder) => ({
		getReviews: builder.query({
			query: ({ type, id }) => `/${getType(type)}/${id}/reviews?${params}`,
			transformResponse(response) {
				return response.results
			}
		})
	})
})


export const {
	useLazyGetReviewsQuery,
} = reviewsApi