import PostsLayot from "../../layots/postsLayot"
import PropTypes from "prop-types"
import Search from "../../components/common/search"
import PostsList from "../../components/ui/postsList"
import Button from "../../components/common/button"
import { useState } from "react"

const PostsPage = ({ posts }) => {
	const MAX_POSTS = 9
	const getCorrectData = (array) => {
		let dataFilter
		if (array.length <= MAX_POSTS) {
			dataFilter = array
		} else {
			dataFilter = array.filter((el, index) => index < MAX_POSTS)
		}
		return dataFilter
	}
	const [dataPosts, setDataPosts] = useState(getCorrectData(posts))
	const handlerMoreBtn = () => {
		setDataPosts((prevState) => {
			return [
				...prevState,
				...posts.filter((el, index) => index >= prevState.length && index < prevState.length + MAX_POSTS)
			]
		})
	}
	return (
		<PostsLayot>
			<div className="content-container__posts posts">
				<div className="posts__container _container">
					<h1 className="posts__title title">Посты</h1>
					<Search classesParent="posts" />
					<PostsList data={dataPosts} />
					{dataPosts.length !== posts.length &&
						<div className="posts__wrap-btn">
							<Button type="button" text="Больше постов" classesParent="posts" onCallFun={handlerMoreBtn} />
						</div>
					}
				</div>
			</div>
		</PostsLayot>
	)
}

export async function getStaticProps() {
	const responcePosts = await fetch(process.env.API_URL + "posts")
	const jsonPosts = await responcePosts.json()
	return {
		props: { posts: jsonPosts },
	}
}

PostsPage.propTypes = {
	posts: PropTypes.array.isRequired
}

export default PostsPage