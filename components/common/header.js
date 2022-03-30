import Link from "next/link"
import Search from "./search"
import Button from "./button"

const Header = () => {
	const handlerAuthBtn = () => console.log("Авторизация")
	return (
		<header className="header">
			<div className="header__container _container">
				<div className="header__row header__row_first">
					<div className="header__column">
						<Link href="/"><a className="header__logo">Logo</a></Link>
					</div>
					<div className="header__column header__column_second">
						<Search classesParent="header" />
						<div className="header__posts-link link-posts">
							<img className="link-posts__icon" src="./icons/postsIcon.svg" alt="Иконка постов" />
							<Link href="/posts"><a className="link-posts__ref">Посты</a></Link>
						</div>
					</div>
				</div>
				<div className="header__row header__row_second">
					<Button onCallFun={handlerAuthBtn} type="button" text="Авторизация" classesParent="header" />
				</div>
			</div>
		</header>
	)
}

export default Header