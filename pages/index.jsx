import { useState } from "react"
import HomeLayot from "../layots/homeLayot"
import PostsList from "../components/ui/postsList"
import getNewArrayPagins from "../utils/pagination"
import Pagination from "../components/ui/pagination"
import { fetchAllPostsData, getDataPosts } from "../store/posts"
import { useSelector } from "react-redux"
import { wrapper } from "../store/createStore"

const HomePage = () => {
	const posts = useSelector(getDataPosts())
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

export const getStaticProps = wrapper.getStaticProps(store => 
	async (context) => {
		await store.dispatch(fetchAllPostsData())
		return {
			props: {},
		}
	}
)

export default HomePage
