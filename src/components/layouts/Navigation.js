import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Navigation.css"

export default function Navigation() {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div>
                <Navbar bg="white" expand="sm" expanded={expanded}>
                    <Navbar.Brand>
                        <Link to='/'>Home</Link>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Item className="link">
                                <NavLink to="/history" onClick={() => setExpanded(false)}>
                                    History
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item className="link">
                                <NavLink to="/social-implications" onClick={() => setExpanded(false)}>
                                    Societal Implications
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item className="link">
                                <NavLink to="/future-implications" onClick={() => setExpanded(false)}>
                                    Our Future
                                </NavLink>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <Outlet />
        </>
    );
}