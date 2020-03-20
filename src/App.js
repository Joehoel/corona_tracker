import React from "react";
import { Global } from "./components/elements/";
import Map from "./components/Map";
import Spinner from "./components/Spinner";
import useFetch from "./utils/useFetch";
import Information from "./components/Information";

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
      <Information
        last={last}
        confirmed={confirmed}
        deaths={deaths}
        recovered={recovered}
      />
      <Map stats={data} />
    </>
  );
}

export default App;
