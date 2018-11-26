import React, { Component } from "react";
import { Image, Grid, Row, Col } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Home</h1>
          <p>A simple restaurant grocery needs app</p>
        </div>

        <Grid>
          <Row>
            <Col>
              <Image src="../images/mainPage.JPG" alt='aaa'/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
