import { useSearchParams } from "react-router-dom"

export const useCollectionParams = () => {
  const [searchParams] = useSearchParams()
  const genres = searchParams.get('genres')
  const type = searchParams.get('type')
  return {type, genres}
}