import PropTypes from "prop-types"

const Button = ({ type, text, classesParent, onCallFun }) => {
	return (
		<button onClick={onCallFun} className={`${classesParent}__btn universal-btn`} type={type}>{text}</button>
	)
}

Button.propTypes = {
	type: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	classesParent: PropTypes.string.isRequired,
	onCallFun: PropTypes.func.isRequired
}

export default Button