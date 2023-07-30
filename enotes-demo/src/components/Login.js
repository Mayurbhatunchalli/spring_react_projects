import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CardBody, CardHeader, Form, Input, FormGroup, Button, Container } from "reactstrap";
import { doLogin } from "../services/auth";
import { loginUser } from "../services/user-service";
import useLocalState from "./useLocalStorage";

const Login = () => {

    const navigate = useNavigate();

    localStorage.clear();

    const [loginDetail, setLoginDetail] = useLocalState({
        username: '',
        password: ''
    });

    const handleChange = (event, field) => {
        let actualValue = event.target.value
        setLoginDetail({
            ...loginDetail,
            [field]: actualValue
        })
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(loginDetail);

        loginUser(loginDetail).then((data) => {
            console.log("User Login: ")
            console.log(data);
            doLogin(data, () => {
                console.log("Login Details saved ");
            })

            navigate("/dashboard");
            toast.success("Login Success");

        }).catch(error => {
            console.log(error);
            if (error.response.status === 400 || error.response.status === 401)
                toast.error(error.response.data.message);
            else
                toast.error("Something went wrong");
        })
    }

    const handleReset = () => {
        setLoginDetail({
            username: "",
            password: ""
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
                            <h1>Login Here</h1>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={handleSubmit}>

                                <FormGroup>
                                    <label for="username">User Name</label>
                                    <Input value={loginDetail.username} onChange={(e) => handleChange(e, 'username')} type="username"
                                        placeholder="Enter the username" id="username" name="username" />
                                </FormGroup>
                                <FormGroup>
                                    <label for="password">Password</label>
                                    <Input value={loginDetail.password} onChange={(e) => handleChange(e, 'password')} type="password"
                                        placeholder="Enter the Password" id="password" name="password" />
                                </FormGroup>
                                <Container className="text-center mt-3">
                                    <Button type="submit" color="primary">Login</Button>
                                    <Button className="ms-2" type="reset"
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

export default Login;