import posts from "../../../fakeDb/db"

const CurrentPost = (req, res) => {
	const { id } = req.query
	res.setHeader("Content-type", "application/json")
	const post = posts.find(postEl => postEl.ID === id)
	if (post) {
		res.status(200).send(post)
		return
	}
	res.status(200).send({})
}

export default CurrentPost