import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AllStories = () => {
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

    const select = () => {
        alert("Please login")
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <>
            <section class="main-section allStories-section">
                <div class="container">
                    <div class="section-offer-wrapper">
                        <div class="section-offer-content">

                        <h1 className='AllStories'> ALL STORIES </h1>

                        <ul className="form-inline" style={{justifyContent: "center", marginTop:'20px', marginBottom:'20px'}}>
                            <input class="form-control" placeholder=" search for find story" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </ul>

                        <div className="NewStory-wrapper">
                            {data.filter(el => el.StoryTitleEng.toLowerCase().includes(query.toLowerCase()) || el.StoryTitleEng.includes(query) || el.StoryTitleThai.toLowerCase().includes(query.toLowerCase())
                            ).map((el, i) => {
                                return (
                                    <>
                                        <a className="AllStory-rectangle" onClick={() => select(el.StoryID)}>
                                            <div className="AllStory-rectangle2 AllStory-blue AllStory-md">
                                                <div className="AllStory-rectangle2-img">
                                                    <img width="300" height="200" src={`/uploads/${el.StoryImage}`}></img>
                                                </div>
                                                <div className="AllStory-rectangle2-label">
                                                    <div className="AllStory-THtitle" key={el.StoryTitleThai}> {el.StoryTitleThai} </div>
                                                    <div className="AllStory-ENtitle" key={el.StoryTitleEng}> {el.StoryTitleEng} </div>
                                                    <div className="AllStory-THintro"> {el.IntroductionStoryThai}</div>
                                                    <div className="AllStory-ENintro">{el.IntroductionStoryEng}</div>
                                                </div>
                                            </div>
                                        </a>
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
export default AllStories