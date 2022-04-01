import PostsLayot from "../../layots/postsLayot"
import PropTypes from "prop-types"
import Search from "../../components/common/search"
import PostsList from "../../components/ui/postsList"

const PostsPage = ({ posts }) => {
	return (
		<PostsLayot>
			<div className="container-content__posts posts">
				<div className="posts__container _container">
					<h1 className="posts__title title">Посты</h1>
					<Search classesParent="posts" />
					<PostsList data={posts} />
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