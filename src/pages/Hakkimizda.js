import React, { Component } from "react";

import { Link } from "react-router-dom";

import Crd from "../global/Crd";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import background from "../assets/images/backgrounds/6.jpeg";

export default class Hakkimizda extends Component {
  state = {
    in: true
  };

  clicked = () => {
    this.setState(prevState => {
      return { in: !prevState.in };
    });
  };

  render() {
    return (
      <Crd
        heading="Hakkımızda"
        classes="about"
        background={background}
        small={8}
        medium={9}
        large={11}
        xlarge={11}
      >
        <ul className="crd-text">
          <Row className="ul-row" noGutters>
            <Col md={9} lg={6} xl={5} className="ul-col">
              <li>
                64 dönüm üzerine kurulu 7250 m<sup>2</sup> kapalı alan (2650 m
                <sup>2</sup> ürün işleme bölümü)
              </li>
              <li>2 adet 6000 ton kapasiteli sabit Hydrocooler</li>
              <li>
                Saatte 4 ton kapasiteli GP Graders kiraz işleme ve tasnif
                makinesi
              </li>
              <li>
                Sammo tam otomatik paletleme ünitesi Elisam Punnet, Carry Bag
                ünitesi ve paketleme makinesi
              </li>
            </Col>
            <Col md={9} lg={6} xl={5} className="ul-col">
              <li>
                Toplam 3500 ton kapasiteli soğuk hava depoları: 165 m
                <sup>2</sup> ve 230 m<sup>2</sup> alana sahip 2 adet ön soğutma
                deposu
              </li>
              <li>
                230 m<sup>2</sup> alana sahip 2 adet, 165 m<sup>2</sup> alana
                sahip 6 adet soğuk hava deposu
              </li>
              <li>
                200 m<sup>2</sup> alana sahip soğutmalı sevkiyat bölümü (3 adet
                tır yükleme rampası)
              </li>
              <li>
                250 m<sup>2</sup> büyüklüğünde 2 katlı idari bina
              </li>
            </Col>
          </Row>
        </ul>
        <Link to="/iletisim">
          <Button type="button" variant="danger">
            İletişim
          </Button>
        </Link>
      </Crd>
    );
  }
}
