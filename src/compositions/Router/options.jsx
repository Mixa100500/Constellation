export const collections = [
	{ name: 'movies', url: 'movies' },
	{ name: 'serials', url: 'serials' },
	{ name: 'cartoons', url: 'movies?genres=16' },
]

export const filterNames = {
	'movies': 'movies',
	'serials': 'serials',
	'movies?genres=16': 'cartoons',
}

export const collectionsNames = {
	movies: { name: 'movies', url: 'movies' },
	serials: { name: 'serials', url: 'serials' },
	cartoons: { name: 'cartoons', url: 'movie?genres=16' },
	recommendation: { name: 'recommend', url: 'recommendation' }
}

export const allRequestParams = {
	section: null, type: null, genres: null
}