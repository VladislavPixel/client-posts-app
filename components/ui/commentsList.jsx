import PropTypes from "prop-types"
import SmallMessage from "../common/smallMessage"
import Comment from "./comment"

const CommentsList = ({ data }) => {
	return (
		data.length === 0 ?
			<SmallMessage classesParent="block-comments" iconPath="/icons/comments.svg" title="Комментарии отсутствуют" offer="Оставьте комментарий, будьте первым" altIcon="Иконка комментариев" /> :
			<div className="block-comments__list">
				{data.map(comment => <Comment key={data.ID} {...comment} />)}
			</div>
	)
}

CommentsList.propTypes = {
	data: PropTypes.array.isRequired
}

export default CommentsList