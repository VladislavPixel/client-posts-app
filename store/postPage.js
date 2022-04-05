import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	currentPost: null
}

const postPageSlice = createSlice({
	name: "postPage",
	initialState,
	reducers: {
		setCurrentPost(state, action) {
			state.currentPost = action.payload
		}
	}
})

const { actions, reducer: postPageReducer } = postPageSlice
const { setCurrentPost } = actions

// Actions
export function setCurrentPostPage(data) {
	return async (dispatch) => {
		dispatch(setCurrentPost(data))
	}
}

// Selectors
export const getDataPost = () => {
	return (state) => {
		return state.postPage.currentPost
	}
}

export default postPageReducer
