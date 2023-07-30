import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class ViewNotes extends React.Component {
    render() {

        const handleLogout = () => {
            localStorage.clear();
            window.location.href = "/";
        }

        return (
            <div>
                <h3>View Notes</h3>
                <Button onClick={handleLogout}>Logout</Button>
            </div>
        )
    }
}

export default ViewNotes;