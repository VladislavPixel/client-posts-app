const TOKEN_KEY = "tokenForUser"
const ID_KEY = "id"


function setUserAuth({ ID, Token }) {
	localStorage.setItem(TOKEN_KEY, Token)
	localStorage.setItem(ID_KEY, ID)
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
