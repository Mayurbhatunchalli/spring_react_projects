import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import { useNavigate, useParams, Link } from "react-router-dom";


const UpdateCourse = () => {

    const navigate = useNavigate();

    const { cid } = useParams();

    const [course, setCourses] = useState({
        id: "",
        title: "",
        description: ""
    });

    useEffect(() => {
        loadUser();
    }, []);

    const { id, title, description } = course;

    const onInputChange = (e) => {
        setCourses({ ...course, [e.target.id]: e.target.value })
    }

    const handleForm = (e) => {
        putDataToServer(course);
    }

    const putDataToServer = (course) => {
        axios.put(`${base_url}/courses/${cid}`, course);
        navigate('/view-courses');
    }

    const loadUser = async () => {
        const result = await axios.get(`${base_url}/courses/${cid}`);
        setCourses(result.data);
    }



    return (
        <Fragment>
            <h1 className="text-center my-3">Update Course</h1>
            <Form className="text-center" onSubmit={(e) => handleForm(e)}>
                <FormGroup>
                    <label for="userId">User ID</label>
                    <Input type="text" placeholder="Enter ID Here"
                        name="userId" id="userId" value={id}
                        onChange={(e) => onInputChange(e)} />
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter Title Here"
                        name="title" id="title" value={title}
                        onChange={(e) => onInputChange(e)} />
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="text" placeholder="Enter Description Here"
                        name="description" id="description" value={description}
                        onChange={(e) => onInputChange(e)} />
                </FormGroup>

                <Container>
                    <Button type="submit" color="success" outline>Update Course</Button>
                    <Link className="btn btn-outline-warning mx-2"
                        to={`/view-courses`}>Cancel</Link>
                </Container>
            </Form>
        </Fragment>
    )
}
export default UpdateCourse;