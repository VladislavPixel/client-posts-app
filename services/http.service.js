import axios from "axios"

const http = axios.create({
	baseURL: process.env.API_URL
})

http.interceptors.request.use(async(config) => {
	return config
}, (error) => {
	return Promise.reject(error)
})

http.interceptors.response.use(
	(res) => {
		return res
	},
	(error) => {
		return Promise.reject(error)
	}
)

const httpService = {
	get: http.get,
	post: http.post,
	put: http.put,
	delete: http.delete,
	patch: http.patch,
	options: http.options
}

export default httpService