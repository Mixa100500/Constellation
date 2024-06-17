import { configureStore } from '@reduxjs/toolkit'
import { themoviedbApi } from './services/request/themoviedbService'
import pageCollectionReducer, { nameSlicePageCollection } from './reducers/pageCollectionReducer'
import kinoboxPlayerReducer, { nameSliceKinoboxPlayer } from './reducers/kinoboxPlayerReducer'
import currentWatchReducer from './reducers/currentWatch/currentWatchReducer'
// import paginationCollationReducer, { nameSlicePaginationCollection } from './reducers/pageCollectionReducer'

const store = configureStore({
  reducer: {
    currentWatch: currentWatchReducer,
    [nameSlicePageCollection]: pageCollectionReducer,
    [nameSliceKinoboxPlayer]: kinoboxPlayerReducer,
    // [nameSlicePaginationCollection]: paginationCollationReducer,
    [themoviedbApi.reducerPath]: themoviedbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(themoviedbApi.middleware),
})

export default store