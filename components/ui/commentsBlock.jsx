import PropTypes from "prop-types"
import CommentsList from "./commentsList"

const CommentsBlock = ({ data, classesParent }) => {
	return (
		<div className={`${classesParent}__comments block-comments`}>
			<h3 className="block-comments__title">Комментарии</h3>
			<CommentsList dataComments={data} />
		</div>
	)
}

CommentsBlock.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.oneOf([undefined])
	]).isRequired,
	classesParent: PropTypes.string.isRequired
}

export default CommentsBlock