import { useSubParams } from '../../hooks/useSubParams.jsx'
import styled from 'styled-components'
import { Checkbox } from '../../components/Checkbox/Checkbox.jsx'
// import { useIsMovies, useType } from "../../hooks/useRouter.jsx"
import { memo } from 'react'
import PropTypes from 'prop-types'
import {
	GENRES_MOVIES_IDS,
	GENRES_MOVIES_OBJECT,
	GENRES_SERIALS_IDS,
	GENRES_SERIALS_OBJECT,
} from '../../constants/genres.js'

const GenreItem = styled.li`
	margin-top: 12px;
`

export const Genres = () => {
	const { hasSubParam, setSubParam, deleteSubParam } = useSubParams('genres')

	return (
		<GenresList
			hasSubParam={hasSubParam}
			setSubParam={setSubParam}
			deleteSubParam={deleteSubParam}
		/>
	)
}

export const GenresList = memo((props) => {
	const { hasSubParam, setSubParam, deleteSubParam } = props

	const isMovies = location.pathname.includes('/movies')

	const onChange = (e) => {
		const value = e.target.value
		if (e.target.checked) {
			setSubParam(value)
			return
		}
		deleteSubParam(value)
	}

	let genresIds
	let genresById

	if (isMovies) {
		genresIds = GENRES_MOVIES_IDS
		genresById = GENRES_MOVIES_OBJECT
	} else {
		genresIds = GENRES_SERIALS_IDS
		genresById = GENRES_SERIALS_OBJECT
	}

	return (
		<>
			{genresIds.map((id) => {
				const checked = hasSubParam(id)
				return (
					<GenreItem key={id}>
						<Checkbox
							label={genresById[id]}
							checked={checked}
							value={id}
							onChange={onChange}
						/>
					</GenreItem>
				)
			})}
		</>
	)
})

GenresList.propTypes = {
	hasSubParam: PropTypes.func.isRequired,
	setSubParam: PropTypes.func.isRequired,
	deleteSubParam: PropTypes.func.isRequired,
}

GenresList.displayName = 'Genres'
