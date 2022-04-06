import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	data: {},
	lengthValue: null,
	searchValuePostsTitle: {
		title: "",
		description: ""
	}
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
		},
		searchValuePostsTitleReceived(state, action) {
			const objectConfig = { title: action.payload, description: "" }
			state.searchValuePostsTitle = objectConfig
		}
	}
})

const { actions, reducer: postsReducer } = postsSlice
const { postsReceived, postsLengthValueReceived, searchValuePostsTitleReceived } = actions

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
export function setSearchValuePostsTitle(valueTxt) {
	return (dispatch) => {
		dispatch(searchValuePostsTitleReceived(valueTxt))
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
export const getSearchValuePostsTitle = () => {
	return (state) => {
		return state.posts.searchValuePostsTitle
	}
}

export default postsReducer