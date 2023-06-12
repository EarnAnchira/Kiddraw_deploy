import React from 'react';

const Howto = () => {

    return (
        <>
            <section class="main-section HowTo-section">
                <div class="container">

                    <h1 className='HowTo'>HOW TO PLAY</h1>

                    <div class="Howto-details">
                        <div class="HowTo-video">
                            <div className="video" style={{position: "relative", paddingBottom: "56.25%", paddingTop: 25, height: 0}}>
                                <iframe style={{position: "absolute",top: 0, left: 0, width: "100%", height: "100%"}} src={`https://www.youtube.com/embed/zChf988cfSs`}/>
                            </div>                   
                        </div>
                    
                        <div class="HowTo-description">
                            <div class="content">
                                <img width="200" src="/assest/navbarImg/logo_white.png"></img>
                                <h4 class="content-header">KID-DRAW-CLUB</h4>
                                <p class="content-text">
                                    Welcome to kid-draw-club. We are immersive story for children web application.
                                    On our website, you can create your avatar using drawing, dressing, or upload your
                                    own picture. Then, you can control it to move like you. And we also have a many story ending! Enjoy.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Howto