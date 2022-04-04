import { useState, useEffect } from "react"
import HomeLayot from "../layots/homeLayot"
import PostsList from "../components/ui/postsList"
import getNewArrayPagins from "../utils/pagination"
import Pagination from "../components/ui/pagination"
import {
	fetchAllPostsData,
	getDataPosts,
	setAllPostsLength,
	getLengthPostsValue,
	getStatusLoaderPosts
} from "../store/homePage"
import { getSearchValuePosts } from "../store/searchPosts"
import { useDispatch, useSelector } from "react-redux"
import { wrapper } from "../store/createStore"
import Spinner from "../components/common/spinner"

const HomePage = () => {
	const [currentPagin, setCurrentPagin] = useState(1) // State Pagin
	const posts = useSelector(getDataPosts(currentPagin))
	const loaderPosts = useSelector(getStatusLoaderPosts())
	const lengthPostsAll = useSelector(getLengthPostsValue())
	const valueSearchPosts = useSelector(getSearchValuePosts())
	const MAX_POSTS_ON_PAGE = 10
	const handlerUpdatePagin = (id) => setCurrentPagin(id)
	const lengthPosts = lengthPostsAll
	// const newArrayPosts = getNewArrayPagins(
	// 	MAX_POSTS_ON_PAGE,
	// 	currentPagin,
	// 	posts
	// ) // PAGINATIONS
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
	useEffect(() => {

	}, [currentPagin])
	return (
		<HomeLayot>
			<div className="content-container__block-posts posts-block">
				<div className="posts-block__container _container">
					{loaderPosts ? <Spinner /> :
						<>
							<PostsList data={posts} />
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
						</>
					}
				</div>
			</div>
		</HomeLayot>
	)
}

export const getServerSideProps = wrapper.getServerSideProps(store => 
	async (context) => {
		if (!store.getState().homePage.data) {
			await store.dispatch(fetchAllPostsData(1))
		}
		await store.dispatch(setAllPostsLength())
		return {
			props: {},
		}
	}
)

export default HomePage
