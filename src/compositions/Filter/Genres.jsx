import { useSubParams } from "../../hooks/useSubParams.jsx"
import styled from "styled-components"
import { Checkbox } from "../../components/Checkbox/Checkbox.jsx"
// import { useIsMovies, useType } from "../../hooks/useRouter.jsx"
import { memo, } from "react"
import PropTypes from 'prop-types';
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

const GenreItem = styled.li`
  margin-top: 12px;
`

export const Genres = () => {

  const {
    hasSubParam,
    setSubParam,
    deleteSubParam
  } = useSubParams('genres')

  return <GenresList
    hasSubParam={hasSubParam}
    setSubParam={setSubParam}
    deleteSubParam={deleteSubParam}
  />
}

export const GenresList = memo((props) => {
  const {
    hasSubParam,
    setSubParam,
    deleteSubParam
  } = props

  const isMovies = location.pathname.includes('/movies')
  
  const onChange = (e) => {
    const value = e.target.value
    if(e.target.checked) {
      setSubParam(value)
      return
    }
    deleteSubParam(value)
  }

  let genresList
  let genresObject

  if(isMovies) {
    genresList = genresMoviesAll
    genresObject = genresMoviesObject
  } else {
    genresList = genresSerialAll
    genresObject = genresSerialsObject
  }

	return <>
    {genresList.map(id => {
      const checked = hasSubParam(id)
      return (
        <GenreItem key={id}>
          <Checkbox
            label={genresObject[id]}
            checked={checked}
            value={id}
            onChange={onChange}
          />
        </GenreItem>
      )
    })}
  </>
})

GenresList.propTypes = {
  hasSubParam: PropTypes.func.isRequired,
  setSubParam: PropTypes.func.isRequired,
  deleteSubParam: PropTypes.func.isRequired
};

GenresList.displayName = 'Genres'