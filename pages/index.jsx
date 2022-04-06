import { useState, useEffect } from "react"
import HomeLayot from "../layots/homeLayot"
import PostsList from "../components/ui/postsList"
import Pagination from "../components/ui/pagination"
import postsService from "../services/posts.service"
import { MAX_POSTS_ON_PAGE } from "../utils/core/variables"
import { useDispatch } from "react-redux"
import { setPostsData, setLengthValue } from "../store/posts"
import Spinner from "../components/common/spinner"

const HomePage = ({ posts: serverPosts, postsLengthAll: serverLengthPosts }) => {
	const dispatch = useDispatch()
	// STATES
	const [posts, setPosts] = useState(serverPosts)
	const [lengthAll, setLengthAll] = useState(serverLengthPosts)
	const [currentPagin, setCurrentPagin] = useState(1)
	// SET STORE, если данные есть
	if (posts) dispatch(setPostsData(posts, currentPagin))
	if (lengthAll) dispatch(setLengthValue(lengthAll))
	// FOR PAGINATION
	const handlerUpdatePagin = (newCurrentPagin) => setCurrentPagin(newCurrentPagin)
	const handlerArrowPagins = async (typeMethod) => {
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
		const loadPostsData = async () => {
			const posts = await postsService.getPostsByPage(currentPagin)
			setPosts(posts)
		}
		const loadLengthAll = async () => {
			const postsLengthAll = await postsService.getAllLength()
			setLengthAll(postsLengthAll)
		}
		if (!serverPosts) {
			loadPostsData()
		}
		if (!serverLengthPosts) {
			loadLengthAll()
		}
	}, [])

	// Если данные еще не получены
	if (!posts || !lengthAll) return <Spinner />
	return (
		<HomeLayot>
			<div className="content-container__block-posts posts-block">
				<div className="posts-block__container _container">
					<PostsList data={posts} />
					{
						lengthAll > 0 &&
						<Pagination 
							onArrow={handlerArrowPagins}
							onUpdatePagin={handlerUpdatePagin}
							current={currentPagin}
							maxPosts={MAX_POSTS_ON_PAGE}
							length={lengthAll}
							classesParent="posts-block"
						/>
					}
				</div>
			</div>
		</HomeLayot>
	)
}

HomePage.getInitialProps = async ({ req }) => {
	if (!req) {
		return { posts: null, postsLengthAll: null }
	}
	const posts = await postsService.getPostsByPage(1)
	const postsLengthAll = await postsService.getAllLength()
	return {
		posts,
		postsLengthAll
	}
}

export default HomePage
