import { combineSlices } from '@reduxjs/toolkit'
import { collectionSlice } from './PageCollection/pageCollectionReducer.jsx'
import { themoviedbApi } from '../services/request/themoviedbService.jsx'

export const rootReducer = combineSlices(collectionSlice, themoviedbApi).withLazyLoadedSlices()