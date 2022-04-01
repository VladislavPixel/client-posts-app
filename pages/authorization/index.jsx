import { useState } from "react"
import AuthorizationLayot from "../../layots/authorizationLayot"
import Button from "../../components/common/button"
import Router from "next/router"
import FormComponent, { TextField } from "../../components/common/form"

const AuthorizationPage = () => {
	const [dataAuth] = useState({
		UserName: "",
		Password: ""
	})
	const handlerBackBtn = () => Router.push("/")
	const icon = <img className="authorization-block__icon-btn" src="/icons/arrowDouble.svg" alt="Иконка двойной трелки" />
	const handlerSubmitForm = (data) => {
		console.log(data, "Пошла отправка данных")
	}
	const configError = {
		UserName: {
			isRequired: { message: `Поле "Имя" обязательно для заполнения.` },
		},
		Password: {
			isRequired: { message: `Поле "Пароль" обязательно для заполнения.` }
		}
	}
	return (
		<AuthorizationLayot>
			<div className="container-content__block-authorization authorization-block">
				<div className="authorization-block__container _container">
					<Button type="button" text="Назад" classesParent="authorization-block" onCallFun={handlerBackBtn} icon={icon} isIcon={true} />
					<h1 className="authorization-block__title title">Страница Авторизации</h1>
					<div className="authorization-block__container-form">
						<FormComponent config={configError} dataDefault={dataAuth} classesParent="authorization-block" onSubmit={handlerSubmitForm}>
							<TextField classesParent="authorization-block" name="UserName" label="Имя пользователя:" placeholder="введите имя пользователя" />
							<TextField isPassword={true} type="password" classesParent="authorization-block" name="Password" label="Пароль:" placeholder="введите пароль" />
							<button type="submit" className="authorization-block__button-sub">Авторизоваться</button>
						</FormComponent>
					</div>
				</div>
			</div>
		</AuthorizationLayot>
	)
}

export default AuthorizationPage