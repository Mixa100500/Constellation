import { useWatchParams } from "."

export const useLazyByType = ({movieContent, serialContent, loadingContent, isLoaded }) => {
  const { isMovie } = useWatchParams()

	if(!isLoaded) {
    return loadingContent()
	}
	
	if(isMovie) {
		return movieContent()
	}
	
  return serialContent()
}