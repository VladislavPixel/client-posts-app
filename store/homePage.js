import { createSlice, createAction } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import postsService from "../services/posts.service"

const initialState = {
	data: null,
	error: null,
	lengthPosts: null
}

const homePageSlice = createSlice({
	name: "homePage",
	initialState,
	reducers: {
		postsRequested(state) {
			state.error = null
		},
		postsReceived(state, action) {
			state.data = action.payload
		},
		postsRequestField(state, action) {
			state.error = action.payload
		},
		postsLengthValueReceived(state, action) {
			state.lengthPosts = action.payload
		}
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			state = action.payload.homePage
			return state
		}
	}
})

const { actions, reducer: homePageReducer } = homePageSlice
const { postsRequested, postsReceived, postsRequestField, postsLengthValueReceived } = actions

// Additional actions
const setPostsLengthRequested = createAction("posts/setPostsLengthRequested")
const setPostsLengthRequestField = createAction("posts/setPostsLengthRequestField")

// Actions
export function fetchAllPostsData(id) {
	return async (dispatch) => {
		dispatch(postsRequested())
		try {
			const dataPosts = await postsService.getPostsByPage(id)
			dispatch(postsReceived(dataPosts))
		} catch (err) {
			const { message } = err
			dispatch(postsRequestField(message))
		}
	}
}
export function setAllPostsLength() {
	return async (dispatch) => {
		dispatch(setPostsLengthRequested())
		try {
			const responce = await fetch("http://localhost:8081/posts")
			const jsonResponce = await responce.json()
			dispatch(postsLengthValueReceived(jsonResponce))
		} catch (err) {
			const { message } = err
			dispatch(setPostsLengthRequestField(message))
		}
	}
}

// Selectors
export const getDataPosts = () => {
	return (state) => {
		return state.homePage.data
	}
}
export const getLengthPostsValue = () => {
	return (state) => {
		return state.homePage.lengthPosts
	}
}

export default homePageReducer