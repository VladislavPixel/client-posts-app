import posts from "../../../../fakeDb/db"

const Posts = (req, res) => {
	const { title, description } = req.body
	let arr = []
	if (title !== "") {
		const arrayReturned = posts.filter(post => {
			if (post.title.toLowerCase().includes(title.toLowerCase())) return post
			return null
		})
		console.log("Произвел выборку: ", arrayReturned)
		if (arrayReturned.length <= 8) {
			return res.status(200).send(arrayReturned)
		} else {
			return res.status(200).send(arrayReturned.slice(0, 9))
		}
	} else if (description !== "") {
		for (const post of posts) {
			if (post.description.toLowerCase().includes(description) && (arr.length < 8)) {
				arr.push(post)
			}
			if (arr.length === 8) {
				return res.status(200).send(arr)
			}
		}
	} else {
		res.status(200).send(arr)
	}
}

export default Posts