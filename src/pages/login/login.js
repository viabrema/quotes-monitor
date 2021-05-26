import React from "react";

import {useHistory} from "react-router-dom";

function Login({onLogin}){
    const history = useHistory();

    function execute(){
        onLogin();
        history.push("/");
    }

    return(
        <button onClick={execute}>Logar</button>
    )
}

export default Login;