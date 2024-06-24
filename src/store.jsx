import { configureStore } from '@reduxjs/toolkit'
import { themoviedbApi } from './services/request/themoviedbService.jsx'
import { playerSlice } from './reducers/kinoboxPlayerReducer.jsx'
import { collectionSlice } from './reducers/pageCollectionReducer.jsx'
import { currentMovieSlice } from './reducers/CurrentWatch/currentWatchReducer.jsx'

const store = configureStore({
  reducer: {
    [currentMovieSlice.reducerPath]: currentMovieSlice.reducer,
    [collectionSlice.reducerPath]: collectionSlice.reducer,
    [playerSlice.reducerPath]: playerSlice.reducer,
    [themoviedbApi.reducerPath]: themoviedbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(themoviedbApi.middleware),
})

export default store