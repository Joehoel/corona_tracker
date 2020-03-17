import { useState, useEffect } from "react";

export default function useStats() {
  const [stats, setStats] = useState();

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://coronavirus-tracker-api.herokuapp.com/all"
      );
      const data = await res.json();
      setStats(data);
    }
    getData();
  }, []);

  return stats;
}
