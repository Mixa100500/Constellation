import { configureStore } from '@reduxjs/toolkit'
import currentWatchReducer from './reducers/currentWatchReducer'
import { themoviedbApi } from './services/request/themoviedbService'
import pageCollectionReducer, { nameSlicePageCollection } from './reducers/pageCollectionReducer'
import kinoboxPlayerReducer, { nameSliceKinoboxPlayer } from './reducers/kinoboxPlayerReducer'

const store = configureStore({
  reducer: {
    currentWatch: currentWatchReducer,
    [nameSlicePageCollection]: pageCollectionReducer,
    [nameSliceKinoboxPlayer]: kinoboxPlayerReducer,
    [themoviedbApi.reducerPath]: themoviedbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(themoviedbApi.middleware),
})

export default store