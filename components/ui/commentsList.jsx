import PropTypes from "prop-types"
import SmallMessage from "../common/smallMessage"
import Comment from "./comment"

const CommentsList = ({ dataComments }) => {
	return (
		(!dataComments || dataComments.length === 0) ?
			<SmallMessage classesParent="block-comments" iconPath="/icons/comments.svg" title="Комментарии отсутствуют" offer="Оставьте комментарий, будьте первым" altIcon="Иконка комментариев" /> :
			<div className="block-comments__list">
				{dataComments.map(comment => <Comment key={comment.ID} {...comment} />)}
			</div>
	)
}

CommentsList.propTypes = {
	dataComments: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.oneOf([null])
	])
}

export default CommentsList