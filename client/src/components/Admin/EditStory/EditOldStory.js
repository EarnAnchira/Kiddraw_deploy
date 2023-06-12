import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"

import Form from 'react-bootstrap/Form';
import { Scrollbars } from "react-custom-scrollbars"

function EditStory() {
    const { StoryID } = useParams("");
    const { AdminName } = useParams("");
    const history = useNavigate();
    const [data, setData] = useState([]);
    const [StoryTitleEng, setStoryTitleEng] = useState('');
    const [StoryTitleThai, setStoryTitleThai] = useState('');
    const [Author, setAuthor] = useState('');
    const [IntroductionStoryEng, setIntroductionStoryEng] = useState('');
    const [IntroductionStoryThai, setIntroductionStoryThai] = useState('');
    const [PublisherName, setPublisherName] = useState('');
    const [DatePublication, setDatePublication] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`/updatestory/${StoryID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ StoryTitleEng, StoryTitleThai, Author, IntroductionStoryEng, IntroductionStoryThai, PublisherName, DatePublication })
        });
        const message = await response.text();
        console.log(message);
        history(`/homeadmin/${AdminName}`)
    };

    const getData = async () => {
        const res = await fetch(`/getdata/${StoryID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {
            console.log("error ");
        } else {
            setData(data[0])
            console.log("get data");
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
        <div className='PageLabel'>
                <h1> EDIT STORY </h1>
        </div>

        <div className='Form'>
            <Scrollbars style={{ width: 700, height: 500 }}>
                
            <div className='FormInfo'>
                <Form className="story-form">
                    <Form.Group>
                        <div className="label_form">
                            ENGLISH TITLE 
                        </div>
                        <Form.Control className='formbox' type="text" value={StoryTitleEng} placeholder={data.StoryTitleEng} onChange={(e) => setStoryTitleEng(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <div className="label_form">
                            THAI TITLE 
                        </div>
                        <Form.Control className='formbox' type="text" value={StoryTitleThai} placeholder={data.StoryTitleThai} onChange={(e) => setStoryTitleThai(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <div className="label_form">
                            ENGLISH STORY's INTRODUCTION
                        </div>
                        <Form.Control className='formbox' type="text" value={IntroductionStoryEng} placeholder={data.IntroductionStoryEng} onChange={(e) => setIntroductionStoryEng(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <div className="label_form">
                            THAI STORY's INTRODUCTION
                        </div>
                        <Form.Control className='formbox' type="text" value={IntroductionStoryThai} placeholder={data.IntroductionStoryThai} onChange={(e) => setIntroductionStoryThai(e.target.value)} />
                    </Form.Group>
                    
                    <Form.Group>
                        <div className="label_form">
                            AUTHOR
                        </div>
                        <Form.Control className='formbox' type="text" value={Author} placeholder={data.Author} onChange={(e) => setAuthor(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <div className="label_form">
                            PUBLISHER
                        </div>
                        <Form.Control className='formbox' type="text" value={PublisherName} placeholder={data.PublisherName} onChange={(e) => setPublisherName(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <div className="label_form">
                            DATE PUBLICATION
                        </div>
                        <Form.Control className='formbox' type="text" value={DatePublication} placeholder={data.DatePublication} onChange={(e) => setDatePublication(e.target.value)} />
                    </Form.Group>

                    <button className="next_btn" style={{marginTop:"2.8rem"}} type="submit">
                        UPDATE
                    </button>
                </Form>
            </div>

            </Scrollbars>
        </div>
    </>
    );
}
export default EditStory;
