import { useDispatch } from "react-redux"
import { initializePopular } from "../reducers/popularCollectionReducer"
import { initializeSerials } from "../reducers/serialsCollectionReducer"
import { useParams } from "react-router-dom"
import { clearReview, closeMovie, fetchReviews, initializeMedia } from "../reducers/currentWatchReducer"
import { useEffect } from "react"
import { clearDisplayCollection } from "../reducers/displayCollectionReducer"

export const useInitializationHome = () => {
  const dispatch = useDispatch()
	return ()  => {
    dispatch(initializePopular())
	}
}

export const useInitializationWatch = (isMovie) => {
  const dispatch = useDispatch()
  const id = useParams().id
  
	return () => {
    dispatch(clearReview())
    dispatch(initializeMedia(isMovie, id))
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



