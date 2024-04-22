import React from "react";
import { Link } from "react-router-dom";
import registClasses from '../../styles/login.module.css';

//TODO: Обработка заполнения полей регистрации
const Registration = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.debug(firstName, lastName, email, password);
        //api.register(formFields.email, formFields.password);
    };

    return (
        <main>
            <div className={registClasses.grid_block}>
                <div className={registClasses.login_container}>
                    <h1>Регистрация</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={registClasses.input}>
                            <input id='firstName' placeholder='Имя' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className={registClasses.input}>
                            <input id='lastName' placeholder='Фамилия' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className={registClasses.input}>
                            <input type='email' id='email' placeholder='Электронная почта' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={registClasses.input}>
                            <input type='password' id='password' placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className={registClasses.submit_button} onClick={handleSubmit}>Зарегистрироваться</button>
                        <div>
                            <p>Уже зарегистрированы? <Link to="/login">Нажмите сюда!</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Registration;