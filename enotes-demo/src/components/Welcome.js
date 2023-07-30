import React from "react";
import { Button, Card, CardText, CardTitle } from "reactstrap";

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <Card className="bg-dark text-white" style={{ height: 400 }}>
                    <CardTitle className="text-center" tag="h2">Home Page</CardTitle>
                    <CardText className="text-center">This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.</CardText>
                </Card>
                <Button type="submit" className="text-center">Get Started</Button>
            </div>
        )
    }
}

export default Welcome;