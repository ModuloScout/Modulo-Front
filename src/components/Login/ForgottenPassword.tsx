import React from "react"
import {Button, Form as FormBootstrap} from "react-bootstrap"
import {Field, Form, Formik} from "formik"
import {Link} from "react-router-dom"

export default function ForgottenPassword() {
    return (
        <>
            <div className="limited-container flex flex--vertical-around">
                <div className="login-block">
                    <h1>Mot de passe oublié</h1>
                    <Formik initialValues={{email: '', password: ''}} onSubmit={(values) => {
                    }}>
                        {({
                              values,
                              isSubmitting,
                          }) => (
                            <Form className={"mx-auto"}>
                                <FormBootstrap.Label>Email :</FormBootstrap.Label>
                                <Field className="form-field"
                                       type="email"
                                       name="email"
                                       value={values.email}
                                />
                                <FormBootstrap.Label>Mot de passe :</FormBootstrap.Label>
                                <Field className="form-field"
                                       type="password"
                                       name="password"
                                       value={values.password}
                                />
                                <Button variant="success" type="submit" disabled={isSubmitting}>
                                    Envoyer votre demande
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    <Link to={"/login"}>
                        <Button>
                            Revenir sur le formulaire de connexion
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
