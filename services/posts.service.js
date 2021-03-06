import httpService from "./http.service"

const POSTS_END_POINT = "posts/"

const postsService = {
	getPostsByPage: async (idPostsPage) => {
		const { data } = await httpService.get(POSTS_END_POINT + idPostsPage)
		return data
	},
	getAllLength: async () => {
		const { data } = await httpService.get(POSTS_END_POINT)
		return data
	},
	getDataForSearch: async (body) => {
		const { data } = await httpService.post(`${POSTS_END_POINT}search`, body)
		return data
	}
}

export default postsService
