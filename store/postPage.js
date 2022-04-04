import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import postService from "../services/post.service"

const initialState = {
	data: null,
	currentPost: null,
	isLoadingPost: true,
	error: null
}

const postPageSlice = createSlice({
	name: "postPage",
	initialState,
	reducers: {
		postPageRequested(state) {
			state.isLoadingPost = true
			state.error = null
		},
		setPostPage(state, action) {
			state.currentPost = action.payload
			state.isLoadingPost = false
		},
		postPageRequestField(state, action) {
			state.error = action.payload
			state.isLoadingPost = false
		}
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			if (!action.payload.homePage.data) return state
			state.data = action.payload.homePage.data
			state = { ...state, ...action.payload.homePage }
		}
	}
})

const { actions, reducer: postPageReducer } = postPageSlice
const { setPostPage, postPageRequested, postPageRequestField } = actions

// Actions
export function fetchCurrentPost(id) {
	return async (dispatch, state) => {
		dispatch(postPageRequested())
		const postForRequest = state().postPage.data.find(item => item.id === id)
		try {
			const postData = await postService.getPostByPayload(postForRequest)
			console.log(postData)
		} catch (err) {
			const { message } = err
			dispatch(postPageRequestField(message))
		}
	}
}

// Selectors 
export const getDataPost = () => {
	return (state) => {
		return state.postPage.currentPost
	}
}
export const getIsLoadingPost = () => {
	return (state) => {
		return state.postPage.isLoadingPost
	}
}

export default postPageReducer
