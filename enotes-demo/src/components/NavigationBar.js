import React from "react";
import { Nav, NavbarBrand } from "react-bootstrap";
import { Navbar, NavLink } from "reactstrap";
import logo from './Home.jfif';

class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar className="my-2" color="secondary" dark>
                    <NavbarBrand href="/"><img src={logo}
                        width="25" height="25" alt="brand" /> E-Notes</NavbarBrand>
                    <Nav className="mr-auto">
                        <NavLink color="dark" href="/dashboard">Dashboard</NavLink>
                        <NavLink href="/login">Login</NavLink>
                        <NavLink href="/register">Sign Up</NavLink>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;