import { createSlice } from "@reduxjs/toolkit"
import localStorageService from "../services/localStorage.service"
import authService from "../services/auth.service"

const initialState = {
	isAuth: false,
	id: null,
	error: null
}

const userAuthSlice = createSlice({
	name: "userAuth",
	initialState,
	reducers: {
		userAuthRequested(state) {
			state.isAuth = false
			state.error = null
		},
		userAuthReceived(state, action) {
			state.isAuth = true,
			state.id = action.payload
		},
		userAuthSet(state, action) {
			state.isAuth = true,
			state.id = action.payload
		},
		userAuthRequestField(state, action) {
			state.error = action.payload
		}
	}
})

const { actions, reducer: userAuthReducer } = userAuthSlice
const { userAuthRequested, userAuthReceived, userAuthRequestField, userAuthSet } = actions

// Actions
export function userSignIn(dataUser) {
	return async (dispatch) => {
		dispatch(userAuthRequested())
		try {
			const data = await authService.signIn(dataUser)
			if (data === null) throw "Unauthorized"
			localStorageService.setAuth(data)
			dispatch(userAuthReceived(data.id))
		} catch (err) {
			const { message } = err
			dispatch(userAuthRequestField(message))
		}
	}
}
export function setAuthUser() {
	return async (dispatch) => {
		const idUser = localStorageService.getId()
		dispatch(userAuthSet(idUser))
	}
}

// Selectors
export const getValueIsAuthUser = () => {
	return (state) => {
		return state.userAuth.isAuth
	}
}

export default userAuthReducer
