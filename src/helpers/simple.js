export function checkHeight() {
	return (
		window.innerHeight * 1.5 + document.documentElement.scrollTop >
		document.documentElement.offsetHeight
	)
}

export const getGenres = (genres) => {
	return genres.map((genre) => genre.name.split(' & ')[0])
}

export const getYear = (release_date, first_air_date) => {
	const date = release_date ? release_date : first_air_date
	return date.slice(0, 4)
}
