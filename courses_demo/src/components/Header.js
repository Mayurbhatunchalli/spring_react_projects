import React from "react";
import { Navbar } from "reactstrap";
import { NavbarBrand } from "react-bootstrap";
import logo from './logo.svg';

function Header() {

    return (
        <div >
            <Navbar
                className="my-2"
                color="secondary"
                dark
            >
                <NavbarBrand href="/">
                    <img src={logo}
                        className="App-logo"
                        alt="logo"
                        style={{
                            height: 40,
                            width: 40
                        }} />
                    Courses Application
                </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Header;