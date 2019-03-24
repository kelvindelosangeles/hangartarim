import React, { Component } from 'react';
import './hakkimizda.css';

import Crd from '../../global/crd/Crd';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import background from '../../assets/images/backgrounds/2.jpeg';

export default class Hakkimizda extends Component {
  render() {
    return (
      <Crd
        heading='Hakkimiz'
        accentHeading='da'
        classes='about'
        background={background}
        small={8}
        medium={9}
        large={9}
        xlarge={9}>
        <ul className='crd-text'>
          <Row className='ul-row' noGutters>
            <Col md={9} lg={6} xl={5} className='ul-col'>
              <li>
                64 dönüm üzerine kurulu 7250 m2 kapalı alan (2650 m2 ürün işleme
                bölümü)
              </li>
              <li>2 adet 6000 ton kapasiteli sabit hydrocooler</li>
              <li>
                Saatte 4 ton kapasiteli GP Graders kiraz işleme ve tasnif
                makinesi
              </li>
              <li>
                Sammo tam otomatik paletleme ünitesi Elisam punnet, carry bag
                ünitesi ve paketleme makinesi
              </li>
            </Col>
            <Col md={9} lg={6} xl={5} className='ul-col'>
              <li>
                Toplam 5000 ton kapasiteli soğuk hava depoları: 165 m2 ve 230 m2
                alana sahip 2 adet ön soğutma deposu
              </li>
              <li>
                230 m2 alana sahip 2 adet, 165 m2 alana sahip 6 adet soğuk hava
                deposu
              </li>
              <li>
                200 m2 alana sahip soğutmalı sevkiyat bölümü (3 adet tır yükleme
                rampası)
              </li>
              <li>
                250 m2, 2 katlı idari bina (temsilciler için ayrılmış özel
                odalar)
              </li>
            </Col>
          </Row>
        </ul>
        <Button type='button' variant='danger'>
          İletişim
        </Button>
      </Crd>
    );
  }
}
