import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import homePageReducer from "./homePage"
import postPageReducer from "./postPage"
import searchReducer from "./searchPosts"
import userAuthReducer from "./userAuth"

const rootReducer = combineReducers({
	homePage: homePageReducer,
	postPage: postPageReducer,
	search: searchReducer,
	userAuth: userAuthReducer
})

export default function createStore() {
	return configureStore({
		reducer: rootReducer
	})
}
