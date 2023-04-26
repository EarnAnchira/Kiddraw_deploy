import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useParams,useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const CharacterList = () => {
    const { StoryID } = useParams("");
    const [data, setData] = useState([]);
    const [Character, setCharater] = useState([]);
    const { CustomID } = useParams("");
    const [CharacterCustom, setCharacterCustom] = useState([]);
    const history = useNavigate();

    const getDataTitle = async () => {
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

    const getCharacterCustom = async () => {
        const res = await fetch(`/charactercustom/${CustomID}`, {
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
            setCharacterCustom(data[0])
            console.log("get data");
        }
    }

    const getCharacter = async () => {
        const res = await fetch(`/getcharacter/${StoryID}`, {
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
            setCharater(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        if (CustomID === undefined) {
            getDataTitle()
            getCharacter()
        } else {
            getDataTitle()
            getCharacter()
            getCharacterCustom()
        }
    }, [])

    const PlayAnimator = () => {
        if (CharacterCustom.CustomID === undefined) {
            alert("create character")
            
        } else{
            history(`poseanimator`)
        }
    };

    return (
        <>
            <h1 className='text-center mt-2' style={{ color: 'white' }}>{CharacterCustom.CustomID}</h1>
            <div className="container mt-2">
                <h1 className='text-center mt-2' style={{ color: 'white' }}>CHARACTER</h1>
                <h2 className='text-center mt-2' style={{ color: 'white' }}>Story Name: {data.StoryTitleEng}</h2>
                <div className='d-flex justtify-content-between align-iteams-center mt-5'>
                    
                    {/* Show Character List */}
                    {Character.map((el, i) => {
                        return (
                            <>
                                <Card style={{ width: '22rem', height: "30rem", background: '#FFDFA8', marginRight: '10px' }} className="mb-3">
                                    <Card.Img variant="top" src={`/uploads/${el.CharacterImg}`} style={{ width: '200px', textAlign: "center", margin: "auto", marginTop: '10px' }} className="mb-2"></Card.Img>
                                    <Card.Body className='text-center'>

                                        {/* Character list from story */}
                                        <Card.Title>Character Name: {el.CharacterName}</Card.Title>

                                        <NavLink to={`selectcreateavatar/${el.CharacterID}`} className="text-decoration-none text-dark"><Button style={{ marginRight: '2px' }} variant="info" className='col-lg-6 text-center'>Create</Button></NavLink>
                                        <Button variant="success" onClick={PlayAnimator} >Play</Button>
                                    
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    )
}
export default CharacterList
