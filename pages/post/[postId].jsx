import { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { useRouter } from "next/router"

// Components
import PostLayot from "../../layots/postLayot"
import SmallMessage from "../../components/common/smallMessage"
import Button from "../../components/common/button"
import PostTextAreaBlock from "../../components/ui/postTextAreaBlock"
import CommentsBlock from "../../components/ui/commentsBlock"
import Spinner from "../../components/common/spinner"
// Auxiliary
import postService from "../../services/post.service"

const PostPage = ({ post: postServer }) => {
	const router = useRouter()
	// STATE
	const [currentPost, setCurrentPost] = useState(postServer)
	const [isBigImg, setBigImg] = useState(true)

	// Логика установка изображения поста
	const refBlockPost = useRef(null)
	const correctPathImg = (isBigImg ? "/images/postImg.png" : "/images/postImgSmall.png")

	// Update mode = обновление post
	const [isEdit, setEdit] = useState(false)
	const handlerModeEdit = () => setEdit(prevState => !prevState)

	useEffect(() => { // Комбинация клиента, на случай если сервер не делал рендер
		const loadPost = async () => {
			const post = await postService.getPostById(router.query.postId)
			setCurrentPost(post)
		}
		if (!postServer) {
			loadPost()
			if (refBlockPost.current.offsetWidth <= 400) setBigImg(false) // Для адаптива картинки, которая главная у поста
			if (refBlockPost.current.offsetWidth > 400) setBigImg(true)
		}
	}, [])

	// Если данные еще не получены
	if (!currentPost) return <Spinner />
	return (
		<PostLayot>
			<div ref={refBlockPost} className="content-container__post block-post">
				<div className="block-post__container _container">
					<div className="block-post__head head-block-post">
						<button className="head-block-post__btn-head" type="button" onClick={() => router.push("/")}>Назад</button>
						<h1 className="head-block-post__header">Пост</h1>
					</div>
					<div className="block-post__image-wrap">
						<img className="block-post__img" src={correctPathImg} alt="Post image: A man is reading a book under a tree." />
					</div>
						{!currentPost.id ?
							<SmallMessage classesParent="block-post" altIcon="Crying emoticon icon" iconPath="/icons/sadSmile.svg" title="Такого поста не существует" offer="Перейдите на главную сайта и выберете доступные посты или исправьте путь в адресной строке" /> :
							<div className="block-post__content-post post-content">
								<h2 className="post-content__title title">{currentPost.title}</h2>
								{!isEdit ?
									<p className="post-content__text">{currentPost.description}</p> :
									<form className="post-content__form">
										<PostTextAreaBlock value={currentPost.description} />
										<div className="post-content__container-btn btn-container">
											<Button classesParent="btn-container" type="submit" text="Сохранить изменения" />
											<Button classesParent="btn-container" type="button" text="Отменить" onCallFun={handlerModeEdit} />
										</div>
									</form>
								}
								{!isEdit &&
									<button onClick={handlerModeEdit} type="button" className="post-content__btn">
										<img className="post-content__icon-btn" src="/icons/pencilPink.svg" alt="pink pencil icon" />
										Редактировать текст
									</button>
								}
								<CommentsBlock data={currentPost.commentsData} classesParent="post-content" />
							</div>
						}
				</div>
			</div>
		</PostLayot>
	)
}

PostPage.getInitialProps = async ({ query, req }) => {
	if (!req) {
		return { post: null }
	}
	const post = await postService.getPostById(query.postId)
	return {
		post
	}
}

PostPage.propTypes = {
	post: PropTypes.object
}

export default PostPage
