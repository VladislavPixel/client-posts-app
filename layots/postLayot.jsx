import React from "react"
import WrapperContent from "../components/HOC/wrapperContent"
import PropTypes from "prop-types"
import Header from "../components/common/header"
import Footer from "../components/common/footer"

const PostLayot = ({ children }) => {
	return (
		<React.Fragment>
			<Header />
			<WrapperContent>
				{children}
			</WrapperContent>
			<Footer />
		</React.Fragment>
	)
}

PostLayot.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default PostLayot