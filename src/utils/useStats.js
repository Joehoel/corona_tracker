import { useState, useEffect } from "react";

export default function useStats(url) {
  const [stats, setStats] = useState();

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      setStats(data);
    }
    getData();
  }, []);

  return stats;
}
