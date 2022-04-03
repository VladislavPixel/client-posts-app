import { createSlice, createAction } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import postsService from "../services/posts.service"

const initialState = {
	data: {},
	isLoading: true,
	error: null,
	lengthPosts: null
}

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postsRequested(state) {
			state.error = null
			state.isLoading = true
		},
		postsReceived(state, action) {
			const idPage = action.payload.idPage
			if (!(idPage in state.data)) {
				state.data[idPage] = action.payload.entities
				state.isLoading = false
			}
		},
		postsRequestField(state, action) {
			state.error = action.payload
			state.isLoading = false
		},
		postsLengthValueReceived(state, action) {
			state.lengthPosts = action.payload
		}
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			console.log("HYDRATE ПРОЙДЕН!")
			if (state.isLoading) {
				state = action.payload.posts
				return state
			}
			return state
		}
	}
})

const { actions, reducer: postsReducer } = postsSlice
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
			dispatch(postsReceived({entities: dataPosts, idPage: id}))
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
			const data = await fetch("http://localhost:8081/posts")
			const jsonData = await data.json()
			dispatch(postsLengthValueReceived(jsonData))
		} catch (err) {
			const { message } = err
			dispatch(setPostsLengthRequestField(message))
		}
	}
}

// Selectors
export const getLoaderPosts = () => {
	return (state) => {
		return state.posts.isLoading
	}
}
export const getDataPosts = (currentPagin) => {
	return (state) => {
		return state.posts.data[currentPagin]
	}
}
export const getLengthPostsValue = () => {
	return (state) => {
		return state.posts.lengthPosts
	}
}

export default postsReducer