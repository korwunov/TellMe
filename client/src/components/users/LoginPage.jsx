import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginClasses from '../../styles/login.module.css'
import { useAuth } from "../../hooks/auth/AuthProvider";

//TODO: Обработка заполнения полей логина
const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
      email: "",
      password: "",
    });
    
    const auth = useAuth();

    const handleSubmitEvent = async (e) => {
      e.preventDefault();
      if (input.email !== "" && input.password !== "") {
        const result = await auth.loginAction(input);
        if (result) navigate("/")
      }
      else { alert("please provide a valid input"); }
      
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
            <div className={loginClasses.grid_block}>
                <div className={loginClasses.login_container}>
                    <h1>Вход</h1>
                    <form onSubmit={handleSubmitEvent}>
                        <div className="form_control">
                            <label htmlFor="user-email">Email:</label>
                            <input
                                type="email"
                                id="user-email"
                                name="email"
                                placeholder="Ваш email"
                                aria-describedby="user-email"
                                aria-invalid="false"
                                onChange={handleInput}
                            />
                            {/* <div id="user-email" className="sr-only">
                                Please enter a valid username. It must contain at least 6 characters.
                            </div> */}
                        </div>
                        <div className="form_control">
                            <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    aria-describedby="user-password"
                                    aria-invalid="false"
                                    onChange={handleInput}
                                />
                            {/* <div id="user-password" className="sr-only">
                                your password should be more than 6 character
                            </div> */}
                        </div>
                        <button className="btn-submit">Войти</button>
                        <div>
                            <p>Еще не зарегистрированы? <Link to="/registration">Нажмите сюда!</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
  };
  
  export default Login;

// const Login = () => {
//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.debug(email, password);
//         //api.login(formFields.email, formFields.password);
//     };

//     return (
//         <main>
//             <div className={loginClasses.grid_block}>
//                 <div className={loginClasses.login_container}>
//                     <h1>Вход</h1>
//                     <form onSubmit={handleSubmit}>
//                         <div className={loginClasses.input}>
//                             <input type='email' id='email' required placeholder='Электронная почта' value={email} onChange={(e) => setEmail(e.target.value)} />
//                         </div>
//                         <div className={loginClasses.input}>
//                             <input type='password' id='password' required placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
//                         </div>
//                         <button className={loginClasses.submit_button} onClick={handleSubmit}>Войти</button>
//                         <div>
//                             <p>Еще не зарегистрированы? <Link to="/registration">Нажмите сюда!</Link></p>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </main>
//     )
// }

// export default Login;