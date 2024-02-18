import { useDispatch } from "react-redux"
import { initializePopular } from "../reducers/popularCollectionReducer"
import { initializeSerials } from "../reducers/serialsCollectionReducer"
import { initializeMovies } from "../reducers/filmCollectionReducer"
import { initializeCartoon } from "../reducers/сartoonCollectionReducer"
import { useParams } from "react-router-dom"
import { closeMovie, fetchReviews, initializeMedia } from "../reducers/currentWatchReducer"
import { useEffect } from "react"
import { clearDisplayCollection } from "../reducers/displayCollectionReducer"

export const useInitializationHome = () => {
  const dispatch = useDispatch()
	return ()  => {
    dispatch(initializePopular())
		dispatch(initializeSerials())
    dispatch(initializeMovies())
    dispatch(initializeCartoon())
	}
}

export const useInitializationWatch = (IsMovie) => {
  const dispatch = useDispatch()
  const id = useParams().id
  
	return () => {
    dispatch(initializeMedia(IsMovie, id))
    dispatch(fetchReviews(IsMovie, id))
	}
}

export const useClearWhenExitWath = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch(closeMovie())
    }
  }, []);
}

export const useClearWhenExitCollection = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch(clearDisplayCollection())
    }
  }, []);
}



