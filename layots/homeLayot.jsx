import React from "react"
import PropTypes from "prop-types"
import Header from "../components/common/header"
import WrapperContent from "../components/HOC/wrapperContent"
import Footer from "../components/common/footer"

const HomeLayot = ({ children }) => {
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

HomeLayot.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
}

export default HomeLayot