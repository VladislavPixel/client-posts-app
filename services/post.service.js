import httpService from "./http.service"

const POST_AND_POINT = "post/"

const postService = {
	getPostById: async (id) => {
		const { data } = await httpService.post(POST_AND_POINT + id)
		return data
	}
}

export default postService
