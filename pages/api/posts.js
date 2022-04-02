import posts from "../../fakeDb/db"

const Posts = (req, res) => {
	res.statusCode = 200
	res.setHeader("Content-type", "application/json")
	if (req.url === "/api/posts") {
		res.status(200).send(posts)
		return
	}
	res.status(200).send([])
}

export default Posts
