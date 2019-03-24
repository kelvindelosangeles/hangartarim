import React, { Component } from 'react';
import './hizmetlerimiz.css';

import Crd from '../../global/crd/Crd';

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import background from '../../assets/images/backgrounds/3.jpeg';
import cherrypackaging from '../../assets/images/service-icons/Cherry-package.svg';
import cherryMachine from '../../assets/images/service-icons/cherry-machine.svg';
import freezer from '../../assets/images/service-icons/freezer.svg';

class Hizmetlerimiz extends Component {
  render() {
    return (
      <Crd
        heading='Hizmetlerim'
        accentHeading='iz'
        classes='services'
        background={background}
        small={12}
        medium={12}
        large={10}
        xlarge={8}>
        <Row className='row srv'>
          <Col xs={8} sm={4} md={4} lg={4} className='service'>
            <Image src={cherrypackaging} fluid className='srv-icon' alt />
            <h3>Kiraz Paketleme</h3>
            <p className='srv-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
            <Button type='Button' variant='danger'>
              Learn More
            </Button>
          </Col>
          <Col xs={8} sm={4} md={4} lg={4} className='service'>
            <Image src={cherryMachine} fluid className='srv-icon' alt />
            <h3>Machine Name</h3>
            <p className='srv-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
            <Button type='Button' variant='danger'>
              Learn More
            </Button>
          </Col>
          <Col xs={8} sm={4} md={4} lg={4} className='service'>
            <Image src={freezer} fluid className='srv-icon' alt />
            <h3>Soğuk Hava Depoları</h3>
            <p className='srv-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
            <Button type='Button' variant='danger'>
              Learn More
            </Button>
          </Col>
        </Row>
      </Crd>
    );
  }
}

export default Hizmetlerimiz;
