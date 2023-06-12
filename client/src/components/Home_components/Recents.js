import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Recents = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = () => {
        const filtered = data.filter((el) =>
            el.StoryTitleEng.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const getUserData = async () => {
        const res = await axios.get("https://kiddraw-19ikqebth-earnanchira.vercel.app/getdatalast", {
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

    const select = () => {
        alert("Please login")
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <>
            <section class="main-section recently-section">
                <div class="container">
                    <div class="section-offer-wrapper">
                        <div class="section-offer-content">
                        <h1 className='Recents'>NEW ARRIVED</h1>
                            <div className="NewStory-wrapper">
                                {data.filter(el => el.StoryTitleEng.toLowerCase().includes(query.toLowerCase()) || el.StoryTitleEng.includes(query) || el.StoryTitleThai.toLowerCase().includes(query.toLowerCase())
                                ).map((el, i) => {
                                    return (
                                        <>
                                            <div className="NewStory-rectangle" onClick={() => select(el.StoryID)}>
                                                <a className="NewStory-info">
                                                    <img width="230" height="250" src={`/uploads/${el.StoryImage}`}></img>
                                                    <div className="NewStory-THtitle" key={el.StoryTitleThai}> {el.StoryTitleThai} </div>
                                                    <div className="NewStory-ENtitle" key={el.StoryTitleEng}> {el.StoryTitleEng} </div>
                                                </a>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Recents;