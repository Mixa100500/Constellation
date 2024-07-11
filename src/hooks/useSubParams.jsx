import { useCallback } from "react"
import { useSearchParams } from "react-router-dom"

export const useSubParams = (param) => {
  const [, setSearchParams] = useSearchParams()
  const searchParams = new URLSearchParams(location.search);
  let paramString = searchParams.get(param) || ''
  let paramArray = paramString.split(',')
	const subParams = new Set(paramArray)

  const hasSubParam = useCallback((subParam) => {
    return subParams.has(subParam)
  }, [])

  const setSubParam = useCallback((subParam) => {
    const searchParams = new URLSearchParams(location.search);
    let paramString = searchParams.get(param) || ''

    let newGenre = subParam
    if(paramString) {
      newGenre = paramString + ',' + subParam
    }

    setSearchParams(searchParams => {
      searchParams.set(param, newGenre)
      return searchParams
    })
  }, [])

  const deleteSubParam = useCallback((subParam) => {
    const searchParams = new URLSearchParams(location.search)
    let paramString = searchParams.get(param) || ''
    let paramArray = paramString.split(',')
    const subParams = new Set(paramArray)

    const isOne = paramArray.length === 1
    const isFirst = paramArray[0] === subParam

    if(isOne && isFirst) {
      setSearchParams(searchParams => {
        searchParams.delete(param)
      })
      return
    }
    subParams.delete(subParam)
    const newParam = Array.from(subParams).join(',')
  
    setSearchParams(searchParams => {
      searchParams.set(param, newParam)
      return searchParams
    })
  }, [])

  return {
    hasSubParam,
    deleteSubParam,
    setSubParam
  }
}