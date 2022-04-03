import httpService from "./http.service"

const AUTH_END_POINT = "login"

const authService = {
	signIn: async (payload) => {
		const { data } = await httpService.post(AUTH_END_POINT, payload)
		return data
	}
}

export default authService
