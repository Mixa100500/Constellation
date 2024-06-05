import { collectionsNames } from "../compositions/Router/options"

export function checkHeight() {
	return (
		window.innerHeight * 1.5 + document.documentElement.scrollTop >
		document.documentElement.offsetHeight
	)
}

export const getGenres = (genres) => {
	return genres.map((genre) => genre.name.split(' & ')[0])
}

export const getYear = ({ release_date, first_air_date }) => {
	const date = release_date || first_air_date
	return date && date.slice(0, 4)
}

export const collectionExtractor = (list, isPopular) => {
	return list.map(data => {
		const type = data.title ? collectionsNames.movies.name : collectionsNames.serials.name

		const collection = {
			poster_path: data.poster_path,
			title: data.title,
			type,
			name: data.original_name || data.original_title,
			year: getYear(data),
			id: data.id,
		}
		if(isPopular) {
			collection.backdrop_path = data.backdrop_path
		}

		return collection
	}
)
}

export const createArray = (length) => Array.from({length}, (v, i) => i + 1)
