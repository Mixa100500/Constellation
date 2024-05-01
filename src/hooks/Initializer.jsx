import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { clearReview, initializeMedia } from "../reducers/currentWatchReducer"

export const useInitializationWatch = (isMovie) => {
  const dispatch = useDispatch()
  const id = useParams().id
  
	return () => {
    dispatch(initializeMedia(isMovie, id))
	}
}



