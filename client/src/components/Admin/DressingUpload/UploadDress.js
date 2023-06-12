import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { Scrollbars } from "react-custom-scrollbars"

function UploadDressing() {
    const { AdminName } = useParams("");
    const [file, setFile] = useState("");
    const [DressingType, setDressingType] = useState('');
    const history = useNavigate();

    const setimgfile = (e) => {
        setFile(e.target.files[0])
    }

    const addUserData = async (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append("photo", file)
        formData.append("DressingType", DressingType)
        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        const res = await axios.post(`/uploaddressing/${AdminName}`, formData, config);
        if (res.data.status === 201) {
            history(`/homeadmin/${AdminName}`)
        } else {
            console.log("error")
        }
    }

    return (
        <>
            <div className='PageLabel'>
                    <h1> UPLOAD DRESSING </h1>
            </div>

            <div className='Form'>
                <Scrollbars style={{ width: 700, height: 500 }}>
                    
                <div className='FormInfo'>
                    <Form className="story-form">
                        <Form.Group>
                            <div className="label_form">
                                SELECT TYPE
                            </div>
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                                style={{width:"400px"}}
                                name='DressingType' onChange={event => setDressingType(event.target.value)} >
                                <option selected>Open this select dressing type</option>
                                <option value="Head">Head</option>
                                <option value="Body">Body</option>
                            </select>
                        </Form.Group>

                        <Form.Group>
                            <div className="label_form">
                                UPLOAD IMAGE
                            </div>
                            <Form.Control className='formbox' type="file" onChange={setimgfile} />
                        </Form.Group>
                    
                        <button className="next_btn" style={{marginTop:"3rem"}} type="submit" onClick={addUserData} >
                            ADD
                        </button>
                    </Form>
                </div>

                </Scrollbars>
            </div>
        </>
    )
}

export default UploadDressing