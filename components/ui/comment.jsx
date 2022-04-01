import PropTypes from "prop-types"

const Comment = ({ Username, Content }) => {
	return (
		<div className="block-comments__element comment-block">
			<div className="comment-block__column">
				<img className="comment-block__icon-profile" src="/icons/profileComment.svg" alt="Иконка пользователя, оставившего комментарий" />
			</div>
			<div className="comment-block__column">
				<h5 className="comment-block__name">{Username}</h5>
				<p className="comment-block__text">{Content}</p>
			</div>
		</div>
	)
}

Comment.propTypes = {
	Username: PropTypes.string.isRequired,
	Content: PropTypes.string.isRequired
}

export default Comment