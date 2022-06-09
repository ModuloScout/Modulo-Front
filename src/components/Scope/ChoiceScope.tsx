import NavBar from "../Utils/Navbar";
import {Button, Form, FormGroup} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {fetchJSONWithToken} from "../Utils/Api";
import {useSelector} from "react-redux";

export default function ChoiceScope() {
    const [scopes, setScopes] = useState([])
    const uuid = useSelector((state: any) => state.uuid.uuid)

    useEffect(() => {
        fetchJSONWithToken(`https://localhost:8000/api/user/${uuid}/scopes`)
            .then(response => response.body)
            .then(data => {
                return setScopes(data);
            })

    }, [uuid])

    return (
        <>
            <NavBar/>
            <h1>Choisir un scope</h1>
            <Form>
                {scopes.length > 0 && scopes.map(scope =>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label={scope?.role_id?.name}/>
                    </Form.Group>
                )}

                <FormGroup className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Scope 2"/>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Scope 3"/>
                </FormGroup>
                <Button className={"btn"} variant="success" type="submit">
                    Valider
                </Button>
            </Form>
        </>
    )
}
