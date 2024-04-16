import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../NavBarComponent/navbar.components.css';
import { FaHome } from "react-icons/fa";
import { MdLiveHelp } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { RiListCheck3 } from "react-icons/ri";

const NavBarComponent = () => {

  return (
    <div className='NavBar-Container'>
      <Navbar bg="light" data-bs-theme="light">
        <Container >
          <Nav className="me-auto">
            <Nav.Link className='nav-link' href="/"><FaHome className='Nav-Bar-Img'/>Home</Nav.Link>
            <Nav.Link className='nav-link' href="/register"><RiListCheck3 className='Nav-Bar-Img'/>Bookings</Nav.Link>
            <Nav.Link className='nav-link' href="#pricing"><MdLiveHelp className='Nav-Bar-Img'/>About Us</Nav.Link>
            <Nav.Link className='nav-link' href="/profile"><MdAccountCircle className='Nav-Bar-Img'/>Account</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavBarComponent;
