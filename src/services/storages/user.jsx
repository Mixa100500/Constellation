const USER_KEY = 'ConstellationUser'

const saveUser = (user) => {
	localStorage.setItem(USER_KEY, JSON.stringify(user))
}

const loadUser = () => {
	return JSON.parse(window.localStorage.getItem(USER_KEY))
}

const removeUser = () => {
	localStorage.removeItem(USER_KEY)
}

export default {
	saveUser,
	loadUser,
	removeUser,
}
