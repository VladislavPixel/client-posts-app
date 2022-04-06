import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	data: {},
	lengthValue: null
}

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postsReceived(state, action) {
			const idPage = action.payload.currentPage
			if (!(idPage in state.data)) {
				state.data[idPage] = action.payload.data
			}
		},
		postsLengthValueReceived(state, action) {
			state.lengthValue = action.payload
		}
	}
})

const { actions, reducer: postsReducer } = postsSlice
const { postsReceived, postsLengthValueReceived } = actions

// Actions
export function setPostsData(data, currentPage) {
	return async (dispatch) => {
		dispatch(postsReceived({ data, currentPage }))
	}
}
export function setLengthValue(data) {
	return async (dispatch) => {
		dispatch(postsLengthValueReceived(data))
	}
}

// Selectors
export const getDataPosts = (idPage) => {
	return (state) => {
		return state.posts.data[idPage]
	}
}
export const getLengthAll = () => {
	return (state) => {
		return state.posts.lengthValue
	}
}

export default postsReducer