import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Scrollbars } from "react-custom-scrollbars"
import { useParams } from "react-router-dom"

function StoryDetailForm() {
    const { StoryID } = useParams("");
    const { AdminName } = useParams("");
    const [StoryDetailThai, setStoryDetailThai] = useState('');
    const [StoryDetailEng, setStoryDetailEng] = useState('');
    const [PageNo, setPageNo] = useState('');
    const [Storyid, setStoryID] = useState('');
    const [PageType, setPageType] = useState('');
    const [QuestionEng, setQuestionEng] = useState('');
    const [QuestionThai, setQuestionThai] = useState('');
    const [AnswerEng1, setAnswerEng1] = useState('');
    const [AnswerThai1, setAnswerThai1] = useState('');
    const [AnswerEng2, setAnswerEng2] = useState('');
    const [AnswerThai2, setAnswerThai2] = useState('');
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
        formData.append("QuestionEng", QuestionEng)
        formData.append("QuestionThai", QuestionThai)
        formData.append("AnswerEng1", AnswerEng1);
        formData.append("AnswerThai1", AnswerThai1);
        formData.append("AnswerEng2", AnswerEng2);
        formData.append("AnswerThai2", AnswerThai2);
        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        axios.post('/storydetail', formData, config)
            .then(response => {
                console.log(response.data);
                history(`/homeadmin/${AdminName}`)
                alert("add story detail success")
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <>
            <div className="container mt-2">
                <h1 className='text-center mt-2' style={{ color: 'white' }}>UPLOAD STORY DETAIL</h1>
                <Scrollbars style={{ swidth: 400, height: 600 }}>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'white' }}>Story ID</Form.Label>
                            <Form.Control type="text" name='StoryID' value={StoryID} onChange={event => setStoryID(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'white' }}>PageNo</Form.Label>
                            <Form.Control type="text" name='PageNo' onChange={event => setPageNo(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'white' }}>Story Detail Eng</Form.Label>
                            <Form.Control type="text" name='StoryDetailEng' onChange={event => setStoryDetailEng(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'white' }}>Story Detail Thai</Form.Label>
                            <Form.Control type="text" name='StoryDetailThai' onChange={event => setStoryDetailThai(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'white' }}>SceneImage</Form.Label>
                            <Form.Control type="file" name='SceneImage' onChange={setimgfile} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'white' }}>Page Type</Form.Label>
                            {/* <Form.Control type="text" name='PageType' onChange={event => setPageType(event.target.value)} /> */}
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                                name='PageType' onChange={event => setPageType(event.target.value)} >
                                <option selected>Open this select page type</option>
                                <option value="normal">normal</option>
                                <option value="alternative">alternative
                                </option>
                            </select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'white' }}>English Question</Form.Label>
                            <Form.Control type="text" name='QuestionEng' onChange={event => setQuestionEng(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'white' }}>Thai Question</Form.Label>
                            <Form.Control type="text" name='QuestionThai' onChange={event => setQuestionThai(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'white' }}>English Answer 1</Form.Label>
                            <Form.Control type="text" name='AnswerEng1' onChange={event => setAnswerEng1(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'white' }}>Thai Answer 1</Form.Label>
                            <Form.Control type="text" name='AnswerThai1' onChange={event => setAnswerThai1(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'white' }}>English Answer 2</Form.Label>
                            <Form.Control type="text" name='AnswerEng2' onChange={event => setAnswerEng2(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: 'white' }}>Thai Answer 2</Form.Label>
                            <Form.Control type="text" name='AnswerThai2' onChange={event => setAnswerThai2(event.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            ADD STORY
                        </Button>
                    </Form>
                </Scrollbars>
            </div>
        </>
    );
}
export default StoryDetailForm