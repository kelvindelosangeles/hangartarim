import React, { Component } from 'react';
import axios from 'axios';

import './iletisim.css';
import Crd from '../../global/crd/Crd';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import background from '../../assets/images/backgrounds/4.jpeg';
import Button from 'react-bootstrap/Button';

const API_PATH = './api/contact/index.php';

class Iletisim extends Component {
  state = {
    name: '',
    company: '',
    email: '',
    tel: '',
    message: '',
    error: null,
    mailSent: false
  };

  handleFormSubmit(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: API_PATH,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then((result) => {
        this.setState({
          mailSent: result.data.sent
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  }

  render() {
    return (
      <Crd
        heading='İletişim '
        accentHeading='Formu'
        classes='contact'
        background={background}
        small={10}
        medium={10}
        large={11}
        xlarge={10}>
        <div>
          <Row className='crd-subheading-container' noGutters>
            <Col xs={12} md={10}>
              <p className='crd-subheading'>
                Tesisimiz Mayıs 2019'da hizmete başlayacaktır. Ön talepleriniz
                için aşağıdaki adreslerimizden iletişime geçebilirsiniz.
              </p>
            </Col>
          </Row>
          <Row className='flex-column' noGutters>
            <Row className='justify-content-center justify-content-lg-between'>
              <Col className='text-center' xs={12} />
              <Col className='card-form' xs={12} lg={6}>
                <form action='#' id='contact-form'>
                  <div className='form-row '>
                    <Col xs={10} md={6} lg={6}>
                      <div className='form-group contact-form-group'>
                        <label className='form-label' htmlFor='name'>
                          İsİm
                        </label>
                        <input
                          className='form-control'
                          type='text'
                          name='name'
                          required=''
                          autoComplete='on'
                          value={this.state.name}
                          onChange={(e) => {
                            this.setState({ name: e.target.value });
                          }}
                        />
                      </div>
                    </Col>
                    <Col xs={10} md={6} lg={6}>
                      <div className='form-group contact-form-group'>
                        <label className='form-label' htmlFor='company'>
                          Şİrket
                        </label>
                        <input
                          className='form-control'
                          type='text'
                          name='company'
                          autoComplete='on'
                          value={this.state.company}
                          onChange={(e) => {
                            this.setState({ company: e.target.value });
                          }}
                        />
                      </div>
                    </Col>
                  </div>
                  <div className='form-row'>
                    <Col xs={10} md={6} lg={6}>
                      <div className='form-group contact-form-group'>
                        <label className='form-label' htmlFor='email'>
                          E-posta
                        </label>
                        <input
                          className='form-control'
                          type='email'
                          name='email'
                          inputMode='email'
                          required=''
                          value={this.state.email}
                          onChange={(e) => {
                            this.setState({ email: e.target.value });
                          }}
                        />
                      </div>
                    </Col>
                    <Col xs={10} md={6} lg={6}>
                      <div className='form-group contact-form-group'>
                        <label className='form-label' htmlFor='tel'>
                          Telefon
                        </label>
                        <input
                          className='form-control'
                          type='text'
                          name='tel'
                          inputMode='tel'
                          value={this.state.tel}
                          onChange={(e) => {
                            this.setState({ tel: e.target.value });
                          }}
                        />
                      </div>
                    </Col>
                  </div>
                  <div className='form-row '>
                    <Col xs={10} md={12} lg={12}>
                      <div className='form-group contact-form-group'>
                        <label className='form-label' htmlFor='email'>
                          Mesaj
                        </label>
                        <textarea
                          className='form-control'
                          name='message'
                          style={{ maxWidth: '100%' }}
                          rows={3}
                          value={this.state.message}
                          onChange={(e) => {
                            this.setState({ message: e.target.value });
                          }}
                        />
                      </div>
                    </Col>
                  </div>
                  <div className='form-row '>
                    <Col xs={10} lg={12}>
                      <Button
                        className='btn btn-danger btn-block btn-lg form-btn'
                        type='submit'
                        onClick={(e) => {
                          this.handleFormSubmit(e);
                        }}>
                        Gönder
                      </Button>
                    </Col>
                  </div>
                  <div>
                    {this.state.mailSent && (
                      <div>Thank you for contcting us.</div>
                    )}
                  </div>
                </form>
              </Col>
              <Col xs={10} lg={6}>
                <iframe
                  title='Google Map'
                  allowFullScreen
                  frameBorder={0}
                  width='100%'
                  height='100%'
                  src='https://www.google.com/maps/embed/v1/place?key=AIzaSyDzNevH8uRtFHdrgnj_qD59FwCXWjC5DSA&q=Salihli%2FManisa&zoom=11'
                  className='contact-map'
                />
              </Col>
            </Row>
          </Row>
        </div>
      </Crd>
    );
  }
}

export default Iletisim;
