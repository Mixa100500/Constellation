const WATCH_DATA_KEY = 'ConstellationData'

const saveWatchData = (mediaInfo) => {
	localStorage.setItem(WATCH_DATA_KEY, JSON.stringify(mediaInfo))
}

const loadWatchData = () => {
	return JSON.parse(window.localStorage.getItem(WATCH_DATA_KEY))
}

const removeWatchData = () => {
	localStorage.removeItem(WATCH_DATA_KEY)
}

export default {
	saveWatchData,
	loadWatchData,
	removeWatchData,
}
