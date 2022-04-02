import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import postsService from "../services/posts.service"

const initialState = {
	entities: [],
	isLoading: true,
	error: null
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
			state.entities = action.payload
			state.isLoading = false
		},
		postsRequestField(state, action) {
			state.error = action.payload
			state.isLoading = false
		}
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			console.log("HYDRATE ПРОЙДЕН")
			state = action.payload.posts
			return state
		}
	}
})

const { actions, reducer: postsReducer } = postsSlice
const { postsRequested, postsReceived, postsRequestField } = actions

// Actions
export function fetchAllPostsData() {
	return async (dispatch) => {
		dispatch(postsRequested())
		try {
			const dataPosts = await postsService.allPosts()
			dispatch(postsReceived(dataPosts))
		} catch (err) {
			const { message } = err
			dispatch(postsRequestField(message))
		}
	}
}

// Selectors
export const getLoaderPosts = () => {
	return (state) => {
		return state.posts.isLoading
	}
}
export const getDataPosts = () => {
	return (state) => {
		return state.posts.entities
	}
}

export default postsReducer