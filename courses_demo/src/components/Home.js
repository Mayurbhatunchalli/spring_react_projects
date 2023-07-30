import React, { useEffect } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, Navbar } from "reactstrap";
import { NavbarBrand } from "react-bootstrap";
import Homelogo from './Home.jfif';

const Home = () => {

  useEffect(() => {
    document.title = "Home";
  }, [])

  return (
    <div >
      <Card inverse>
        <CardImg
          alt="Homelogo"
          src={Homelogo}
          style={{ height: 420 }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h4">
            Home Page
          </CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">
              Last Updated
            </small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div >
  )
}

export default Home;