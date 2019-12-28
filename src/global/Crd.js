import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Crd extends Component {
  render(props) {
    return (
      <Row
        className={`crd-container ${this.props.classes}`}
        noGutters
        style={{ backgroundImage: `url(${this.props.background})` }}>
        <Col
          xs={this.props.xsmall}
          sm={this.props.small}
          md={this.props.medium}
          lg={this.props.large}
          xl={this.props.xlarge}
          className='crd'>
          <Row>
            <Col xs={12}>
              <Slide duration={1500} top>
                <h2 className='crd-heading'>{this.props.heading}</h2>
              </Slide>
            </Col>
          </Row>
          <Fade delay={500} duration={1000}>
            {this.props.children}
          </Fade>
        </Col>
      </Row>
    );
  }
}
export default Crd;

{
  /* <Row>
<Col xs={12}>
  <Fade delay={500} duration={1000}>
    <Slide delaye={1000} duration={1000} bottom>
      <h2 className='crd-heading'>{this.props.heading}</h2>
    </Slide>
  </Fade>
</Col>
</Row>
<Fade duration={2000}>{this.props.children}</Fade>
</Col>
</Row> */
}
