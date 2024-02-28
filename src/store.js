import { configureStore } from '@reduxjs/toolkit'
import filmCollectionReducer from './reducers/moviesCollectionReducer'
import currentWatchReducer from './reducers/currentWatchReducer'
import serialsCollectionReducer from './reducers/serialsCollectionReducer'
import { nameSliceMovieCollection } from './reducers/moviesCollectionReducer'
import { nameSliceSerialCollection } from './reducers/serialsCollectionReducer'
import displayCollectionReducer, { nameSliceDisplayCollection } from './reducers/displayCollectionReducer'
import cartoonCollectionReducer, { nameSliceCartoonCollection } from './reducers/сartoonCollectionReducer'
import popularcollectionReducer, { nameSlicePopularCollection } from './reducers/popularCollectionReducer'
const store = configureStore({
  reducer: {
    currentWatch: currentWatchReducer,
    [nameSliceDisplayCollection]: displayCollectionReducer,
    [nameSliceMovieCollection]: filmCollectionReducer,
    [nameSliceSerialCollection]: serialsCollectionReducer,
    [nameSliceCartoonCollection]: cartoonCollectionReducer,
    [nameSlicePopularCollection]: popularcollectionReducer,
  },
})

export default store