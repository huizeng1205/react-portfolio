import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/name-logo.PNG';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/cv.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        window.addEventListener("scroll",onscroll);

        return () => window.removeEventListener("scroll",onscroll);

    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (

            <Navbar expand="lg" className = {scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink == 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink == 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink == 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <></>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">

                <a href="https://www.linkedin.com/in/hui-zeng1/" target="_blank"><img src={navIcon1} alt="linkedIn" /></a>
                <a href="https://github.com/huizeng1205" target="_blank"><img src={navIcon2} alt="github" /></a>
                <a href="https://drive.google.com/file/d/16wmbVkycq2H2tl_b4HYcEbVUbDZHPfH-/view?usp=sharing" target="_blank"><img src={navIcon3} alt="cv" /></a>
            </div>

            <button onClick={() => {window.location.hash = "#connect"}}>Let's connect</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        
    )
}