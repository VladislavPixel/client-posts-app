import PropTypes from "prop-types"
import Link from "next/link"

const PostCard = ({ ID, Title, Description, Commented }) => {
	return (
		<div className="posts-block__column">
			<div className="posts-block__card card-posts">
				<div className="card-posts__wrap-img">
					<Link href={`/posts/[idPost]`} as={`/posts/${ID}`}>
						<a><img className="card-posts__image" src="./imagesPosts/postImage.png" alt="Изображение поста" /></a>
					</Link>
				</div>
				<div className="card-posts__content posts-content-card">
					<Link href={`/posts/[idPost]`} as={`/posts/${ID}`}>
						<a><h3 className="posts-content-card__title">{Title}</h3></a>
					</Link>
					<p className="posts-content-card__text">{Description}</p>
					<div className="posts-content-card__controllers card-controllers">
						<Link href={`/posts/[idPost]`} as={`/posts/${ID}`}>
							<a className="card-controllers__link"><img className="card-controllers__comment-icon" src="./icons/comment.svg" /></a>
						</Link>
						<span className="card-controllers__number-comments">{Commented.length}</span>
						<Link href={`/posts/[idPost]`} as={`/posts/${ID}`}>
							<a className="card-controllers__link"><img className="card-controllers__pencil-icon" src="./icons/pencil.svg" /></a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

PostCard.propTypes = {
	Title: PropTypes.string.isRequired,
	Description: PropTypes.string.isRequired,
	Commented: PropTypes.array.isRequired,
	ID: PropTypes.string.isRequired
}

export default PostCard
