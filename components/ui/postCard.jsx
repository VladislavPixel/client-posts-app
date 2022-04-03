import PropTypes from "prop-types"
import Link from "next/link"

const PostCard = ({ id, title, description, Count }) => {
	return (
		<div className="posts-block__column">
			<div className="posts-block__card card-post">
				<div className="card-post__wrap-img">
					<Link href={`/posts/[postId]`} as={`/posts/${id}`}>
						<a><img className="card-post__image" src="/imagesPosts/postImage.png" alt="Изображение поста" /></a>
					</Link>
				</div>
				<div className="card-post__content post-content-card">
					<Link href={`/posts/[postId]`} as={`/posts/${id}`}>
						<a><h3 className="post-content-card__title">{title}</h3></a>
					</Link>
					<p className="post-content-card__text">{description}</p>
					<div className="post-content-card__actions card-actions">
						<Link href={`/posts/[postId]`} as={`/posts/${id}`}>
							<a className="card-actions__link"><img alt="Иконка комментария" className="card-actions__comment-icon" src="/icons/comment.svg" /></a>
						</Link>
						<span className="card-actions__number-comments">{Count}</span>
						<Link href={`/posts/[postId]`} as={`/posts/${id}`}>
							<a className="card-actions__link"><img alt="Иконка карандаша" className="card-actions__pencil-icon" src="/icons/pencil.svg" /></a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

PostCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	Count: PropTypes.number.isRequired,
	id: PropTypes.string.isRequired
}

export default PostCard
