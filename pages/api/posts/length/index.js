import posts from "../../../../fakeDb/db"

const LengthPosts = (req, res) => {
	res.setHeader("Content-type", "application/json")
	res.status(200).send({ counter: posts.length })
}

export default LengthPosts