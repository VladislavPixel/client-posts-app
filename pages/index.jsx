import HomeLayot from "../layots/homeLayot"
import PropTypes from "prop-types"
import PostsList from "../components/ui/postsList"

const HomePage = ({ posts }) => {
	return (
		<HomeLayot>
			<div className="container-content__block-posts posts-block">
				<div className="posts-block__container _container">
					<PostsList data={posts} />
				</div>
			</div>
		</HomeLayot>
	)
}

export async function getStaticProps() {
	const responcePosts = await fetch(process.env.API_URL + "posts")
	const jsonPosts = await responcePosts.json()
	return {
		props: { posts: jsonPosts },
	}
}

HomePage.propTypes = {
	posts: PropTypes.array.isRequired
}

export default HomePage
