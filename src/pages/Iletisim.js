import React, { Component } from 'react';

import Crd from '../global/Crd';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import background from '../assets/images/backgrounds/4.jpeg';
import Button from 'react-bootstrap/Button';

import $ from 'jquery';
const API_PATH = process.env.PUBLIC_URL + '/api/contact/mailer.php';

class Iletisim extends Component {
  state = {
    inputName: '',
    inputCompany: '',
    inputEmail: '',
    inputTel: '',
    inputMessage: '',
    isErrorShown: false,
    isFormValid: false,
    isFormSubmitted: false
  };

  // sets input to state
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    // Test
    if (
      this.state.inputEmail.length > 0 &&
      this.state.inputName.length > 0 &&
      this.state.inputTel.length > 0
    ) {
      this.setState({
        isFormValid: true,
        isErrorShown: false,
        isFormSubmitted: true
      });

      // Send the form with AJAX
      $.ajax({
        data: this.state,
        type: 'POST',
        url: API_PATH,
        success: function(data) {
          console.info(data);
        },
        error: function(xhr, status, err) {
          console.error(status, err.toString());
        }
      });

      // Reset state after sending the form
      this.setState({
        inputEmail: '',
        inputMessage: '',
        inputCompany: '',
        inputName: '',
        inputTel: '',
        isErrorShown: false,
        isFormValid: false
      });

      // Remove successfull email sent Notification
      setTimeout(() => {
        this.setState({ isFormSubmitted: false });
      }, 5000);
    } else {
      // Show error message
      this.setState({
        isErrorShown: true
      });
    }
  };

  render() {
    return (
      <Crd
        heading='İletişim Formu'
        classes='contact'
        background={background}
        small={10}
        medium={10}
        large={11}
        xlarge={10}>
        <div>
          <Row className='crd-subheading-container' noGutters>
            {/* <Col xs={12} md={10} xl={6}>
              <p className='crd-subheading'>
                Tesisimiz Mayıs 2019'da hizmete başlayacaktır. Ön talepleriniz
                için aşağıdaki adreslerimizden iletişime geçebilirsiniz.
              </p>
            </Col> */}
          </Row>
          <Row className='flex-column' noGutters>
            <Row className='justify-content-center justify-content-lg-between'>
              <Col className='text-center' xs={12} />
              <Col className='card-form' xs={12} lg={6}>
                <form action='' id='contact-form'>
                  <div className='form-row '>
                    <Col xs={10} md={6} lg={6}>
                      <div className='form-group contact-form-group'>
                        <label className='form-label' htmlFor='name'>
                          İsİm
                        </label>
                        <input
                          className='form-control'
                          type='text'
                          required=''
                          autoComplete='on'
                          name='inputName'
                          value={this.state.inputName}
                          onChange={this.handleInput}
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
                          autoComplete='on'
                          name='inputCompany'
                          value={this.state.inputCompany}
                          onChange={this.handleInput}
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
                          inputMode='email'
                          required=''
                          name='inputEmail'
                          value={this.state.inputEmail}
                          onChange={this.handleInput}
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
                          inputMode='tel'
                          name='inputTel'
                          value={this.state.inputTel}
                          onChange={this.handleInput}
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
                          style={{ maxWidth: '100%' }}
                          rows={3}
                          name='inputMessage'
                          value={this.state.inputMessage}
                          onChange={this.handleInput}
                        />
                      </div>
                    </Col>
                  </div>
                  <div className='form-row '>
                    <Col xs={10} md={12} lg={12}>
                      {this.state.isFormSubmitted && (
                        <fieldset>
                          <p>
                            Tesekkür ederiz. En kısa zamanda iletişime
                            geçecegiz.{' '}
                          </p>
                        </fieldset>
                      )}

                      {this.state.isErrorShown && (
                        <fieldset>
                          <p>Lütfen tüm alanları doldurunuz.</p>
                        </fieldset>
                      )}
                    </Col>
                  </div>

                  <div className='form-row '>
                    <Col xs={10} lg={12}>
                      <Button
                        className='btn btn-danger btn-block btn-lg form-btn'
                        type='submit'
                        onClick={this.handleFormSubmit}>
                        Gönder
                      </Button>
                    </Col>
                  </div>
                </form>
              </Col>
              <Col xs={10} lg={6}>
                <iframe
                  title='googleMap'
                  allowFullScreen
                  frameBorder={0}
                  width='100%'
                  height='100%'
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3120.4867541504586!2d28.3383184!3d38.5455977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b869bab4893acd%3A0xbafee093048d37e7!2sHangar+Tar%C4%B1m!5e0!3m2!1sen!2str!4v1555343319824!5m2!1sen!2str'
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
