import React from "react"
import {Field, Form, Formik} from "formik"
import {Button, Form as FormBootstrap} from "react-bootstrap"
import {Link} from "react-router-dom";
import NavBar from "../Utils/Navbar";

export default function Login() {
    return (
        <>
            <NavBar/>
            <div className="limited-container flex flex--vertical-around">
                <div className="login-block">
                    <h1>Bienvenue sur Modulo</h1>
                    <Formik initialValues={{uuid: '', password: ''}} onSubmit={(values) => {
                    }}>
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

}
