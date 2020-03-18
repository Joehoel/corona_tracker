import "normalize.css";
import React from "react";
import Card from "./components/Card";
import { Stats, Global, Currently } from "./components/elements/";
import Map from "./components/Map";
import Spinner from "./components/Spinner";
import useStats from "./utils/useStats";

function App() {
  const stats = useStats("https://coronavirus-tracker-api.herokuapp.com/all");
  if (!stats) return <Spinner />;
  const { confirmed, deaths, recovered } = stats.latest;
  const { last_updated } = stats.deaths;

  const last = `${new Date(last_updated).toLocaleDateString()} ${new Date(
    last_updated
  ).toLocaleTimeString()}`;

  return (
    <>
      <Global />
      <Currently>
        <h3>Displaying: Current Deaths</h3>
        <p>Last updated: {last}</p>
      </Currently>
      <Stats>
        <Card title="Confirmed" value={confirmed} />
        <Card title="Deaths" value={deaths} />
        <Card title="Recovered" value={recovered} />
      </Stats>
      <Map stats={stats} />
    </>
  );
}

export default App;
