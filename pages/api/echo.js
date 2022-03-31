import posts from "../../fakeDb/db"

const echoPosts = (req, res) => {
	res.statusCode = 200
	res.setHeader("Content-type", "application/json")
	if (req.url === "/api/echo") {
		setTimeout(() => {
			res.status(200).send(posts)
		}, 1000)
		return
	}
	res.status(200).send([])
}

export default echoPosts
