import httpService from "./http.service"

const POSTS_END_POINT = "posts/"

const postsService = {
	allPosts: async () => {
		const { data } = await httpService.get(POSTS_END_POINT)
		return data
	}
}

export default postsService
