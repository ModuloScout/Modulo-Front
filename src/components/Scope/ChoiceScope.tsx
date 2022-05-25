import NavBar from "../Utils/Navbar";
import {Button, Form, FormGroup} from "react-bootstrap";
import React from "react";

export default function ChoiceScope() {
    return (
        <>
            <NavBar></NavBar>
            <h1>Choisir un scope</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Scope 1"/>
                </Form.Group>
                <FormGroup>
                    <Form.Check type="checkbox" label="Scope 2"/>
                </FormGroup>
                <FormGroup>
                    <Form.Check type="checkbox" label="Scope 3"/>
                </FormGroup>
                <Button className={"btn"} variant="success" type="submit">
                    Valider
                </Button>
            </Form>
        </>
    )
}
