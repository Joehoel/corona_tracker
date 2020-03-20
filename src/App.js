import React from "react";
import { Stats, Global } from "./components/elements/";
import Map from "./components/Map";
import Spinner from "./components/Spinner";
import useFetch from "./utils/useFetch";

import { Card, CardText, CardBody, Row, Col, CardHeader } from "reactstrap";

function App() {
  const { data, error, loading } = useFetch(
    "https://coronavirus-tracker-api.herokuapp.com/all"
  );

  if (error) console.log(error);
  if (loading) return <Spinner />;

  const { confirmed, deaths, recovered } = data.latest;
  const { last_updated } = data.deaths;

  const last = `${new Date(last_updated).toLocaleDateString()} ${new Date(
    last_updated
  ).toLocaleTimeString()}`;

  return (
    <>
      <Global />
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
      <Map stats={data} />
    </>
  );
}

export default App;
