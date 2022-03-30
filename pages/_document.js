import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
	render() {
		return (
			<Html lang="ru">
				<Head>
					<meta charset="utf-8" />
					<meta name="keywords" content="посты, posts, комментарии, comments" />
					<meta name="description" content="Приложение FastPost позволяет быстро оставить свой пост и написать комментарии под постами других пользователей." />
					<title>FastPost</title>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument