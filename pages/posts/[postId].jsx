import PostLayot from "../../layots/postLayot"
import SmallMessage from "../../components/common/smallMessage"
import { useState, useEffect, useRef } from "react"
import Button from "../../components/common/button"
import PostTextAreaBlock from "../../components/ui/postTextAreaBlock"
import PropTypes from "prop-types"
import CommentsBlock from "../../components/ui/commentsBlock"
import Router from "next/router"
import { wrapper } from "../../store/createStore"

const PostPage = ({ post, comments }) => {
	const refBlockPost = useRef(null)
	const [isBigImg, setBigImg] = useState(true)
	const [isEdit, setEdit] = useState(false)
	const handlerModeEdit = () => setEdit(prevState => !prevState)
	const correctPathImg = (isBigImg ? "/images/postImg.png" : "/images/postImgSmall.png")
	useEffect(() => {
		if (refBlockPost.current.offsetWidth <= 400) setBigImg(false)
	}, [])
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
					{!post.id ?
						<SmallMessage classesParent="block-post" altIcon="Иконка плачащего смайлика" iconPath="/icons/sadSmile.svg" title="Такого поста не существует" offer="Перейдите на главную сайта и выберете доступные посты или исправьте путь в адресной строке" /> :
						<div className="block-post__content-post post-content">
							<h2 className="post-content__title title">{post.Title}</h2>
							{!isEdit ?
								<p className="post-content__text">{post.Description}</p> :
								<form className="post-content__form">
									<PostTextAreaBlock value={post.Description} />
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
							<CommentsBlock data={comments} classesParent="post-content" />
						</div>
					}
				</div>
			</div>
		</PostLayot>
	)
}

export const getInitialProps = wrapper.getInitialProps(store => 
	async (context) => {
		console.log(store.getState().posts.data)
		console.log(context.params.postId, "ЭТО КОНТЕКСТ")
		return {
			props: {post: {}}
		}
	}
)

PostPage.propTypes = {
	post: PropTypes.object.isRequired,
	comments: PropTypes.array.isRequired
}

export default PostPage
