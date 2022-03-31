import PropTypes from "prop-types"

const TextField = ({ name, label, placeholder, classesParent }) => {
	return (
		<div className={`${classesParent}__field text-field`}>
			<label htmlFor={name} className="text-field__label">{label}</label>
			<div className="text-field__wrap-input">
				<input className="text-field__input" name={name} id={name} placeholder={placeholder} />
			</div>
		</div>
	)
}

TextField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	classesParent: PropTypes.string.isRequired
}

export default TextField
