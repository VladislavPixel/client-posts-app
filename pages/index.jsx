import { useState } from "react"
import HomeLayot from "../layots/homeLayot"
import PropTypes from "prop-types"
import PostsList from "../components/ui/postsList"
import getNewArrayPagins from "../utils/pagination"
import Pagination from "../components/ui/pagination"

const HomePage = ({ posts }) => {
	const [currentPagin, setCurrentPagin] = useState(1) // State Pagin
	const MAX_POSTS_ON_PAGE = 9
	const handlerUpdatePagin = (id) => setCurrentPagin(id)
	const lengthPosts = posts.length
	const newArrayPosts = getNewArrayPagins(
		MAX_POSTS_ON_PAGE,
		currentPagin,
		posts
	) // PAGINATIONS
	const handlerArrowPagins = (typeMethod) => {
		console.log(typeMethod)
		if (typeMethod === "decrement") {
			setCurrentPagin((prevState) => {
				return prevState - 1
			})
		}
		if (typeMethod === "increment") {
			setCurrentPagin((prevState) => {
				return prevState + 1
			})
		}
	}
	return (
		<HomeLayot>
			<div className="content-container__block-posts posts-block">
				<div className="posts-block__container _container">
					<PostsList data={newArrayPosts} />
					{
						lengthPosts > 0 &&
						<Pagination 
							onArrow={handlerArrowPagins}
							onUpdatePagin={handlerUpdatePagin}
							current={currentPagin}
							maxPosts={MAX_POSTS_ON_PAGE}
							length={lengthPosts}
							classesParent="posts-block"
						/>
					}
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
