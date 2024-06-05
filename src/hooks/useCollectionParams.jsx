import { useParams, useSearchParams } from "react-router-dom"

export const useCollectionParams = () => {
  const [searchParams] = useSearchParams()
  const { type } = useParams()
  const genres = searchParams.get('genres')
  return {type, genres}
}