import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import moment from "moment";
import Alert from 'react-bootstrap/Alert';
import Scrollbars from 'react-custom-scrollbars';
import Form from 'react-bootstrap/Form';

import BookIcon from './books.png';
import CharacterIcon from './CharacterIcon.png';

import './AdminHome.css'
const HomeAdminPage = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = () => {
        const filtered = data.filter((el) =>
            el.StoryTitleEng.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const getUserData = async () => {
        const res = await axios.get("/getdata", {
            params: { q: query },
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (res.data.status === 201) {
            console.log("data get");
            handleFilter()
            setData(res.data.data);
            setFilteredData(res.data.data);
        }
        else {
            console.log("error")
        }
    }

    const dltStory = async (StoryID) => {
        console.log(StoryID)
        const res = await axios.delete(`/${StoryID}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (res.data.status === 201) {
            getUserData()
            setShow(true)
        } else {
            console.log("error")
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <>
            {
                show ?
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        Delete
                    </Alert> : ""
            }

            <div className='PageLabel'>
                <h1>UPDATE NEW ONE</h1>
            </div>

            <div class="container">
                    <div class="section-offer-wrapper">
                        <div class="section-offer-content">
                            <div className="NewStory-wrapper">

                                <NavLink to={`storyform`} className="text-decoration-none text-light">
                                    <div className="NewStory-rectangle" 
                                        style={{
                                            backgroundColor:"#D287FF",
                                            boxShadow: "inset 0 -10px 0 #A002FF",
                                            filter: "grayscale(100%) sepia(100%)"
                                        }}>
                                        <a className="NewStory-info">
                                            <img src={BookIcon} style={{ width: '200px'}} />
                                            <div className="NewStory-THtitle" style={{color:"#1C0A25", fontSize:"25px"}}> NEW STORY</div>
                                        </a>
                                    </div>
                                </NavLink>

                                <NavLink to={`uploaddressing`} className="text-decoration-none text-light">
                                    <div className="NewStory-rectangle"
                                        style={{
                                            backgroundColor:"#D287FF",
                                            boxShadow: "inset 0 -10px 0 #A002FF",
                                            filter: "grayscale(100%) sepia(100%)"
                                        }}>
                                        <a className="NewStory-info">
                                            <img src={CharacterIcon} style={{ width: '180px', marginBottom:"20px"}} />
                                            <div className="NewStory-THtitle" style={{color:"#1C0A25", fontSize:"25px"}}> NEW CHARACTER</div>
                                        </a>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

            <div className='ManageOld'>
                <div className='SubPageLabel'>
                    <h1> STORY'S MANAGEMENT SYSTEM </h1>
                </div> 

                <div className="container mt-2">
                    <ul className="form-inline" style={{justifyContent: "center", marginTop:'20px', marginBottom:'20px'}}>
                        <input class="form-control" placeholder=" search for find story" type="text" value={query} onChange={(e) => setQuery(e.target.value)} style={{backgroundColor:"#1C0A25"}} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </ul>

                    <Scrollbars style={{ swidth: 600, height: 600 }}>
                        <Form>
                            <table className="table table-hover mt-3">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>No</th>
                                        <th>Image</th>
                                        <th>Story Name</th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.filter(el => el.StoryTitleEng.toLowerCase().includes(query.toLowerCase()) || el.StoryTitleEng.includes(query) || el.StoryTitleThai.toLowerCase().includes(query.toLowerCase())
                                    ).map((el, i) => (
                                        <tr className="table-info" key={el.StoryID}>
                                            <td>{i + 1}</td>
                                            <td>
                                                <Card.Img variant="top" src={`/uploads/${el.StoryImage}`} style={{ width: '100px', textAlign: "center", margin: "auto" }} className="mb-2"></Card.Img>
                                            </td>
                                            <td>{el.StoryTitleEng}</td>
                                            <td>{moment(el.date).format("DD-MM-YYYY")}</td>
                                            <td>
                                                <button style={{ marginRight: '2px' }} onClick={() => dltStory(el.StoryID)} type="button" className="btn btn-danger"> Delete </button>
                                                <NavLink to={`editstory/${el.StoryID}`} className="text-decoration-none text-dark">
                                                    <Button style={{ marginRight: '2px' }} variant="warning">Edit</Button></NavLink>
                                                <NavLink to={`storydetailformnormal/${el.StoryID}`} className="text-decoration-none text-dark">
                                                    <Button style={{ marginRight: '2px' }} variant="info">Add story normal page</Button></NavLink>
                                                <NavLink to={`storydetailformalternative/${el.StoryID}`} className="text-decoration-none text-dark">
                                                    <Button style={{ marginRight: '2px' }} variant="info">Add story alternative page</Button></NavLink>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Form>
                    </Scrollbars>
                </div>

            </div>
        </>
    )
}

export default HomeAdminPage