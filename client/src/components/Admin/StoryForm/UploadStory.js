import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { Scrollbars } from "react-custom-scrollbars"

function StoryForm() {
    const { AdminName } = useParams("");
    const [fid, setFid] = useState("");
    const [fstorytitleeng, setFstorytitleeng] = useState("");
    const [fstorytitlethai, setFstorytitlethai] = useState("");
    const [fauthor, setFauthor] = useState("");
    const [fintroductionstoryeng, setFintroductionstoryeng] = useState("");
    const [fintroductionstorythai, setFintroductionstorythai] = useState("");
    const [fpublishername, setFpublishername] = useState("");
    const [fdatepublication, setFdatepublication] = useState("");
    const [file, setFile] = useState("");
    const history = useNavigate();

    const setid = (e) => {
        setFid(e.target.value)
    }
    const setimgfile = (e) => {
        setFile(e.target.files[0])
    }

    const getUserData = async () => {
        const res = await axios.get(`/storyform/${AdminName}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (res.data.status === 201) {
            console.log("data get get get get");
        } else {
            console.log("error")
        }
    }

    const addUserData = async (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append("photo", file)
        formData.append("fid", fid);
        formData.append("fstorytitleeng", fstorytitleeng);
        formData.append("fstorytitlethai", fstorytitlethai);
        formData.append("fauthor", fauthor);
        formData.append("fintroductionstoryeng", fintroductionstoryeng);
        formData.append("fintroductionstorythai", fintroductionstorythai);
        formData.append("fpublishername", fpublishername);
        formData.append("fdatepublication", fdatepublication);
        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        const res = await axios.post(`/storyform/${AdminName}`, formData, config);
        if (res.data.status === 201) {
            history(`/homeadmin/${AdminName}`)
        } else {
            console.log("error")
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <>
            <div className='PageLabel'>
                    <h1> UPLOAD STORY </h1>
            </div>

                <div className='Form'>
                    <Scrollbars style={{ width: 700, height: 500 }}>
                        
                    <div className='FormInfo'>
                        <Form className="story-form">
                            <Form.Group>
                                <div className="label_form">
                                    STORY ID
                                </div>
                                <Form.Control className='formbox' type="text"  placeholder="000000" onChange={setid} />
                            </Form.Group>

                            <Form.Group>
                                <div className="label_form">
                                    COVER IMAGE
                                </div>
                                <Form.Control className='formbox' type="file" onChange={setimgfile} />
                            </Form.Group>

                            <Form.Group>
                                <div className="label_form">
                                    ENGLISH TITLE 
                                </div>
                                <Form.Control className='formbox' type="text" placeholder="Title" onChange={(e) => setFstorytitleeng(e.target.value)}/>
                            </Form.Group>

                            <Form.Group>
                                <div className="label_form">
                                    THAI TITLE 
                                </div>
                                <Form.Control className='formbox' type="text" placeholder="ชื่อเรื่อง" onChange={(e) => setFstorytitlethai(e.target.value)}/>
                            </Form.Group>
                            
                            <Form.Group>
                                <div className="label_form">
                                    ENGLISH STORY's INTRODUCTION
                                </div>
                                <Form.Control className='formbox' type="text"  placeholder="Short Introduction About This Story" onChange={(e) => setFintroductionstoryeng(e.target.value)} />
                            </Form.Group>

                            <Form.Group>
                                <div className="label_form">
                                    THAI STORY's INTRODUCTION
                                </div>
                                <Form.Control className='formbox' type="text" placeholder="เนื้อเรื่องย่อของนิทานเรื่องนี้" onChange={(e) => setFintroductionstorythai(e.target.value)} />
                            </Form.Group>
                            
                            <Form.Group>
                                <div className="label_form">
                                    AUTHOR
                                </div>
                                <Form.Control className='formbox' type="text" placeholder="Author's Name" onChange={(e) => setFauthor(e.target.value)}/>
                            </Form.Group>

                            <Form.Group>
                                <div className="label_form">
                                    PUBLISHER
                                </div>
                                <Form.Control className='formbox' type="text" placeholder="Publisher's Name" onChange={(e) => setFpublishername(e.target.value)}/>
                            </Form.Group>

                            <Form.Group>
                                <div className="label_form">
                                    DATE PUBLICATION
                                </div>
                                <Form.Control className='formbox' type="text"  placeholder="dd-mm-yyyy" onChange={(e) => setFdatepublication(e.target.value)}/>
                            </Form.Group>

                            <button className="next_btn" style={{marginTop:"2.8rem"}} type="submit" onClick={addUserData}>
                                ADD STORY
                            </button>
                        </Form>
                    </div>

                    </Scrollbars>
                </div>


        </>
    )
}

export default StoryForm