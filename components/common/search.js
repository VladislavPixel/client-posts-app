const Search = ({ classes }) => {
	return (
		<div className={`${classes}__search search-block`}>
			<div className="search-block__wrap">
				<img className="search-block__icon" src="./icons/search.svg" alt="Иконка поиска" />
				<input className="search-block__input" name="search" />
			</div>
		</div>
	)
}

export default Search
