import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"

// Components
import Spinner from "../components/common/spinner"
import HomeLayot from "../layots/homeLayot"
import PostsList from "../components/ui/postsList"
import Pagination from "../components/ui/pagination"
// Auxiliary
import postsService from "../services/posts.service"
import { MAX_POSTS_ON_PAGE } from "../utils/core/variables"
import { setPostsData, setLengthValue, getAllData, getLengthAll } from "../store/posts"


const HomePage = ({ posts: serverPosts, postsLengthAll: serverLengthPosts }) => {
	const dispatch = useDispatch()
	const dataAll = useSelector(getAllData())
	const lengthValue = useSelector(getLengthAll())
	// STATES
	const [loading, setLoading] = useState(true)
	const [lengthAll, setLengthAll] = useState(serverLengthPosts)
	const [currentPagin, setCurrentPagin] = useState(1)
	const [posts, setPosts] = useState(serverPosts)

	// FOR PAGINATION
	const loadNewPosts = async (pagin) => {
		if (dataAll[pagin]) {
			setPosts(dataAll[pagin])
		} else {
			const posts = await postsService.getPostsByPage(pagin)
			dispatch(setPostsData(posts, pagin))
			setPosts(posts)
		}
	}
	const handlerUpdatePagin = (newCurrentPagin) => {
		setCurrentPagin(newCurrentPagin)
		loadNewPosts(newCurrentPagin)
	}
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
		loadNewPosts(currentPagin)
	}
	useEffect(() => { // Реализация получения данных на клиенте, на случай, если сервер не рендерил
		const loadPostsData = async () => {
			const posts = await postsService.getPostsByPage(currentPagin)
			dispatch(setPostsData(posts, currentPagin))
			setPosts(posts)
		}
		const loadLengthAll = async () => {
			const postsLengthAll = await postsService.getAllLength()
			dispatch(setLengthValue(postsLengthAll))
			setLengthAll(postsLengthAll)
		}
		if (serverLengthPosts) dispatch(setLengthValue(serverLengthPosts))
		if (serverPosts) dispatch(setPostsData(serverPosts, currentPagin))
		if (!serverPosts && !dataAll[currentPagin]) {
			loadPostsData()
		} else if (!serverPosts && dataAll[currentPagin]) {
			setPosts(dataAll[currentPagin])
		}
		if (!serverLengthPosts && !lengthValue) {
			loadLengthAll()
		} else if (!serverLengthPosts && lengthValue) {
			setLengthAll(lengthValue)
		}
	}, [])

	// Если данные еще не получены
	useEffect(() => {
		if (posts && (lengthAll !== null)) {
			setLoading(false)
		}
	}, [posts, lengthAll])
	if (loading) return <Spinner />
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

HomePage.propTypes = {
	posts: PropTypes.array,
	postsLengthAll: PropTypes.number
}

export default HomePage
