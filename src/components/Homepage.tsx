import React from 'react'
import {Carousel} from 'react-bootstrap';
import NavBar from "./Utils/Navbar";
import Placeholder from './Images/placeholder.png'

export default function Homepage() {
    return (
        <>
            <NavBar/>
            <div className={"container-fluid"}>
                <h1>Bienvenue sur Modulo</h1>
                <h2>Voici les dernières événements</h2>
                <Carousel fade variant={"dark"}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Placeholder}
                            alt={"First slide"}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Placeholder}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Placeholder}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );

}

