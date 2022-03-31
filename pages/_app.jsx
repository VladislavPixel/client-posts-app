import "../styles/style.scss"
import { Provider } from "react-redux"
import createStore from "../store/createStore"

const store = createStore()

const MyApp = ({ Component, pageProps }) => {
	return (
		<div className="wrapper">
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</div>
	)
}

export default MyApp