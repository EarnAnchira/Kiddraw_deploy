import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom";

import './AdminReg.css'

function RegisterAdmin() {
    const [fid, setFid] = useState("");
    const [fadminname, setFadminname] = useState("");
    const [fpassword, setFpassword] = useState("");
    const [ffname, setFfname] = useState("");
    const [flname, setFlname] = useState("");
    const history = useNavigate();

    const setid = (e) => {
        setFid(e.target.value)
    }

    const addUserData = async (e) => {
        e.preventDefault();

        var formData = new FormData();
        formData.append("fid", fid);
        formData.append("fadminname", fadminname);
        formData.append("fpassword", fpassword);
        formData.append("ffname", ffname);
        formData.append("flname", flname);

        if (fid === "") {
            alert("id is required")
        } else if (fadminname === "") {
            alert("admin name is required")
        } else if (fpassword === "") {
            alert("password is required")
        } else if (ffname === "") {
            alert("first name is required")
        } else if (flname === "") {
            alert("last name is required")
        } else {

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }

            const res = await axios.post("/registeradmin", formData, config);
            if (res.data.status === 202) {
                alert("This Admin Name is already exist")
            } else if (res.data.status === 201) {
                history("/loginadmin")
                alert("register success")
            } else {
                console.log("error")
            }
        }
    }

    return (
        <>
            <div className="login-member">
                <div className='page-center'>
                    <img width="150" src="/assest/navbarImg/logo_white.png"></img>
                    <Form className="login-form" style={{marginTop:"2rem"}}>
                        <Form.Control className="usernamelog" type="text" placeholder="admin id" onChange={setid} />
                        <Form.Control className="userpasslog" type="text" placeholder="@username" onChange={(e) => setFadminname(e.target.value)} />
                        <Form.Control className="userpasslog" type="text" placeholder="password" onChange={(e) => setFpassword(e.target.value)} />
                        <Form.Control className="userpasslog"  type="text" placeholder="name" onChange={(e) => setFfname(e.target.value)} />
                        <Form.Control className="userpasslog"  type="text" placeholder="surname" onChange={(e) => setFlname(e.target.value)} />
                        
                        <button className="btn-login" type="submit" onClick={addUserData}><NavLink to="/storyform"></NavLink>
                            REGISTER
                        </button>
                </Form>
                </div>
            </div>
        </>
    )
}
export default RegisterAdmin