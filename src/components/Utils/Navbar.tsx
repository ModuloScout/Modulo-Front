import React from "react"
import {Container, Nav, Navbar} from "react-bootstrap"
import {Link} from "react-router-dom"
import Logo from '../Images/logo.png'

export default function NavBar() {

    return (
        <>
            <header>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/"><img src={Logo} alt={"Logo"}/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/"}>Accueil</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to={"/login"}>
                                    <i className="fas fa-user-alt"></i>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}
