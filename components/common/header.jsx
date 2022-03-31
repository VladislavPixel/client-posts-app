import Link from "next/link"
import PropTypes from "prop-types"
import Search from "./search"
import Button from "./button"
import Router from "next/router"

const Header = ({ isSearch, isAuthBtn }) => {
	const handlerAuthBtn = () => Router.push("/authorization")
	return (
		<header className="header">
			<div className="header__container _container">
				<div className="header__row header__row_first">
					<div className="header__column">
						<Link href="/"><a className="header__logo">Logo</a></Link>
					</div>
					<div className="header__column header__column_second">
						{isSearch && <Search classesParent="header" />}
						<div className="header__posts-link link-posts">
							<img className="link-posts__icon" src="./icons/postsIcon.svg" alt="Иконка постов" />
							<Link href="/posts"><a className="link-posts__ref">Посты</a></Link>
						</div>
					</div>
				</div>
				{isAuthBtn &&
					<div className="header__row header__row_second">
						<Button onCallFun={handlerAuthBtn} type="button" text="Авторизация" classesParent="header" />
					</div>
				}
			</div>
		</header>
	)
}

Header.defaultProps = {
	isSearch: true,
	isAuthBtn: true
}

Header.propTypes = {
	isSearch: PropTypes.bool.isRequired,
	isAuthBtn: PropTypes.bool.isRequired
}

export default Header