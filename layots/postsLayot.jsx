import React from "react"
import WrapperContent from "../components/HOC/wrapperContent"
import Footer from "../components/common/footer"
import PropTypes from "prop-types"

const PostsLayot = ({ children }) => {
	return (
		<React.Fragment>
			<WrapperContent>
				{children}
			</WrapperContent>
			<Footer />
		</React.Fragment>
	)
}

PostsLayot.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default PostsLayot