import React, { Component } from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import logo from '../../assets/images/logo/Light.svg';

class Navigation extends Component {
  render() {
    return (
      <Navbar expand='lg'>
        <Link to='/' className='brand'>
          <Image src={logo} fluid />
        </Link>
        <Navbar.Toggle aria-controls='navbar' />
        <Navbar.Collapse id='navbar'>
          <Nav className='ml-auto'>
            <Link to='/'>Ana Sayfa</Link>
            <Link to='/hakkimizda'>Hakkımızda</Link>
            <Link to='/hizmetlerimiz'>Hizmetlerimiz</Link>
            <Link to='/iletisim'>İletişim</Link>
            <Link to='/demo'>demo</Link>
            {/* <Link to='/galeri'>Galeri</Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
