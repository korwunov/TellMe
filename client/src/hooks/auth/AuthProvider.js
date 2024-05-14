import { useContext, createContext, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user_data")) || null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    const url = process.env.REACT_APP_HOST_URL;

    const loginAction = async (data) => {
        try {
            const response = await fetch(url + 'api/users/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const res = await response.json();
            if (res.token) {
                setUser(res.user);
                setToken(res.token);
                localStorage.setItem("token", res.token);
                localStorage.setItem("user_data", JSON.stringify(res.user));
                return true;
            }
            if (response.status === 400) {
                alert("Введены неверные логин или пароль");
                return false;
            }
            throw new Error(res.message);
        } catch (err) {
            console.error(err);
        }
    };

    const logout = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("token");
        localStorage.removeItem("user_data");
        return <Navigate to="/" />;
    };

    const registerAction = async (data) => {
        const response = await fetch(url + 'api/users/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.status === 201) {
            return true;
        }
        else {
            alert('Ошибка регистрации пользователя');
            return false;
        }
    }

    return (
        <AuthContext.Provider value={{ token, user, loginAction, registerAction, logout }}>
        {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};