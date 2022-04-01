import PostLayot from "../../layots/postLayot"
import SmallMessage from "../../components/common/smallMessage"
import { useState } from "react"
import Button from "../../components/common/button"
import PostTextAreaBlock from "../../components/ui/postTextAreaBlock"
import PropTypes from "prop-types"
import CommentsList from "../../components/ui/commentsList"

const PostPage = ({ post, comments }) => {
	const [isEdit, setEdit] = useState(false)
	const handlerModeEdit = () => setEdit(prevState => !prevState)
	return (
		<PostLayot>
			<div className="container-content__post block-post">
				<div className="block-post__container _container">
					<div className="block-post__image-wrap">
						<img className="block-post__img" src="/images/postImg.png" alt="Изображение на странице поста: человек читает книгу под деревом" />
					</div>
					{!post.ID ?
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
							<div className="post-content__comments block-comments">
								<h3 className="block-comments__title">Комментарии</h3>
								<CommentsList data={comments} />
							</div>
						</div>
					}
				</div>
			</div>
		</PostLayot>
	)
}

export async function getServerSideProps({ params }) {
	const { postId } = params
	const responcePost = await fetch(process.env.API_URL + "posts/" + postId)
	const jsonPost = await responcePost.json()
	const responceComments = await fetch(process.env.API_URL + "comments/" + postId)
	const jsonComments = await responceComments.json()
	return {
		props: { post: jsonPost, comments: jsonComments},
	}
}

PostPage.propTypes = {
	post: PropTypes.object.isRequired,
	comments: PropTypes.array.isRequired
}

export default PostPage
