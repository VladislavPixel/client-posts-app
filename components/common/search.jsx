import PropTypes from "prop-types"
import { useState } from "react"

const Search = ({ classesParent, placeholder, onHandler }) => {
	const [value, setValue] = useState("")
	const handlerChange = ({ target }) => setValue(prevState => target.value)
	const handlerFlag = () => setValue("")
	onHandler(value)
	return (
		<div className={`${classesParent}__search search-block`}>
			<div className="search-block__wrap">
				<label htmlFor="search"><img className="search-block__icon" src="/icons/search.svg" alt="search icon" /></label>
				<div className="search-block__input-wrap">
					<input onChange={handlerChange} value={value} className="search-block__input" name="search" id="search" placeholder={placeholder} />
				</div>
				<span onClick={handlerFlag} className="search-block__flag">X</span>
			</div>
		</div>
	)
}

Search.defaultProps = {
	onHandler: () => {}
}

Search.propTypes = {
	classesParent: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onHandler: PropTypes.func.isRequired
}

export default Search
