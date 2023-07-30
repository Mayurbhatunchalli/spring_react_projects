import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse = () => {

    useEffect(() => {
        document.title = "Add Courses";
    }, []);

    const [course, setCourses] = useState({});

    const handleForm = (e) => {
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }

    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response);
                toast.success("Courses are added");
                console.log("success");
            }, (error) => {
                console.log(error);
                console.log("error");
            }
        )
    };



    return (
        <Fragment>
            <h1 className="text-center my-3">Add Course</h1>
            <Form className="text-center" onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course ID</label>
                    <Input type="text" placeholder="Enter ID Here"
                        name="userId" id="userId"
                        onChange={(e) => {
                            setCourses({ ...course, id: e.target.value });
                        }} />
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter Title Here"
                        name="title" id="title"
                        onChange={(e) => {
                            setCourses({ ...course, title: e.target.value });
                        }} />
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter Description Here" id="description"
                        style={{ height: 100 }}
                        onChange={(e) => {
                            setCourses({ ...course, description: e.target.value })
                        }}
                    />
                </FormGroup>
                <Container>
                    <Button type="submit" color="success" outline>Add Course</Button>
                    <Button
                        type="reset"
                        color="warning" style={{ marginLeft: 10 }} outline>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse; 