import React from "react"
import { useAuth } from "../../hooks/auth/AuthProvider";

const Profile = () => {
    const authContext = useAuth();

    return (
        <div>
            <p>id: {authContext.user._id}</p>
            <br/>
            <p>firsrtName: {authContext.user.first_name}</p>
            <br/>
            <p>lastName: {authContext.user.last_name}</p>
            <br/>
            <p>email: {authContext.user.email}</p>
            <br/>
            <button onClick={() => authContext.logout()}>Выход</button>
        </div>
       
    )
}

export default Profile;