const TOKEN_KEY = "tokenForUser"
const ID_KEY = "id"


function setUserAuth({ ID, Token }) {
	localStorage.setItem(TOKEN_KEY, Token)
	localStorage.setItem(ID_KEY, ID)
}

const localStorageService = {
	setAuth: setUserAuth
}

export default localStorageService
