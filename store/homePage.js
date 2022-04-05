import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	data: null,
	error: null,
	lengthValue: null
}

const homePageSlice = createSlice({
	name: "homePage",
	initialState,
	reducers: {
		postsReceived(state, action) {
			state.data = action.payload
		},
		postsLengthValueReceived(state, action) {
			state.lengthValue = action.payload
		}
	}
})

const { actions, reducer: homePageReducer } = homePageSlice
const { postsReceived, postsLengthValueReceived } = actions

// Actions
export function setPostsData(data) {
	return async (dispatch) => {
		dispatch(postsReceived(data))
	}
}
export function setLengthValue(data) {
	return async (dispatch) => {
		dispatch(postsLengthValueReceived(data))
	}
}

// Selectors
export const getDataPosts = () => {
	return (state) => {
		return state.homePage.data
	}
}

export default homePageReducer