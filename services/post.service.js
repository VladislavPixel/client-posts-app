import httpService from "./http.service"

const POST_AND_POINT = "post/"

const postService = {
	getPostById: async (body) => {
		const { data } = await httpService.post(POST_AND_POINT, body)
		return data
	}
}

export default postService