import { useParams, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import styled, { css } from "styled-components"
import downSvg from "../../images/down.svg"
import { useDispatch } from "react-redux"
import { resetPage } from '../../reducers/pageCollectionReducer'
import { collectionsNames } from '../Router/options'

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

const useSubParams = (param) => {
  const [searchParams, setSearchParams] = useSearchParams()

  let paramString = searchParams.get(param) || ''
  let paramArray = paramString.split(',')
	const subParams = new Set(paramArray)

  const hasSubParam = (subParam) => {
    return subParams.has(subParam)
  }

  const setSubParam = (subParam) => {
    let newGenre = subParam
    if(paramString) {
      newGenre = paramString + ',' + subParam
    }

    setSearchParams(searchParams => {
      searchParams.set(param, newGenre)
      return searchParams
    })
  }

  const deleteSubParam = (subParam) => {
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
  }

  return {
    hasSubParam,
    deleteSubParam,
    setSubParam
  }
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
		dispatch(resetPage())
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

// const MovieGenres = () => {
//   const {
//     hasSubParam,
//     setSubParam,
//     deleteSubParam
//   } = useSubParams('genres')
//   const dispatch = useDispatch()

//   const clearPage = () => {
// 		dispatch(resetPage())
// 	}

//   const onChange = (e) => {
//     const value = e.target.value

//     clearPage()
//     if(e.target.checked) {
//       setSubParam(value)
//       return
//     }
//     deleteSubParam(value)
//   }

//   return (
//     <>
//       {genresMoviesAll.map(id => {
//         return (
//           <GenreItem key={id}>
//             <Checkbox
//               label={genresObjMovies[id]}
//               checked={hasSubParam(id)}
//               value={id}
//               onChange={onChange}
//             />
//           </GenreItem>
//         )
//       })}
//     </>
//   )
// }

const CheckboxContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CheckboxLabel = styled.label`
  display: flex;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
`

const Checkbox = ({ label, checked, value, onChange }) => {
	const [isActive, setIsActive] = useState(checked)

  const innerOnChange = (e) => {
    onChange(e)
    setIsActive(prev => !prev)
  }

	return (
      <CheckboxContent>
        <CheckboxLabel htmlFor={label}>
          {label}
          <input
            onChange={innerOnChange}
            id={label}
            value={value}
            type='checkbox'
            checked={isActive}
          />
        </CheckboxLabel>
      </CheckboxContent>
	)
}

const DropdownWrapper = styled.div`
  position: relative;
`

const DropdownHeader = styled.button`
  height: 56px;
  font: inherit;
  color: white;
  width: 100%;
  border: 0;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: var(--color-second);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &:hover {
    ${(props) => !props.$isActive && css`
      background-color: var(--color-second-hover);
    `}
  }

  ${(props) => props.$isActive && css`
    background-color: var(--color-second-inactive);
  `}
`

const FilterDropdownContent = styled.div`
  position: absolute;
  margin-top: 4px;
  width: 100%;
`
const FilterDropdownInner = styled.div`
  padding: 16px;
  padding-top: 0;
  background: var(--color-second);
`

const ArrowImg = styled.img`
  width: 15px;
  ${(props) => props.$isActive && css`
      rotate: 180deg;
  `}
`

const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <DropdownWrapper>
      <DropdownHeader onClick={toggle} $isActive={isOpen}>
        <div>
          {props.title}
        </div>
        <ArrowImg src={downSvg} alt="downSvg" $isActive={isOpen}/>
      </DropdownHeader>
      {
      isOpen &&
        <FilterDropdownContent>
          <FilterDropdownInner>
            {props.children}
          </FilterDropdownInner>
        </FilterDropdownContent>
      }
    </DropdownWrapper>
  )
}

const FilterWrapper = styled.div`
`
const FilterInner = styled.div`
  padding: 16px;
  max-width: 400px;
  border-radius: 6px;
  background-color: var(--filter-color);
`

export const Filter = () => {

  return (
    <FilterWrapper>
      <FilterInner>
        <DropDown title={'genres'}>
          <Genres />
        </DropDown>
      </FilterInner>
    </FilterWrapper>
  )
}

export default Filter
