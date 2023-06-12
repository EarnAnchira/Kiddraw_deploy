import React from 'react'
import './SelectCreateAvatar_components/SelectCreateAvatar.css'
import { NavBarUser } from './navUser';
import { NavLink } from "react-router-dom";

import pic1 from "./SelectCreateAvatar_components/SelectCreateAvatar_assets/camera.png";
import pic2 from "./SelectCreateAvatar_components/SelectCreateAvatar_assets/drawing.png";
import pic3 from "./SelectCreateAvatar_components/SelectCreateAvatar_assets/dress.png";


const SelectCreateAvatar = () => {
    return (
        <div className='SelectCreateAvatarPage'>
            <NavBarUser/>
            <div className="containner" >
                <div className='page-center'>
                    <div class="option-list">
                        <NavLink to="uploadimage" >
                            <div class="list">
                                <a class="list-info">
                                    <img width="209" height="209" class="list-image" src={pic1}></img>
                                    <div class="list-label">Upload Pic</div>
                                </a>
                            </div>
                        </NavLink>

                        <NavLink to="dressing">
                        <div class="list">
                            <a class="list-info">
                                <img width="209" height="209" class="list-image" src={pic3}></img>
                                <div class="list-label">Dressing</div>
                            </a>
                        </div>
                        </NavLink>

                        <NavLink to="drawing" >
                            <div class="list">
                                <a class="list-info">
                                    <img width="209" height="209" class="list-image" src={pic2}></img>
                                    <div class="list-label">Drawing</div>
                                </a>
                            </div>
                        </NavLink>

                    </div>
                    
                    <div className='Option'>
                        <h1 className="titleOption">CREATE YOUR AVATAR</h1>
                        <h4 className="titleDes"> let me help you to create avatar,<br></br> please select the way you need!</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SelectCreateAvatar;