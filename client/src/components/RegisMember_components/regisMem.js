import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useNavigate } from "react-router-dom"

function RegisterMember() {
    const [fusername, setFusername] = useState("");
    const [fpassword, setFpassword] = useState("");
    const [ffname, setFfname] = useState("");
    const [flname, setFlname] = useState("");
    const [file, setFile] = useState("");
    const history = useNavigate();

    const setimgfile = (e) => {
        setFile(e.target.files[0])
    }

    const addUserData = async (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append("photo", file)
        formData.append("fusername", fusername);
        formData.append("fpassword", fpassword);
        formData.append("ffname", ffname);
        formData.append("flname", flname);
        if (fusername === "") {
            alert("user name is required")
        } else if (fpassword === "") {
            alert("password is required")
        } else if (ffname === "") {
            alert("first name is required")
        } else if (flname === "") {
            alert("last name is required")
        } else if (file === "") {
            alert("photo is required")
        } else {
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
            const res = await axios.post("/registermember", formData, config);
            if (res.data.status === 202) {
                alert("This User Name is already exist")
            } else if (res.data.status === 201) {
                alert("register success")
                history("/loginmember")
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
                        <Form.Control className="usernamelog" type="text" placeholder="@username" onChange={(e) => setFusername(e.target.value)} />
                        <Form.Control className="userpasslog" type="text" placeholder="Password" onChange={(e) => setFpassword(e.target.value)} />
                        <Form.Control className="userpasslog" type="text" placeholder="name" onChange={(e) => setFfname(e.target.value)} />
                        <Form.Control className="userpasslog" type="text" placeholder="surname" onChange={(e) => setFlname(e.target.value)} />

                        <Form.Group className="ProfilePic">
                            <div className="label_form">
                                PROFILE PICTURE
                            </div>
                            <Form.Control className="profilepic" type="file" onChange={setimgfile} />
                        </Form.Group>
                 

                    <button className="btn-login" type="submit" onClick={addUserData}>
                        REGISTER
                    </button>
                </Form>

                   
                </div>
            </div>
        </>
    )
}
export default RegisterMember