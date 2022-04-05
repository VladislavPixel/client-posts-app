import { createSlice } from "@reduxjs/toolkit"
import localStorageService from "../services/localStorage.service"

const initialState = {
	isAuth: false,
	ID: null,
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
				state.ID = action.payload
		},
		userAuthRequestField(state, action) {
			state.error = action.payload
		}
	}
})

const { actions, reducer: userAuthReducer } = userAuthSlice
const { userAuthRequested, userAuthReceived, userAuthRequestField } = actions

// Actions
export function userSignIn(dataUser) {
	return async (dispatch) => {
		dispatch(userAuthRequested())
		try {
			const response = await fetch(process.env.API_URL + "login", {
				method: "POST",
				body: JSON.stringify(dataUser)
			})
			const jsonData = await response.json()
			localStorageService.setAuth(jsonData)
			dispatch(userAuthReceived(jsonData.ID))
		} catch (err) {
			const { message } = err
			dispatch(userAuthRequestField(message))
		}
	}
}

// Selectors
export const getValueIsAuthUser = () => {
	return (state) => {
		return state.userAuth.isAuth
	}
}

export default userAuthReducer