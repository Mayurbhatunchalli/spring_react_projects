import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Container } from "reactstrap";

class Dashboard extends React.Component {

    render() {

        const handleAddNotes = () => {

            this.props.navigate("/add-notes");

        }

        const handleViewNotes = () => {

            this.props.navigate("/view-notes");
        }

        return (
            <Container>
                <Button onClick={handleAddNotes}>Add-Notes</Button>
                <Button onClick={handleViewNotes} className="ms-2">View-Notes</Button>
            </Container>
        )
    }
}

export function Navigator(props) {

    const navigate = useNavigate();
    return (
        <Dashboard {...props} navigate={navigate} />
    )

};