import Link from "next/link"
import PropTypes from "prop-types"
import Search from "./search"
import Button from "./button"
import Router from "next/router"
import { useRef, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getValueIsAuthUser } from "../../store/userAuth"

const Header = ({ isSearch, isAuthBtn, isPostLayot }) => {
	const refHeader = useRef(null)
	const [isShow, setShow] = useState(true)
	const [widthHeader, setWidthHeader] = useState(null)
	const handlerAuthBtn = () => Router.push("/authorization")
	const isAuth = false
	useEffect(() => {
		setWidthHeader(refHeader.current.offsetWidth)
	}, [])
	useEffect(() => {
		if (widthHeader <= 400 && isPostLayot) setShow(false)
		if (widthHeader > 400 && isPostLayot) setShow(true)
	}, [widthHeader, isPostLayot])
	return (
		isShow ?
			<header ref={refHeader} className="header">
				<div className="header__container _container">
					<div className="header__row header__row_first">
						<div className="header__column">
							<Link href="/"><a className="header__logo">Logo</a></Link>
						</div>
						<div className="header__column header__column_second">
							{isSearch && <Search classesParent="header" />}
							<div className="header__posts-link link-posts">
								<img className="link-posts__icon" src="/icons/postsIcon.svg" alt="Иконка постов" />
								<Link href="/posts"><a className="link-posts__ref">Посты</a></Link>
							</div>
						</div>
					</div>
					{isAuthBtn &&
						<div className="header__row header__row_second">
							{!isAuth ? 
								<Button onCallFun={handlerAuthBtn} type="button" text="Авторизация" classesParent="header" /> :
								<p className="header__message-auth">Вы авторизованы в сервисе просмотра постов!</p>
							}
						</div>
					}
				</div>
			</header> : null
	)
}

Header.defaultProps = {
	isSearch: true,
	isAuthBtn: true,
	isPostLayot: false
}

Header.propTypes = {
	isSearch: PropTypes.bool.isRequired,
	isAuthBtn: PropTypes.bool.isRequired,
	isPostLayot: PropTypes.bool.isRequired
}

export default Header