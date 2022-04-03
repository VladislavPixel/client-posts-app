import { createSlice } from "@reduxjs/toolkit"
import postsService from "../services/posts.service"

const initialState = {
	value: ""
}

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearchValue(state, action) {
			state.value = action.payload
		}
	}
})

const { actions, reducer: searchReducer } = searchSlice
const { setSearchValue } = actions

// Actions
export function setSearchValuePosts(newValue) {
	return (dispatch) => {
		console.log(newValue)
		dispatch(setSearchValue(newValue))
	}
}

// Selectors
export const getSearchValuePosts = () => {
	return (state) => {
		return state.search.value
	}
}

export default searchReducer