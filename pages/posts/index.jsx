import React, { useEffect, useState } from "react"
import Router from "next/router"
import { useDispatch, useSelector } from "react-redux"

// Components
import PostsLayot from "../../layots/postsLayot"
import Search from "../../components/common/search"
import PostsList from "../../components/ui/postsList"
import Button from "../../components/common/button"
import Spinner from "../../components/common/spinner"
// Auxiliary
import postsService from "../../services/posts.service"
import {
	setPostsData,
	getKeysArrayData,
	getAllData,
	setSearchValuePostsTitle,
	getSearchValuePostsTitle,
	getDataPostsForTitle,
	fetchDataPostsForTitle,
	getDataPostsForTitleLoading
} from "../../store/posts"

const PostsPage = ({ posts: serverPosts, postsLengthAll: serverLengthPosts }) => {
	const dispatch = useDispatch()
	const valueSearch = useSelector(getSearchValuePostsTitle())
	const dataPostsForTitle = useSelector(getDataPostsForTitle())
	const loadingDataPostsForTitle = useSelector(getDataPostsForTitleLoading())
	if (serverPosts) {
		dispatch(setPostsData(serverPosts, 1))
	}
	// STATE
	//const [loadingDataForTitle, setLoadingDataForTitle] = useState(false)
	const [dataPosts, setDataPosts] = useState(serverPosts)
	const [length, setLength] = useState(serverLengthPosts)
	const [currentValue, setCurrentValue] = useState(1)
	const [loading, setLoading] = useState(true)
	const keys = useSelector(getKeysArrayData())
	const dataAll = useSelector(getAllData())
	if (!dataPosts && keys.length !== 0) {
		let arr = []
		for (const key of keys) {
			arr.push(...dataAll[key])
		}
		setDataPosts(arr)
		setCurrentValue(arr[arr.length - 1].group)
	}

	const handlerMoreBtn = async () => {
		const posts = await postsService.getPostsByPage(currentValue + 1)
		dispatch(setPostsData(posts, currentValue + 1))
		setCurrentValue(prevState => prevState + 1)
		setDataPosts([...dataPosts, ...posts])
	}
	const handlerBackBtn = () => Router.push("/")

	useEffect(() => { // Если сервер не запустит рендер, данные будут получены на клиенте
		const loadDataPosts = async () => {
			const posts = await postsService.getPostsByPage(1)
			dispatch(setPostsData(posts, 1))
			setDataPosts(posts)
		}
		const loadLengthValue = async () => {
			const postsLengthAll = await postsService.getAllLength()
			setLength(postsLengthAll)
		}
		if (!dataPosts) loadDataPosts()
		if (!length) loadLengthValue()
	}, [])

	// Если данные еще не получены
	useEffect(() => {
		if (dataPosts && (length !== null)) {
			setLoading(false)
		}
	}, [dataPosts, length])
	if (loading) return <Spinner />
	// ОБРАБОТКА ПОИСКА
	const handlerSearch = (value) => dispatch(setSearchValuePostsTitle(value))
	const handlerSubmitSearch = () => dispatch(fetchDataPostsForTitle())
	const correctData = (valueSearch !== "" ? dataPostsForTitle : dataPosts)
	return (
		<PostsLayot>
			<div className="content-container__posts posts">
				<div className="posts__container _container">
					{loadingDataPostsForTitle ? <Spinner /> :
						<React.Fragment>
							<h1 className="posts__title title">Посты</h1>
							<Button onCallFun={handlerBackBtn} type="button" text="На главную" classesParent="posts__btn_back posts" />
							<Search classesParent="posts" placeholder="Поиск по заголовку" onHandler={handlerSearch} />
							<Button classesParent="posts__btn_blue posts" text="Отправить" onCallFun={handlerSubmitSearch} type="button" />
							<PostsList data={correctData} />
							{dataPosts.length !== length &&
								<div className="posts__wrap-btn">
									<Button type="button" text="Больше постов" classesParent="posts" onCallFun={handlerMoreBtn} />
								</div>
							}
						</React.Fragment>
					}
				</div>
			</div>
		</PostsLayot>
	)
}

PostsPage.getInitialProps = async ({ req }) => {
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

export default PostsPage
