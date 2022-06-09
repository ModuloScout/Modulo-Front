import React from "react"
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap"
import {Link} from "react-router-dom"
import Logo from '../Images/logo.png'
import {retrieveToken} from "./Api";

export default function NavBar() {
    const token = retrieveToken()
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
                                {token &&
                                    <Nav.Link as={Link} to={"/agenda"}>Agenda</Nav.Link>
                                }
                            </Nav>
                            <Nav>
                                {token &&
                                    <NavDropdown title={<i className="fas fa-user-alt"></i>} id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">Son Profil</NavDropdown.Item>
                                        <NavDropdown.Item href={"/choiceScope"}>Changer de scope</NavDropdown.Item>
                                        <NavDropdown.Item href="/">Se déconnecter</NavDropdown.Item>
                                    </NavDropdown>
                                }
                                {token === undefined &&
                                    <Nav.Link as={Link} to={"/login"}>
                                        <i className="fas fa-user-alt"></i>
                                    </Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}
