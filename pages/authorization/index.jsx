import { useState } from "react"
import AuthorizationLayot from "../../layots/authorizationLayot"
import Button from "../../components/common/button"
import Router from "next/router"
import FormComponent, { TextField } from "../../components/common/form"

const AuthorizationPage = () => {
	const [dataAuth, setDataAuth] = useState({
		UserName: "",
		Password: ""
	})
	const handlerBackBtn = () => Router.push("/")
	const icon = <img className="authorization-block__icon-btn" src="./icons/arrowTriangle.svg" alt="Иконка треугольной стрелки" />
	const handlerSubmitForm = () => {
		console.log("Отправляю данные")
	}
	return (
		<AuthorizationLayot>
			<div className="container-content__block-authorization authorization-block">
				<div className="authorization-block__container _container">
					<Button type="button" text="Назад" classesParent="authorization-block" onCallFun={handlerBackBtn} icon={icon} isIcon={true} />
					<h1 className="authorization-block__title title">Страница авторизации</h1>
					<FormComponent dataDefault={dataAuth} classesParent="authorization-block" onSubmit={handlerSubmitForm}>
						<TextField classesParent="authorization-block" name="UserName" label="Имя пользователя:" placeholder="введите имя пользователя" />
						<TextField classesParent="authorization-block" name="Password" label="Пароль:" placeholder="введите пароль" />
					</FormComponent>
				</div>
			</div>
		</AuthorizationLayot>
	)
}

export default AuthorizationPage