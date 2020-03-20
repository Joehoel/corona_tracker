import React from "react";
import { Card, CardText, CardBody, Row, Col, CardHeader } from "reactstrap";
import { Stats } from "./elements";

const Information = ({ last, deaths, confirmed, recovered }) => {
  return (
    <div>
      <Card
        style={{ width: "300px" }}
        className="above currently mt-3 ml-3 text-center"
      >
        <CardHeader className="font-weight-bold">
          Displaying: Current Deaths
        </CardHeader>
        <CardBody>
          <CardText>Last updated: {last}</CardText>
        </CardBody>
      </Card>
      <Stats>
        <Row>
          <Col>
            <Card
              style={{ width: "200px" }}
              className="above  mt-3 mr-3 text-center"
            >
              <CardHeader className="font-weight-bold">Deaths</CardHeader>
              <CardBody>
                <CardText>{deaths}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card
              style={{ width: "200px" }}
              className="above  mt-3 mr-3 text-center"
            >
              <CardHeader className="font-weight-bold">Confirmed</CardHeader>
              <CardBody>
                <CardText>{confirmed}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card
              style={{ width: "200px" }}
              className="above  mt-3 mr-3 text-center"
            >
              <CardHeader className="font-weight-bold">Recovered</CardHeader>
              <CardBody>
                <CardText>{recovered}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Stats>
    </div>
  );
};

export default Information;
