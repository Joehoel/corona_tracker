import "normalize.css";
import React from "react";
import Card from "./components/Card";
import { Flex, Global } from "./components/elements/";
import Map from "./components/Map";
import Spinner from "./components/Spinner";
import useStats from "./utils/useStats";
import L from "leaflet";

function App() {
  const stats = useStats();
  if (!stats) return <Spinner />;
  const { confirmed, deaths, recovered } = stats.latest;

  return (
    <>
      <Global />
      <Flex>
        <Card title="Confirmed" value={confirmed} />
        <Card title="Deaths" value={deaths} />
        <Card title="Recovered" value={recovered} />
        {/* <Card title="Confirmed" value={confirmed} /> */}
      </Flex>
      <Map />
    </>
  );
}

export default App;
