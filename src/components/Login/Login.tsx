import React from "react"
import {Field, Form, Formik} from "formik"
import {Button, Form as FormBootstrap} from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom";
import NavBar from "../Utils/Navbar";
import Cookies from "js-cookie";
import {useDispatch} from "react-redux";
import {setUuidData} from "../feature/uuidSlice";

export default function Login() {

    const dispatch = useDispatch()

    const COOKIE_NAME = 'MODULO_TOKEN_ACCESS'
    const saveToken = (token: string) => Cookies.set(COOKIE_NAME, token)
    const navigate = useNavigate()

    const initialValues = {
        uuid: '',
        password: ''
    }

    const onSubmit = async (values: any) => {
        fetch(`https://localhost:8000/api/auth-token`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then(response => response.json())
            .then(
                data => {
                    saveToken(data.token)
                    dispatch(setUuidData(data.uuid))
                }
            )
            .then(
                () => navigate('/choiceScope')
            )
    }

    return (
        <>
            <NavBar/>
            <div className="limited-container flex flex--vertical-around">
                <div className="login-block">
                    <h1>Bienvenue sur Modulo</h1>
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        {({
                              values,
                              isSubmitting,
                          }) => (
                            <Form>
                                <FormBootstrap.Label>N°adhérent :</FormBootstrap.Label>
                                <Field className="form-field"
                                       type="text"
                                       name="uuid"
                                       value={values.uuid}
                                />
                                <FormBootstrap.Label>Mot de passe :</FormBootstrap.Label>
                                <Field className="form-field"
                                       type="password"
                                       name="password"
                                       value={values.password}
                                />
                                <Button className={"btn"} variant="success" type="submit" disabled={isSubmitting}>
                                    Se connecter
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    <Link to={"/forgottenPassword"}>
                        <Button>
                            Mot de passe oublié
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};
