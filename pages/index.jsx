import HomeLayot from "../layots/homeLayot"
import PostCard from "../components/ui/postCard"

const HomePage = ({ posts }) => {
	return (
		<HomeLayot>
			<div className="container-content__block-posts posts-block">
				<div className="posts-block__container _container">
					<div className="posts-block__list">
						{posts.map(post => <PostCard key={post.ID} {...post} />)}
					</div>
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

export default HomePage
