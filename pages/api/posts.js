import posts from "../../fakeDb/db"

const Posts = (req, res) => {
	res.statusCode = 200
	res.setHeader("Content-type", "application/json")
	if (req.url === "/api/posts") {
		setTimeout(() => {
			res.status(200).send(posts)
		}, 1000)
		return
	}
	res.status(200).send([])
}

export default Posts
