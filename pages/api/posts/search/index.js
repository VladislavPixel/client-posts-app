import posts from "../../../../fakeDb/db"

const Posts = (req, res) => {
	const { title, description } = req.body
	let arr = []
	if (title !== "") {
		for (const post of posts) {
			const arrK = posts.filter((post) => {
				if (post.title.toLowerCase().includes(title)) return post
				return null
			})
			console.log("LAVA",arrK)
			return res.status(200).send(arrK)
			// if (post.title.toLowerCase().includes(title) && (arr.length < 8)) {
			// 	arr.push(post)
			// }
			// if (arr.length === 8) {
				
			// 	return res.status(200).send(arr)
			// }
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