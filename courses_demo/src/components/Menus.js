import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

const Menus = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-courses" action>Add Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action>View Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>Contact</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>About</Link>
        </ListGroup>
    )
}

export default Menus;