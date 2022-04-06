import { configureStore, combineReducers } from "@reduxjs/toolkit"
import postsReducer from "./posts"

const rootReducer = combineReducers({
	homePage: postsReducer
})

export default function createStore() {
	return configureStore({
		reducer: rootReducer
	})
}
