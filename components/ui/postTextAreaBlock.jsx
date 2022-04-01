import PropTypes from "prop-types"

const PostTextAreaBlock = ({ value }) => {
	return(
		<div className="post-content__area-wrap">
			<textarea className="post-content__area" name="newDescription">{value}</textarea>
		</div>
	)
}

PostTextAreaBlock.propTypes = {
	value: PropTypes.string.isRequired
}

export default PostTextAreaBlock
