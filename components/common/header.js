import Link from "next/link"
import Search from "./search"
import Button from "./button"

const Header = () => {
	return (
		<header className="header">
			<div className="header__container _container">
				<div className="header__row">
					<div className="header__column">
						<Link href="/"><a>Logo</a></Link>
					</div>
					<div className="header__column">
						<Search classesParent="header" />
						<div className="header__posts-link link-posts">
							<img className="link-posts__icon" src="./icons/postsIcon.svg" alt="Иконка Посты" />
							<Link href="./posts"><a className="link-posts__ref">Посты</a></Link>
						</div>
					</div>
				</div>
				<div className="header__row header__row_second">
					<Button type="button" text="Авторизация" />
				</div>
			</div>
		</header>
	)
}

export default Header