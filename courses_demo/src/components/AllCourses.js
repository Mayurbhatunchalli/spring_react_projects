import React, { useEffect, useState } from "react";
import Courses from "./Courses";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses = () => {

    useEffect(() => {
        document.title = "All Courses";
    }, []);

    const getAllCOursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response.data);
                toast.success("Courses are loaded", {
                    position: "bottom-center"
                });
                setCourses(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong");
            }
        );
    };

    useEffect(() => {
        getAllCOursesFromServer();
    }, []);

    const [course, setCourses] = useState([]);

    const updateCourses = (id) => {
        setCourses(course.filter((c) => c.id !== id));
    };

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows:</p>

            {
                course.length > 0 ? course.map((item) =>
                    (<Courses key={item.id} course={item} update={updateCourses} />)) : "No Courses"
            }

        </div>
    )

}

export default AllCourses;