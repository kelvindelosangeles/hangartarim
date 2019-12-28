import React, { Component } from "react";

import Crd from "../global/Crd";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

import background from "../assets/images/backgrounds/7.jpeg";
import cherrypackaging from "../assets/images/service-icons/Cherry-package.svg";
import freezer from "../assets/images/service-icons/freezer.svg";
import assemblyLine from "../assets/images/service-icons/Assembly Line.svg";
import truckScale from "../assets/images/service-icons/Truck Scale.svg";
import CapacityTable from "./components/CapacityTable";
import AppleIcon from "../assets/images/capacity-icons/AppleIcon.js";
import GrapesIcon from "../assets/images/capacity-icons/GrapesIcon";
import PomIcon from "../assets/images/capacity-icons/PomIcon";
import QuinceIcon from "../assets/images/capacity-icons/QuinceIcon";

class Hizmetlerimiz extends Component {
  state = {
    show: false,
    modalContent: {},
    fruit: "apple"
  };

  cherryPacking = {
    title: "Kiraz Paketleme",
    info: (
      <ul>
        <li>
          GP Graders makinesini İtalyan Sammo palet boşaltma ve otomatik
          paletleme makineleri ile entegre ederek; kirazın plastik kasalardan
          makineye dökülmesine, karton kutulara dolduktan sonra paletlenip
          şeritlenmesine kadar tüm aşamaları otomasyon olarak
          gerçekleştirmekteyiz.
        </li>
        <li>
          İşletmemizde kiraz tasnifi için Avustralya menşeli GP Graders
          firmasının optik boylayıcı makinesini kullanmaktayız.Bu makine ile
          saatte 4 ton kirazı; boy, renk, sapsızlık, ikizlik durumuna göre
          otomatik olarak sınıflandırabilmekteyiz.
        </li>
        <li>
          Ürünün işletmeye varışından müşteriye teslim edilmesine kadar tüm
          aşamalar müşteri tarafından takip edilebilmekte ve tam izlenebilirlik
          sağlanmaktadır.
        </li>
      </ul>
    )
  };

  coldRooms = {
    title: "Soğuk Hava Depoları",
    info: (
      <ul>
        <li>
          İşletmemizde 7 metre yüksekliğinde, 159 m<sup>2</sup> ila 248 m
          <sup>2</sup>
          arasında değişen alanlara sahip, toplam 10 adet soğuk hava deposu
          bulunmaktadır. Tesisimiz 3.450 ton elma, 2.800 ton üzüm, 3.450 ton
          ayva, 3.450 ton nar ve muhtelif meyve-sebze depolamaya müsaittir
        </li>
        <li>
          Soğuk hava depolarımızın kontrolü tam otomatik sistemlerle
          yapılmaktadır. Uzun süreli depolama yapılabilecek meyveler de
          düşünülerek, soğutma sistemi kontrollü atmosfer ve dinamik kontrollü
          atmosfer sistemine uygun olacak şekilde altyapısı sağlanmıştır.
        </li>
      </ul>
    )
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = type => {
    this.setState({ show: true, modalContent: type });
  };

  toggleFruit = fruit => {
    this.setState({ fruit });
  };

  render() {
    const totalCapacity =
      this.state.fruit === "grapes" ? "2830 Ton" : "3450 Ton";

    return (
      <React.Fragment>
        <Crd
          heading="Hizmetlerimiz"
          classes="services"
          background={background}
          small={12}
          medium={12}
          large={10}
          xlarge={10}
        >
          <Row className="row srv">
            <Col
              xs={8}
              sm={6}
              md={5}
              xl={3}
              className="service order-sm-3 order-xl-1"
            >
              <Image
                src={cherrypackaging}
                fluid
                className="srv-icon"
                alt="cherry-packaging-icon"
              />
              <h3>Kiraz Paketleme</h3>
              <p className="srv-text">
                İşletmemizde kiraz tasnifi için Avustralya menşeli GP Graders
                firmasının optik boylayıcı makinesini kullanmaktayız. Bu makine
                ile...
              </p>
              <Button
                type="Button"
                variant="danger"
                onClick={this.handleShow.bind(this, this.cherryPacking)}
              >
                Daha Fazlası
              </Button>
            </Col>

            <Col
              xs={8}
              sm={6}
              md={5}
              xl={3}
              className="service order-sm-4 order-xl-2"
            >
              <Image
                src={freezer}
                fluid
                className="srv-icon"
                alt="freezer-icon"
              />
              <h3>Soğuk Hava Depoları</h3>
              <p className="srv-text">
                İşletmemizde 7 metre yüksekliğinde, 159 m2 ila 248 m2 arasında
                değişen alanlara sahip, toplam 10 adet soğuk hava deposu
                bulunmaktadır...
              </p>
              <Button
                type="Button"
                variant="danger"
                onClick={this.handleShow.bind(this, this.coldRooms)}
              >
                Daha fazlası
              </Button>
            </Col>

            <Col
              xs={8}
              sm={6}
              md={5}
              xl={3}
              className="service order-sm-1 order-xl-3"
            >
              <Image
                src={truckScale}
                fluid
                className="srv-icon"
                alt="truck-scale-icon"
              />
              <h3> Tır Kantarı</h3>
              <p className="srv-text">
                Tesisimizde bir adet 60 tonluk 3x16 m boyutlarında yüksek
                çekerli tam elektronik Esit marka HIPPO-A model kantarımız
                bulunmaktadır.
              </p>
            </Col>

            <Col
              xs={8}
              sm={6}
              md={5}
              xl={3}
              className="service order-sm-2 order-xl-4 last-service "
            >
              <Image
                src={assemblyLine}
                fluid
                className="srv-icon"
                alt="assembly-line-icon"
              />
              <h3>Yaş Meyve Paketleme Bandı</h3>
              <p className="srv-text">
                3 kat konveyör bant sistemi, 1 kat boş kasa makaralı sistem ve
                aydınlatma sistemi ile 15m paslanmaz meyve paketleme hattımız
                bulunmaktadır.
              </p>
            </Col>
            <Col xs={12} className="d-block d-xl-flex order-5">
              <div className="room-capacity">
                <div className="depo-toggle">
                  <h4>Depolama Kapasiteleri</h4>
                  <div className="fruit-buttons">
                    <wrapper>
                      <div
                        className="fruit-wrapper"
                        onClick={this.toggleFruit.bind(this, "apple")}
                        // style={{
                        //   boxShadow:
                        //     this.state.fruit == "apple" &&
                        //     "0 2px 4px 0 rgba(0, 0, 0, 0.5)"
                        // }}
                      >
                        <AppleIcon fruit={this.state.fruit} />
                      </div>
                      {this.state.fruit == "apple" && <h6>Elma</h6>}
                    </wrapper>
                    <wrapper>
                      <div
                        className="fruit-wrapper"
                        onClick={this.toggleFruit.bind(this, "grapes")}
                        // style={{
                        //   boxShadow:
                        //     this.state.fruit == "grapes" &&
                        //     "0 2px 4px 0 rgba(0, 0, 0, 0.5)"
                        // }}
                      >
                        <GrapesIcon fruit={this.state.fruit} />
                      </div>
                      {this.state.fruit == "grapes" && <h6>Üzüm</h6>}
                    </wrapper>
                    <wrapper>
                      <div
                        className="fruit-wrapper"
                        onClick={this.toggleFruit.bind(this, "pom")}
                        // style={{
                        //   boxShadow:
                        //     this.state.fruit == "pom" &&
                        //     "0 2px 4px 0 rgba(0, 0, 0, 0.5)"
                        // }}
                      >
                        <PomIcon fruit={this.state.fruit} />
                      </div>
                      {this.state.fruit == "pom" && <h6>Nar</h6>}
                    </wrapper>
                    <wrapper>
                      <div
                        className="fruit-wrapper"
                        onClick={this.toggleFruit.bind(this, "quince")}
                        // style={{
                        //   boxShadow:
                        //     this.state.fruit == "quince" &&
                        //     "0 2px 4px 0 rgba(0, 0, 0, 0.5)"
                        // }}
                      >
                        <QuinceIcon fruit={this.state.fruit} />
                      </div>
                      {this.state.fruit == "quince" && <h6>Ayva</h6>}
                    </wrapper>
                  </div>
                </div>
                <div className="table-wrapper">
                  <CapacityTable fruit={this.state.fruit} />
                  <p className="toplam">
                    Toplam:
                    <span className="toplam-amount">{totalCapacity}</span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Crd>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          className="service-modal"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.modalContent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.modalContent.info}</Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Hizmetlerimiz;
