import React from "react";
import { Link } from "react-router-dom";
import loginClasses from '../../styles/login.module.css'

//TODO: Обработка заполнения полей логина
const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.debug(email, password);
        //api.login(formFields.email, formFields.password);
    };

    return (
        <main>
            <div className={loginClasses.grid_block}>
                <div className={loginClasses.login_container}>
                    <h1>Вход</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={loginClasses.input}>
                            <input type='email' id='email' required placeholder='Электронная почта' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={loginClasses.input}>
                            <input type='password' id='password' required placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className={loginClasses.submit_button} onClick={handleSubmit}>Войти</button>
                        <div>
                            <p>Еще не зарегистрированы? <Link to="/registration">Нажмите сюда!</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login;