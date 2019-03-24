import React, { Component } from 'react';
import './home.css';

import Crd from '../../global/crd/Crd';

import Image from 'react-bootstrap/Image';
import Facilities from '../../assets/images/images/facility.jpg';
import background from '../../assets/images/images/Cherries.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends Component {
  render() {
    return (
      <Crd
        heading='Hangar '
        accentHeading='Tarim'
        classes='home'
        background={background}
        small={8}
        medium={11}
        large={9}
        xlarge={8}>
        <div className='home-small'>
          <p className='crd-subheading'>
            Meyve Paketleme ve Soğuk Hava Depoları
          </p>
          <Image
            src={Facilities}
            className='facility'
            alt='Hangar Facilities'
            fluid
          />
          <p className='crd-text'>
            7200 m2 kapalı alan üzerine kurulu Salihli tesisimizde GP Graders
            firmasının kiraz sınıflandırma makinesi ile boy; renk, ikiz ve
            sapsız kiraz ayrımı yapabilen; optik, tam otomatik sistemlerle
            saatte 4 ton kiraz paketlenebilmektedir. Ayrıca, tesisimizde bulunan
            10 adet soğuk hava depolarında toplam 5000 ton kapasitesinde yaş
            meyve ve sebze depolama imkanı bulunmaktadır.
          </p>
        </div>

        <div className='home-large'>
          <Row className='home-large-row'>
            <Col className='home-large-col1' xs={6} lg={7}>
              <p className='crd-subheading'>
                Meyve Paketleme ve Soğuk Hava Depoları
              </p>
              <p className='crd-text'>
                7200 m2 kapalı alan üzerine kurulu Salihli tesisimizde GP
                Graders firmasının kiraz sınıflandırma makinesi ile boy; renk,
                ikiz ve sapsız kiraz ayrımı yapabilen; optik, tam otomatik
                sistemlerle saatte 4 ton kiraz paketlenebilmektedir. Ayrıca,
                tesisimizde bulunan 10 adet soğuk hava depolarında toplam 5000
                ton kapasitesinde yaş meyve ve sebze depolama imkanı
                bulunmaktadır.
              </p>
            </Col>
            <Image
              src={Facilities}
              className='facility'
              alt='Hangar Facilities'
              fluid
            />
          </Row>
        </div>
      </Crd>
    );
  }
}

export default Home;
