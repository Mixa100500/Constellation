export const selectOpenedMovieId = (state) => state.currentWatch.openedMovie.info.id
export const selectOpenedMovieInfo = (state) => state.currentWatch.openedMovie.info
export const selectOpenedMovieImdbId = (state) => state.currentWatch.openedMovie.info.imdb_id
export const selectOpenedMovieLoaded = (state) => state.currentWatch.openedMovie.loaded
export const selectOpenedMovieReviewList = (state) => state.currentWatch.reviews.list
export const selectOpenedMovieReviewLoaded = (state) => state.currentWatch.reviews.loaded