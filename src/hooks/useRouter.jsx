import { useLocation } from "react-router-dom"
import { filterNames } from "../compositions/Router/options.jsx"

export const useType = () => {
  const location = useLocation()
  return location.pathname.slice(9)
}

export const useFullType = () => {
  const location = useLocation()
  return location.pathname.slice(9) + location.search
}

export const useIsMovies = () => {
  const location = useLocation()
  return location.pathname.includes('/movies')
}


export const useTitleByFilter = () => {
  const type = useFullType()
  let title = filterNames[type]
  if(title) {
    return title
  }

  return type.split('?')[0] + ' with filter'
}
