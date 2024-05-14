import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registClasses from '../../styles/login.module.css';
import { useAuth } from "../../hooks/auth/AuthProvider";

//TODO: Обработка заполнения полей регистрации
const Registration = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.debug(input.firstName, input.lastName, input.email, input.password);
        if (input.email !== "" && input.password !== "" && input.firstName !== "" && input.lastName !== "") {
            let result = await auth.registerAction(input);
            if (result) navigate("/login");
        }
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

    return (
        <main>
            <div className={registClasses.grid_block}>
                <div className={registClasses.login_container}>
                    <h1>Регистрация</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={registClasses.input}>
                            <input id='firstName' placeholder='Имя' name="firstName" onChange={handleInput} />
                        </div>
                        <div className={registClasses.input}>
                            <input id='lastName' placeholder='Фамилия' name="lastName" onChange={handleInput} />
                        </div>
                        <div className={registClasses.input}>
                            <input type='email' id='email' placeholder='Электронная почта' name="email" onChange={handleInput} />
                        </div>
                        <div className={registClasses.input}>
                            <input type='password' id='password' placeholder='Пароль' name="password" onChange={handleInput} />
                        </div>
                        <button className={registClasses.submit_button}>Зарегистрироваться</button>
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