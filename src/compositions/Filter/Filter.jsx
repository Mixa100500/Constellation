import { useParams } from 'react-router-dom'
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { collectionsNames } from '../Router/options'
import { useSubParams } from '../../hooks/useSubParams'
import { DropDown } from '../../components/DropDowns/DropDown'
import { Checkbox } from '../../components/Checkbox/Checkbox'
import { resetCountPage } from '../../reducers/pageCollectionReducer'
// import { resetCountPage } from '../../reducers/paginationCollationReducer'

const genresMoviesAll = [
	'28', '12', '16', '35',
  '80', '99', '18', '10751',
	'14', '36', '27', '10402',
	'9648', '10749', '878',
  '10770', '53', '10752',
  '37',
]

const genresMoviesObject = {
	28: 'Action',
	12: 'Adventure',
	16: 'Cartoon',
	35: 'Comedy',
	80: 'Crime',
	99: 'Documentary',
	18: 'Drama',
	10751: 'Family',
	14: 'Fantasy',
	36: 'History',
	27: 'Horror',
	10402: 'Music',
	9648: 'Mystery',
	10749: 'Romance',
	878: 'Science Fiction',
	10770: 'TVMovie',
	53: 'Thriller',
	10752: 'War',
	37: 'Western',
}


const genresSerialAll = [
  10759, 16, 35, 80,
  99, 18, 10751, 10762,
  9648, 10763, 10764, 10765,
  10766, 10767, 10768, 37,
]

const genresSerialsObject = {
  10759: 'Action Adventure',
  16: 'Cartoon',
	35: 'Comedy',
	80: 'Crime',
	99: 'Documentary',
	18: 'Drama',
	10751: 'Family',
  10762: 'kids',
	9648: 'Mystery',
  10763: 'News',
  10764: 'Reality',
  10765: 'Sci-Fi & Fantasy',
  10766: 'Soap',
  10767: 'Talk',
  10768: 'War & Politics',
  37: 'Western',
}

const GenreList = styled.ul`
  display: flex;
  flex-direction: column;
`

const GenreItem = styled.li`
  margin-top: 12px;
`
const Genres = () => {
	const {
    hasSubParam,
    setSubParam,
    deleteSubParam
  } = useSubParams('genres')
  const type = useParams().type
  const dispatch = useDispatch()

  const clearPage = () => {
		dispatch(resetCountPage())
	}

  const onChange = (e) => {
    const value = e.target.value

    clearPage()
    if(e.target.checked) {
      setSubParam(value)
      return
    }
    deleteSubParam(value)
  }
  let genresList
  let genresObject

  if(type === collectionsNames.movies.name) {
    genresList = genresMoviesAll
    genresObject = genresMoviesObject
  } else {
    genresList = genresSerialAll
    genresObject = genresSerialsObject
  }

	return (
		<GenreList>
      {genresList.map(id => {
        return (
          <GenreItem key={id}>
            <Checkbox
              label={genresObject[id]}
              checked={hasSubParam(id)}
              value={id}
              onChange={onChange}
            />
          </GenreItem>
        )
      })}
		</GenreList>
	)
}

const FilterInner = styled.div`
  padding: 16px;
  max-width: 400px;
  border-radius: 6px;
  background-color: var(--filter-color);
`

export const Filter = () => {

  return (
      <FilterInner>
        <DropDown title={'genres'}>
          <Genres />
        </DropDown>
      </FilterInner>
  )
}

export default Filter
