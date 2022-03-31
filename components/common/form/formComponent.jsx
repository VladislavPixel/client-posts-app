import PropTypes from "prop-types"
import { useState } from "react"

const FormComponent = ({ children, classesParent, onSubmit, dataDefault }) => {
	const [data, setData] = useState(dataDefault || {})
	return (
		<form className={`${classesParent}__form form`}>{children}</form>
	)
}

FormComponent.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	classesParent: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	dataDefault: PropTypes.object.isRequired
}

export default FormComponent