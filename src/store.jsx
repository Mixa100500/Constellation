import { configureStore } from '@reduxjs/toolkit'
import { themoviedbApi } from './services/request/themoviedbService.jsx'
import pageCollectionReducer, { nameSlicePageCollection } from './reducers/pageCollectionReducer.jsx'
import kinoboxPlayerReducer, { nameSliceKinoboxPlayer } from './reducers/kinoboxPlayerReducer.jsx'
import currentWatchReducer from './reducers/CurrentWatch/currentWatchReducer.jsx'
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