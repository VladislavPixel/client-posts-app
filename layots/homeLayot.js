import React from "react"
import WrapperContent from "../components/HOC/wrapperContent"
import Header from "../components/common/header"

const HomeLayot = ({ children }) => {
	return (
		<React.Fragment>
			<Header />
			<WrapperContent>
				{children}
			</WrapperContent>
			{/* Footer */}
		</React.Fragment>
	)
}

export default HomeLayot