import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import postsReducer from "./posts"
import searchReducer from "./searchPosts"

const rootReducer = combineReducers({
	posts: postsReducer,
	search: searchReducer
})

export default function createStore() {
	return configureStore({
		reducer: rootReducer
	})
}

export const wrapper = createWrapper(createStore)
