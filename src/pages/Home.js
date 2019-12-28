import React, { Component } from "react";

import Crd from "../global/Crd";

import Image from "react-bootstrap/Image";
import Facilities from "../assets/images/images/facility.jpg";
import background from "../assets/images/images/Cherries.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component {
  render() {
    return (
      <Crd
        heading="Hangar Tarım"
        classes="home"
        background={background}
        small={10}
        medium={11}
        large={10}
        xlarge={9}
      >
        <div className="home-small">
          <p className="crd-subheading">
            Meyve Paketleme ve Soğuk Hava Depoları
          </p>
          <Image
            src={Facilities}
            className="facility"
            alt="Hangar Facilities"
            fluid
          />
          <p className="crd-text">
            7200 m<sup>2</sup> kapalı alan üzerine kurulu Salihli tesisimizde GP
            Graders firmasının kiraz sınıflandırma makinesi ile boy; renk, ikiz
            ve sapsız kiraz ayrımı yapabilen; optik, tam otomatik sistemlerle
            saatte 4 ton kiraz paketlenebilmektedir. Ayrıca, tesisimizde bulunan
            10 adet soğuk hava depolarında toplam 3500 ton kapasitesinde yaş
            meyve ve sebze depolama imkanı bulunmaktadır.
          </p>
        </div>

        <div className="home-large">
          <Row className="home-large-row">
            <Col className="home-large-col1" md={6} lg={6} xl={6}>
              <p className="crd-subheading">
                Meyve Paketleme ve Soğuk Hava Depoları
              </p>
              <p className="crd-text">
                7200 m<sup>2</sup> kapalı alan üzerine kurulu Salihli
                tesisimizde GP Graders firmasının kiraz sınıflandırma makinesi
                ile boy; renk, ikiz ve sapsız kiraz ayrımı yapabilen; optik, tam
                otomatik sistemlerle saatte 4 ton kiraz paketlenebilmektedir.
                Ayrıca, tesisimizde bulunan 10 adet soğuk hava depolarında
                toplam 3500 ton kapasitesinde yaş meyve ve sebze depolama imkanı
                bulunmaktadır.
              </p>
            </Col>
            <Col md={5} lg={5} xl={5} className="facility-col">
              <Image
                src={Facilities}
                className="facility"
                alt="Hangar Facilities"
                fluid
              />
            </Col>
          </Row>
        </div>
      </Crd>
    );
  }
}

export default Home;
