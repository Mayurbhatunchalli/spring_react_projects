import React from "react";
import { Button, Card, CardBody, CardHeader, CardSubtitle, Col, Container, Row } from "reactstrap";

function Home() {

    return (
        <Container>
            <Row className="mt-4">
                <Col sm={{
                    size: 6,
                    offset: 3
                }}>
                    <Card>
                        <CardHeader className="text-center">
                            <h3>Shopping Cart</h3>
                        </CardHeader>
                        <CardBody>
                            <CardSubtitle>
                                <h6>Components</h6>
                            </CardSubtitle>
                        </CardBody>
                        <CardBody>
                            I-Phone
                            <Button>Add-To-Cart</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;