import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Input } from "reactstrap";

const AddNotes = () => {

    const [value, setValue] = useState({
        title: '',
        description: ''
    });

    const saveNotes = () => {

        

    }

    const handleLogout = () => {

        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col className="mt-4">
                        <h1>Add Notes</h1>

                        <Input type="text" value={value.title} placeholder="Enter Short Description"
                            onChange={(e) => {
                                setValue({ ...value, title: e.target.value })
                            }} />

                        <Input type="textarea" value={value.description} placeholder="Enter Desciption"
                            onChange={(e) => {
                                setValue({ ...value, description: e.target.value })
                            }} />
                        <Button onClick={saveNotes} />

                        <Button onClick={handleLogout} className="mt-4">Logout</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AddNotes;