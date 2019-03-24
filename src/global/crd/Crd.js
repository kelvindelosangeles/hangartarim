import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Crd extends Component {
  render() {
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
              <h2 className='crd-heading'>
                {this.props.heading}
                <span className='crd-heading-accent'>
                  {this.props.accentHeading}
                </span>
              </h2>
            </Col>
          </Row>
          {this.props.children}
        </Col>
      </Row>
    );
  }
}
export default Crd;
