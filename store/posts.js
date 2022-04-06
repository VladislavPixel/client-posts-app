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
	return (dispatch) => {
		dispatch(postsReceived({ data, currentPage }))
	}
}
export function setLengthValue(data) {
	return (dispatch) => {
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
export const getKeysArrayData = () => {
	return (state) => {
		const arrKeys = Object?.keys(state.posts?.data)
		return arrKeys
	}
}
export const getAllData = () => {
	return (state) => {
		return state.posts.data
	}
}

export default postsReducer
