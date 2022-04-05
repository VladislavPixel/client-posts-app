import PostLayot from "../../layots/postLayot"
import SmallMessage from "../../components/common/smallMessage"
import { useState, useEffect, useRef } from "react"
import Button from "../../components/common/button"
import PostTextAreaBlock from "../../components/ui/postTextAreaBlock"
import PropTypes from "prop-types"
import CommentsBlock from "../../components/ui/commentsBlock"
import { useSelector, useDispatch } from "react-redux"
import Spinner from "../../components/common/spinner"
import Router from "next/router"
import { getDataPosts } from "../../store/homePage"
import { setCurrentPostPage } from "../../store/postPage"

const PostPage = ({ postId }) => {
	const dispatch = useDispatch()
	const dataPosts = useSelector(getDataPosts())
	if (!dataPosts || !postId) Router.push("/")
	const [currentPost, setCurrentPost] = useState(null)
	const [loading, setLoading] = useState(true)
	if (currentPost) {
		dispatch(setCurrentPostPage(currentPost))
	}
	// Логика установка изображения поста
	const refBlockPost = useRef(null)
	const [isBigImg, setBigImg] = useState(true)
	const correctPathImg = (isBigImg ? "/images/postImg.png" : "/images/postImgSmall.png")
	// Update mode = обновление post
	const [isEdit, setEdit] = useState(false)
	const handlerModeEdit = () => setEdit(prevState => !prevState)
	// Получение поста страницы
	useEffect(() => {
		if (!currentPost) {
			async function fetchCurrentPost () {
				const findEl = dataPosts.find(item => item.id === postId)
				const correctObject = { ...findEl }
				delete correctObject.Count
				const responce = await fetch("http://localhost:8081/post", {
					method: "POST",
					body: JSON.stringify(correctObject)
				})
				const postData = await responce.json()
				setCurrentPost(postData)
				setLoading(false)
			}
			fetchCurrentPost()
		}
	}, [])
	const handlerSubmit = () => {

	}
	return (
		<PostLayot>
			<div ref={refBlockPost} className="content-container__post block-post">
				<div className="block-post__container _container">
					<div className="block-post__head head-block-post">
						<button className="head-block-post__btn-head" type="button" onClick={() => Router.push("/")}>Назад</button>
						<h1 className="head-block-post__header">Пост</h1>
					</div>
					<div className="block-post__image-wrap">
						<img className="block-post__img" src={correctPathImg} alt="Изображение на странице поста: человек читает книгу под деревом" />
					</div>
					{loading ? <Spinner /> :
						<>
							{!currentPost.id ?
								<SmallMessage classesParent="block-post" altIcon="Иконка плачащего смайлика" iconPath="/icons/sadSmile.svg" title="Такого поста не существует" offer="Перейдите на главную сайта и выберете доступные посты или исправьте путь в адресной строке" /> :
								<div className="block-post__content-post post-content">
									<h2 className="post-content__title title">{currentPost.title}</h2>
									{!isEdit ?
										<p className="post-content__text">{currentPost.description}</p> :
										<form onSubmit={handlerSubmit} className="post-content__form">
											<PostTextAreaBlock value={currentPost.description} />
											<div className="post-content__container-btn btn-container">
												<Button classesParent="btn-container" type="submit" text="Сохранить изменения" />
												<Button classesParent="btn-container" type="button" text="Отменить" onCallFun={handlerModeEdit} />
											</div>
										</form>
									}
									{!isEdit &&
										<button onClick={handlerModeEdit} type="button" className="post-content__btn">
											<img className="post-content__icon-btn" src="/icons/pencilPink.svg" alt="Розовая иконка карандаша" />
											Редактировать текст
										</button>
									}
									<CommentsBlock data={currentPost.Comments} classesParent="post-content" />
								</div>
							}
						</>
					}
				</div>
			</div>
		</PostLayot>
	)
}

PostPage.getInitialProps = async ({ query }) => {
	return { postId: query.postId }
}

PostPage.propTypes = {
	postId: PropTypes.string
}

export default PostPage
