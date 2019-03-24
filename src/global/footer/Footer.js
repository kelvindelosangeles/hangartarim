import React, { Component } from 'react';
import './footer.css';
import footerLogo from '../../assets/images/logo/Light.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Row noGutters className='footer-row'>
          <Col className='footer-top' xs={10} sm={4} md={4} lg={4} xl={3}>
            <Image src={footerLogo} className='footer-logo' fluid />
            <p className='subheading'>Meyve Paketleme ve Soğuk Hava Depoları</p>
            <div className='tel'>
              <i className='fas fa-phone' />
              <p>+90 533 613 96 56</p>
            </div>
            <div className='tel'>
              <i className='fas fa-phone' />
              <p>+90 532 291 63 66</p>
            </div>
            <div className='email'>
              <i class='fas fa-envelope' /> <p>info@hangartarim.com</p>
            </div>
          </Col>
          <Col className='footer-bottom' xs={10} sm={4} md={4} lg={4} xl={3}>
            <div className='address-container'>
              <h5 className='address-title'>Tesisler</h5>
              <div className='address'>
                <i />
                <p>
                  Akören Köyü İğdecik Yolu Üzeri No:537 Adala Bucağı
                  Salihli/Manisa
                </p>
              </div>
            </div>
            <div className='address-container'>
              <h5 className='address-title'>Genel Merkez</h5>
              <div className='address'>
                <i />
                <p>
                  Sakızağacı Mah. Kennedy Cad. No.103/9/95 Bakırköy ISTANBUL
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
