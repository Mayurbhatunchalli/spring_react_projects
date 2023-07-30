import React, { useState, useEffect } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { Button, CardBody, CardHeader, FormFeedback, FormGroup, Input } from "reactstrap";
import { signUp } from "../services/user-service";
import validate from "./Validation";

const Register = () => {

    const [data, setData] = useState({

        username: "",
        email: "",
        password: "",
        about: ""
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (event, field) => {
        let actualValue = event.target.value
        setData({
            ...data,
            [field]: actualValue
        })
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        setFormErrors(validate(data));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(data);

            signUp(data).then((resp) => {
                console.log(resp);
                toast.success("Success");
            })
        }
    }, [formErrors]);


    const handleReset = () => {
        setData({
            username: "",
            email: "",
            password: "",
            about: ""
        })
    }

    return (
        <Container>
            <Row className="mt-4">
                <Col sm={{
                    size: 6,
                    offset: 6
                }}>
                    <Card color="primary">
                        <CardHeader>
                            <h1>Register Here</h1>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={handleSubmit}>

                                <FormGroup>
                                    <label for="username">User Name</label>
                                    <Input value={data.username} onChange={(e) => handleChange(e, 'username')} type="username"
                                        placeholder="Enter the Username" id="username" name="username"
                                        invalid={formErrors.username ? true : false} />
                                    <FormFeedback>
                                        {formErrors.username}
                                    </FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <label for="email">Email</label>
                                    <Input value={data.email} onChange={(e) => handleChange(e, 'email')} type="email"
                                        placeholder="Enter the Email ID" id="email" name="email"
                                        invalid={formErrors.email ? true : false} />
                                    <FormFeedback>
                                        {formErrors.email}
                                    </FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <label for="password">Password</label>
                                    <Input value={data.password} onChange={(e) => handleChange(e, 'password')} type="password"
                                        placeholder="Enter the Password" id="password" name="password"
                                        invalid={formErrors.password ? true : false} />
                                    <FormFeedback>
                                        {formErrors.password}
                                    </FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <label for="about">About</label>
                                    <Input value={data.about} onChange={(e) => handleChange(e, 'about')} type="about"
                                        placeholder="Enter about yourself" id="about" name="about"
                                        invalid={formErrors.about ? true : false} />
                                    <FormFeedback>
                                        {formErrors.about}
                                    </FormFeedback>
                                </FormGroup>

                                <Container className="text-center mt-3">
                                    <Button type="submit" color="primary">Sign Up</Button>
                                    <Button type="reset" className="ms-2"
                                        color="secondary" onClick={handleReset}>Clear</Button>
                                </Container>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;