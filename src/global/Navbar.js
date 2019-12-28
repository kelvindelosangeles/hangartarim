import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { HamburgerButton } from 'react-hamburger-button';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import logo from '../assets/images/logo/Light.svg';

class Navigation extends Component {
  state = {
    open: false
  };

  toggleHandler = () => {
    this.setState((prevState) => ({
      open: !prevState.open
    }));
  };

  closeNavbar = () => {
    if (this.state.open === true) {
      this.setState({
        open: false
      });
    }
  };

  render() {
    return (
      <Navbar expand='lg' expanded={this.state.open} onToggle={() => {}}>
        <Link to='/' className='brand' onClick={this.closeNavbar}>
          <Image src={logo} fluid />
        </Link>
        <HamburgerButton
          className='burger'
          open={this.state.open}
          width={24}
          height={16}
          strokeWidth={3}
          color='black'
          animationDuration={0.3}
          aria-controls='navbar'
          onClick={this.toggleHandler}
        />
        <Navbar.Collapse id='navbar'>
          <Nav className='ml-auto'>
            <Link to='/' onClick={this.closeNavbar}>
              Ana Sayfa
            </Link>
            <Link to='/hakkimizda' onClick={this.closeNavbar}>
              Hakkımızda
            </Link>
            <Link to='/hizmetlerimiz' onClick={this.closeNavbar}>
              Hizmetlerimiz
            </Link>
            <Link to='/iletisim' onClick={this.closeNavbar}>
              İletişim
            </Link>
            <Link to='/galeri' onClick={this.closeNavbar}>
              Galeri
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
