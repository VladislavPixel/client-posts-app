import { createSlice } from "@reduxjs/toolkit"
import postsService from "../services/posts.service"

const initialState = {
	data: {},
	lengthValue: null,
	searchValuePostsTitle: {
		title: "",
		description: ""
	},
	dataPostsForTitle: [],
	errorPostsForTitle: null,
	dataPostsForTitleLoading: false
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
		},
		postsForTitleSearchRequested(state) {
			state.errorPostsForTitle = null
			state.dataPostsForTitleLoading = true
		},
		postsForTitleReceived(state, action) {
			state.dataPostsForTitle = action.payload
			state.dataPostsForTitleLoading = false
		},
		postsForTitleRequestField(state, action) {
			state.errorPostsForTitle = action.payload
			state.dataPostsForTitleLoading = false
		}
	}
})

const { actions, reducer: postsReducer } = postsSlice
const {
	postsReceived,
	postsLengthValueReceived,
	searchValuePostsTitleReceived,
	postsForTitleSearchRequested,
	postsForTitleReceived,
	postsForTitleRequestField
} = actions

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
export function fetchDataPostsForTitle() {
	return async (dispatch, getState) => {
		dispatch(postsForTitleSearchRequested())
		try {
			const data = await postsService.getDataForTitle(getState().posts.searchValuePostsTitle)
			console.log("ВЫЗВАЛ", data)
			dispatch(postsForTitleReceived(data))
		} catch (err) {
			const { message } = err
			dispatch(postsForTitleRequestField(message))
		}
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
		return state.posts.searchValuePostsTitle.title
	}
}
export const getDataPostsForTitle = () => {
	return (state) => {
		return state.posts.dataPostsForTitle
	}
}
export const getDataPostsForTitleLoading = () => {
	return (state) => {
		return state.posts.dataPostsForTitleLoading
	}
}

export default postsReducer