const TOKEN_KEY = "tokenForUser"
const ID_KEY = "id"

function setUserAuth({ id, token }) {
	localStorage.setItem(TOKEN_KEY, token)
	localStorage.setItem(ID_KEY, id)
}

function getCurrentToken() {
	return localStorage.getItem(TOKEN_KEY)
}
function getIdUser() {
	return localStorage.getItem(ID_KEY)
}

const localStorageService = {
	setAuth: setUserAuth,
	getToken: getCurrentToken,
	getId: getIdUser
}

export default localStorageService
