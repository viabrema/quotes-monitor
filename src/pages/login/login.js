import React, { useState } from "react";
import "./login.css";

import { useHistory } from "react-router-dom";

function Login({ onLogin }) {
    const history = useHistory();
    const [selectedHelp] = useState(1);

    function execute() {
        onLogin();
        history.push("/");
    }

    return (
        <div className="page-login">
            <div className="wellcome">
                <ul>
                    {(selectedHelp === 1 && <li>
                        <h1>Bem Vindo!</h1>
                        <p>
                            Olá <strong>Rafael</strong>, <strong>Gabriel</strong>, ou qualquer outro interessado nessa aplicação que esteja lendo esse texto. Esse monitor de cotações foi desenvolvido para fins didáticos ao mostrar um pouco do meu conhecimento prático com React.
                        </p>
                        <p>
                            Esse sistema foi levantado em aproximadamente 12 horas e trata-se de um monitor de cotações de mercado financeiro em realtime,  utilizando uma Fake API que gera valores de dados aleatórios com uma grid de cotações em tempo real que interage diretamente com um gráfico desenvolvido manualmente em SVG.
                        </p>
                    </li>)}

                </ul>
                <button type="button" onClick={execute}>Entrar</button>
            </div>
        </div>
    )
}

export default Login;