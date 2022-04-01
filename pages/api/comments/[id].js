import { comments } from "../../../fakeDb/db"

const Comments = (req, res) => {
	const { id } = req.query
	res.setHeader("Content-type", "application/json")
	const commentsForPost = []
	for (const comment of comments) {
		if (id === comment.PostID) commentsForPost.push(comment)
	}
	setTimeout(() => {
		res.status(200).send(commentsForPost)
	}, 1000)
}

export default Comments