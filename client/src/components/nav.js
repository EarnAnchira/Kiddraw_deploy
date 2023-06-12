import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [scrolled,seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src="/logo_white.png" width="60" height="60" class="d-inline-block align-top" alt="logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href='/' className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Home')}>HOME</Nav.Link>
                        <Nav.Link href='/loginmember' className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Log In')}>LOG IN</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Container>

        </Navbar>
    )
}

        // <nav expand="lg" className={scrolled ? "scrolled": ""}>
        //     <a class="navbar-brand" href="/">
        //         <img src="/logo_white.png" width="60" height="60" class="d-inline-block align-top" alt=""></img>
        //     </a>

        //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //     </button>

        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             {/* <form class="form-inline">
        //                 <input class="form-control mr-sm-2" type="search" placeholder="search" aria-label="search" style={{ borderRadius: "25px" }}></input>
        //                 <button class="btn btn-outline-success my-2 my-sm-0" type="submit">search</button>
        //             </form> */}

        //             <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        //                 <li class="nav-item">
        //                     <a class="nav-link" href='/'> HOME </a>
        //                 </li>

        //                 {/* <li class="nav-item">
        //                     <a class="nav-link" href='/storyform'> STORY-FORM</a>
        //                 </li> */}

        //                 {/* <li class="nav-item">
        //                     <a class="nav-link" href='/poseanimator'> POSEANIMATOR </a>
        //                 </li> */}
        //                 {/* <li class="nav-item">
        //                     <a class="nav-link" href='/speakinggame'> SPEAKING </a>
        //                 </li>
        //          */}
        //                 <li class="nav-item">
        //                     <a class="nav-link" href='/registeradmin'> REGISTER-Admin </a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href='/loginadmin'> SIGNIN-Admin</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href='/registermember'> REGISTER </a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href='/loginmember'> SIGNIN</a>
        //                 </li>
        //                 {/* <li class="nav-item">
        //                     <a class="nav-link" href='/portfolio'> PORTFOLIO</a>
        //                 </li> */}
        //                 {/* <li class="nav-item">
        //                     <a class="nav-link" href='/canvas'> CANVAS </a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href='/uploadimage'> UPLOAD</a>
        //                 </li> */}
        //             </ul>
        //             <img src="/User-avatar-whiteBg.png" alt="" roundedcircle={true} style={{ borderRadius: "50%", height: "35px", width: "35px", margin: "0px 10px" }}></img>
        //         </div>
        //     </nav>

//     );
// }
// export default Navbar