import NavBar from "../Utils/Navbar";
import {Button, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {fetchJSONWithToken} from "../Utils/Api";
import {useSelector} from "react-redux";

export default function ChoiceScope() {

    const [scopes, setScopes] = useState<Array<IScope>>([])
    const [roles, setRoles] = useState<Array<IRole>>([])
    const [isDisabled, setIsDisabled] = useState(false);

    const uuid = useSelector((state: any) => state.uuid.uuid)

    useEffect(() => {
        fetchJSONWithToken(`https://localhost:8000/api/users/${uuid}`)
            .then(response => response.body as Promise<IUser>)
            .then((data: IUser) => {
                data.scopes.map(
                    scopeId => fetchJSONWithToken(
                        `https://localhost:8000${scopeId}`)
                        .then(response => response.body as Promise<IScope>)
                        .then((data: IScope) => {
                            if (scopes.includes(data) === false) {
                                scopes.push(data)
                                setScopes(scopes)
                            }
                        })
                )
            })
    }, [uuid])

    const handleClick = () => {
        setIsDisabled(!isDisabled)
    };

    useEffect(() => {
        scopes.map(
            scope => {
                fetchJSONWithToken(
                    `https://localhost:8000${scope.role}`)
                    .then(response => response.body as Promise<IRole>)
                    .then((data: IRole) => {
                        if (roles.includes(data)) {
                            roles.push(data)
                            setRoles(roles)
                        }
                    })
            }
        )
    }, [uuid])
    return (
        <>
            <NavBar/>
            <h1>Choisir un scope</h1>
            <Form>
                {scopes.length > 0 && scopes.map((scope, index) =>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" value={scope.id} label={"Scope " + index} disabled={isDisabled}
                                    onClick={handleClick}/>
                    </Form.Group>
                )}
                <Button className={"btn"} variant="success" type="submit">
                    Valider
                </Button>
            </Form>
        </>
    )
}
