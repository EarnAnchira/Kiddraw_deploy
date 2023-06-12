import React, { useState } from 'react'
import axios from "axios"
import { useNavigate} from "react-router-dom"
import Form from 'react-bootstrap/Form';

function LoginAdmin() {
    const [AdminName, setAdminName] = useState("")
    const [Password, setPassword] = useState("")
    const history = useNavigate();

    const login = () => {
        axios.post(`/loginadmin/${AdminName}`, {
            AdminName: AdminName,
            Password: Password,
        }).then((response) => {
            if (response.data.message) {
                alert("Wrong admin name/password cobination")
            } else {
                history(`/homeadmin/${AdminName}`)
                alert("login success")
            }
            console.log(response.data);
        });
    };

    const register = () => {
                history(`/registeradmin`)
    };
    return (
        <>
            <div className="login-member">
                <div className='page-center'>
                    <img width="200" src="/assest/navbarImg/logo_white.png"></img>
                    <div className="welcome-alert"> 
                        <h2>Hello Adm!n</h2>
                    </div>

                    <Form className="login-form">
                        <Form.Control className="usernamelog" type="text" placeholder="username"  onChange={(e) => setAdminName(e.target.value)} />
                        <Form.Control className="userpasslog" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    </Form>
                
                    <button className="btn-login" type="submit" onClick={login}>
                        LOG IN
                    </button>
                    <br></br>
                    <button className="btn-regis" type="submit" onClick={register} >
                        register
                    </button>
                </div>
            </div>
        </>
    )
}

export default LoginAdmin