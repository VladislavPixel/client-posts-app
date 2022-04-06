import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	data: {},
	lengthValue: null
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
		postUpdated(state, action) {
			const groupArray = state.data[action.payload.post.group]
			const newArray = groupArray.map(item => {
				if (item.id === action.payload.post.id) {
					return { ...item, description: action.payload.newDescription }
				}
				return item
			})
			state.data[action.payload.post.group] = newArray
		}
	}
})

const { actions, reducer: postsReducer } = postsSlice
const { postsReceived, postsLengthValueReceived, postUpdated } = actions

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
export function updateElementPost(post, newDescription) {
	return (dispatch) => {
		dispatch(postUpdated({ post, newDescription }))
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

export default postsReducer
