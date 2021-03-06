import React, { useState } from "react";
import s from './Google.module.css'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

const GoogleAPI = () => {

    let [name, setName] = useState(null);
    let [logState, setLogState] = useState(false);

    const onSuccess = (res) => {
        setName(res.profileObj.name);
        setLogState(true)
    }

    const onFailure = (res) => {
        console.log(res);
    }

    const logOut = (res) => {
        setLogState(null)
    }
    return (
        <div className={s.google}>
            {!logState && <GoogleLogin
                clientId={'315590259705-u4otem6a8tge44qa858e7ol4nem4rt64.apps.googleusercontent.com'}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />}
            {!!logState && <div className={s.text}>{name}</div>}
            {!!logState && <GoogleLogout
                clientId={'315590259705-u4otem6a8tge44qa858e7ol4nem4rt64.apps.googleusercontent.com'}
                buttonText={"LogOut"}
                onLogoutSuccess={logOut}
            />}
        </div>
    )

}

export default GoogleAPI;