import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useParams } from "react-router-dom"

export const NavBarUser = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [scrolled,seScrolled] = useState(false);
    const [data, setData] = useState([]);
    const { UserName } = useParams("");

    const getData = async () => {
        const res = await fetch(`/getuser/${UserName}`, {
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
                <Navbar.Brand href={`/homeuser/${UserName}`}>
                    <img src="/logo_white.png" width="60" height="60" class="d-inline-block align-top" alt="logo"></img>
                </Navbar.Brand>
                <h6 style={{fontWeight:"200", paddingTop:"10px"}}>Welcome Back, {data.UserName}</h6>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href={`/homeuser/${UserName}`} className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Home')}>HOME</Nav.Link>
                        <Nav.Link href='/' className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Log In')}>LOG OUT</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}