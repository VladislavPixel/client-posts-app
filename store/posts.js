import { createSlice } from "@reduxjs/toolkit"

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

		},
		postsReceived(state, action) {
			state.entities = action.payload
			state.isLoading = false
		},
		postsRequestField(state) {

		}
	}
})

const { actions, reducer: postsReducer } = postsSlice
const { postsRequested, postsReceived, postsRequestField } = actions

// Actions

export function fetchAllPostsData() {
	return async (dispatch) => {
		const responce = await fetch(process.env.API_URL)
		const postsDataJson = await responce.json()
		console.log(postsDataJson)
	}
}
export function setDataPostFromServer(data) {
	return (dispatch) => {
		dispatch(postsReceived(data))
	}
}

// Selectors

export const getLoaderPosts = () => {
	return (state) => {
		return state.posts.isLoading
	}
}

export default postsReducer