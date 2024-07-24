import { combineSlices } from '@reduxjs/toolkit'
import { collectionSlice } from './PageCollection/pageCollectionReducer.jsx'
import { theMovieApiBase } from './Api/baseApi.js'

export const rootReducer = combineSlices(collectionSlice, theMovieApiBase).withLazyLoadedSlices()