import "../styles/style.scss"
import { wrapper } from "../store/createStore"
import Head from "next/head"
import React from "react"

const MyApp = ({ Component, pageProps }) => {
	return (
		<React.Fragment>
			<Head>
				<meta charset="utf-8" />
				<meta name="keywords" content="посты, posts, комментарии, comments" />
				<meta name="description" content="Приложение FastPost позволяет быстро оставить свой пост и написать комментарии под постами других пользователей." />
				<title>FastPost</title>
			</Head>
			<div className="wrapper">
				<Component {...pageProps} />
			</div>
		</React.Fragment>
	)
}

export default wrapper.withRedux(MyApp)