import { useSearchParams } from "react-router-dom"
import { useType } from "./useRouter.jsx"

export const useCollectionParams = () => {
  const [searchParams] = useSearchParams()
  const genres = searchParams.get('genres')
  const type = useType()
  return {type, genres}
}