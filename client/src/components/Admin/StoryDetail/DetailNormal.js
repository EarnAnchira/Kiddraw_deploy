import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Scrollbars } from "react-custom-scrollbars"
import { useParams } from "react-router-dom"

function StoryDetailFormNormal() {
    const { StoryID } = useParams("");
    const { AdminName } = useParams("");
    const [StoryDetailThai, setStoryDetailThai] = useState('');
    const [StoryDetailEng, setStoryDetailEng] = useState('');
    const [PageNo, setPageNo] = useState('');
    const [PageNoAnswer1Extra, setPageNoAnswer1Extra] = useState('');
    const [PageNoAnswer2Extra, setPageNoAnswer2Extra] = useState('');

    const [PageNoNext, setPageNoNext] = useState('');
    const [Storyid, setStoryID] = useState('');
    const [PageType, setPageType] = useState('');
    const [SceneImage, setFile] = useState("");
    const history = useNavigate();

    const setimgfile = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        var formData = new FormData();
        formData.append("photo", SceneImage)
        formData.append("StoryDetailThai", StoryDetailThai);
        formData.append("StoryDetailEng", StoryDetailEng);
        formData.append("PageNo", PageNo)
        formData.append("StoryID", StoryID);
        formData.append("PageType", PageType);
        formData.append("PageNoNext", PageNoNext);
        formData.append("PageNoAnswer1Extra", PageNoAnswer1Extra);
        formData.append("PageNoAnswer2Extra", PageNoAnswer2Extra);
        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        axios.post('/storydetailnormal', formData, config)
            .then(response => {
                console.log(response.data);
                history(`/homeadmin/${AdminName}`)
                alert("add story detail success")
            })
            .catch(error => {
                console.error(error);
            });
    }

    const options = [];
    for (let i = 1; i <= 50; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }

    return (
        <>
            <div className='PageLabel'>
                        <h1>STORY DETAIL</h1>
                </div>

                    <div className='Form'>
                        
                    <div className='FormInfo'>
                        <Form className="story-form">
                            <Form.Group>
                                <div className="label_form">
                                    STORY ID
                                </div>
                                <Form.Control className='formbox' type="text" name='StoryID' value={StoryID} onChange={event => setStoryID(event.target.value)} />
                            </Form.Group>

                            <Form.Group>
                                <div className="label_form">
                                    PAGE NUMBER
                                </div>
                                <Form.Control className='formbox' type="text" name='PageNo' onChange={event => setPageNo(event.target.value)} />
                            </Form.Group>

                            <Form.Group>
                                <div className="label_form">
                                    PAGE TYPE
                                </div>
                                <Form.Control className='formbox' type="text" name='PageType' value={"normal"} onChange={event => setPageType(event.target.value)} />
                            </Form.Group>

                            <Form.Group>
                                <div className="label_form">
                                    SCREEN IMAGE
                                </div>
                                <Form.Control className='formbox' type="file" name='SceneImage' onChange={setimgfile} />
                            </Form.Group>

                            <Form.Group>
                                <div className="label_form">
                                    ENGLISH STORY
                                </div>
                                <Form.Control className='formbox' as="textarea" rows={3} name='StoryDetailEng' onChange={event => setStoryDetailEng(event.target.value)} />
                            </Form.Group>

                            <Form.Group>
                                <div className="label_form">
                                    THAI STORY
                                </div>
                                <Form.Control className='formbox' as="textarea" rows={3} name='StoryDetailThai' onChange={event => setStoryDetailThai(event.target.value)} />
                            </Form.Group>

                            <Form.Group>
                                <div className="label_form">
                                    NEXT PAGE
                                </div>
                                <select className='formbox' aria-label=".form-select-lg example"
                                    name='PageNoNext' onChange={event => setPageNoNext(event.target.value)} >
                                    <option selected value=""></option>
                                    <option value="end">end</option>
                                    {options}
                                </select>                            
                            </Form.Group>

                            <Form.Group>
                                <div className="label_form">
                                    NEXT PAGE - answer 1
                                </div>
                                <select className='formbox' aria-label=".form-select-lg example"
                                    name='PageNoAnswer1Extra' onChange={event => setPageNoAnswer1Extra(event.target.value)} >
                                    <option selected value=""></option>
                                    {options}
                                </select>                       
                            </Form.Group>
                            
                            <Form.Group>
                                <div className="label_form">
                                    NEXT PAGE - answer 2
                                </div>
                                <select className='formbox' aria-label=".form-select-lg example"
                                    name='PageNoAnswer2Extra' onChange={event => setPageNoAnswer2Extra(event.target.value)} >
                                    <option selected value=""></option>
                                    {options}
                            </select>                   
                            </Form.Group>

                            <button className="next_btn" style={{marginTop:"2.8rem"}} type="submit" onClick={handleSubmit}>
                                ADD PAGE
                            </button>
                    </Form>
                </div>

            </div>

        </>
    );
}

export default StoryDetailFormNormal