import { useSearchParams } from "react-router-dom"
import { useType } from "./useRouter.jsx"
import { useMemo } from "react"

export const useCollectionParams = () => {
  const [searchParams] = useSearchParams()
  const genres = searchParams.get('genres')
  const type = useType()
  const params = useMemo(
    () => ({type, genres}),
    [type, genres]
  )
  return params
}