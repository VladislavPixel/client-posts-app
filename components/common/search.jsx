import PropTypes from "prop-types"

const Search = ({ classesParent }) => {
	return (
		<div className={`${classesParent}__search search-block`}>
			<div className="search-block__wrap">
				<label htmlFor="search"><img className="search-block__icon" src="/icons/search.svg" alt="Иконка поиска" /></label>
				<input className="search-block__input" name="search" id="search" placeholder="Поиск постов" />
			</div>
		</div>
	)
}

Search.propTypes = {
	classesParent: PropTypes.string.isRequired
}

export default Search
