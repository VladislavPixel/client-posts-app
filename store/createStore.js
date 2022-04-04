import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import homePageReducer from "./homePage"
import postPageReducer from "./postPage"
import searchReducer from "./searchPosts"

const rootReducer = combineReducers({
	homePage: homePageReducer,
	postPage: postPageReducer,
	search: searchReducer
})

export default function createStore() {
	return configureStore({
		reducer: rootReducer
	})
}

const store = createStore()

const initialStore = () => {
	return store
}

export const wrapper = createWrapper(initialStore)
