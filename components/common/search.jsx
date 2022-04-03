import PropTypes from "prop-types"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setSearchValuePosts } from "../../store/searchPosts"

const Search = ({ classesParent }) => {
	const [value, setValue] = useState("")
	const dispatch = useDispatch()
	const handlerChange = ({ target }) => setValue(prevState => target.value)
	dispatch(setSearchValuePosts(value))
	return (
		<div className={`${classesParent}__search search-block`}>
			<div className="search-block__wrap">
				<label htmlFor="search"><img className="search-block__icon" src="/icons/search.svg" alt="Иконка поиска" /></label>
				<input onChange={handlerChange} value={value} className="search-block__input" name="search" id="search" placeholder="Поиск постов" />
			</div>
		</div>
	)
}

Search.propTypes = {
	classesParent: PropTypes.string.isRequired
}

export default Search
