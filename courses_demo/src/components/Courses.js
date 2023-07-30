import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Card, CardBody, Container, Button, CardSubtitle, CardText } from "reactstrap";
import base_url from "../api/bootapi";
import { Link, useHistory } from "react-router-dom";


const Courses = ({ course, update, setCourses }) => {

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                toast.success("Course Deleted")
                update(id);
            }, (error) => {
                toast.error("Server issue");
            }

        );
    };

    return (

        <Card className="text-center my-3">
            <CardBody>
                <CardSubtitle style={{ fontWeight: "bold" }}>{course.title}</CardSubtitle>

                <CardText>{course.description}</CardText>

                <Container className="text-center">
                    <Link className="btn btn-outline-warning mx-2"
                        to={`/update-course/${course.id}`}>Update</Link>

                    <Button color="danger" outline style={{ marginLeft: 10 }}
                        onClick={() => {
                            deleteCourse(course.id);
                        }}>Delete</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Courses;