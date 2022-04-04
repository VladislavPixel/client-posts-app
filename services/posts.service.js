import httpService from "./http.service"

const POSTS_END_POINT = "posts/"

const postsService = {
	getPostsByPage: async (idPostsPage) => {
		const { data } = await httpService.get(POSTS_END_POINT + idPostsPage)
		return data
	},
	searchPosts: async (body) => {
		const { data } = await httpService.post(POSTS_END_POINT + "search", body)
		return data
	},
	getAllLength: async () => {
		const { data } = await httpService.get(POSTS_END_POINT + "length/")
		return data
	}
}

export default postsService
