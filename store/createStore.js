import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import postsReducer from "./posts"

const rootReducer = combineReducers({
	posts: postsReducer
})

export default function createStore() {
	return configureStore({
		reducer: rootReducer
	})
}

export const wrapper = createWrapper(createStore)
