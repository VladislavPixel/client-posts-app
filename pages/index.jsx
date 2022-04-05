import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import HomeLayot from "../layots/homeLayot"
import PostsList from "../components/ui/postsList"
import Pagination from "../components/ui/pagination"
import Spinner from "../components/common/spinner"
import postsService from "../services/posts.service"
import { setPostsData, setLengthValue } from "../store/homePage"

const HomePage = ({ posts: serverPosts, postsLengthAll: serverLengthPosts }) => {
	const dispatch = useDispatch()
	const [lengthPosts, setLengthPosts] = useState(serverLengthPosts)
	const [posts, setPosts] = useState(serverPosts)
	if (posts) {
		dispatch(setPostsData(posts))
	}
	if (lengthPosts) {
		dispatch(setLengthValue(lengthPosts))
	}
	const [currentPagin, setCurrentPagin] = useState(1) // State Pagin
	const MAX_POSTS_ON_PAGE = 10
	const handlerUpdatePagin = (id) => setCurrentPagin(id)
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
		async function load() {
			const posts = await postsService.getPostsByPage(1)
			setPosts(posts)
		}
		if (!serverPosts) load()
		async function loadLength() {
			const responceLengthValue = await fetch("http://localhost:8081/posts")
			const value = await responceLengthValue.json()
			setLengthPosts(value)
		}
		if (!serverLengthPosts) loadLength()
		if (!posts || !lengthPosts) return <Spinner />
	}, [])
	return (
		<HomeLayot>
			<div className="content-container__block-posts posts-block">
				<div className="posts-block__container _container">
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
				</div>
			</div>
		</HomeLayot>
	)
}

HomePage.getInitialProps = async () => {
	const posts = await postsService.getPostsByPage(1)
	const responceLengthValue = await fetch(process.env.API_URL + "posts")
	const value = await responceLengthValue.json()
	return {
		posts,
		postsLengthAll: value.count
	}
}

export default HomePage
