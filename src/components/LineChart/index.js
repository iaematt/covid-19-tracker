import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import { apiGitHub } from "../../services/api";

import { Container } from "./styles";

function LineChart() {
  const [daily, setDaily] = useState([]);

  const date = daily.map(({ date }) => date);
  const confirmed = daily.map(({ confirmed }) => confirmed);
  const deaths = daily.map(({ deaths }) => deaths);
  const recovered = daily.map(({ recovered }) => recovered);

  useEffect(() => {
    async function loadDaily() {
      const {
        data: { Brazil },
      } = await apiGitHub.get("/covid19/timeseries.json");

      setDaily(Brazil.slice(-20, Brazil.lenght));
    }

    loadDaily();
  }, []);

  return (
    <Container>
      <Line
        data={{
          labels: date,
          datasets: [
            {
              data: confirmed,
              label: "Infectados",
              borderColor: "#FFE366",
              fill: true,
            },
            {
              data: deaths,
              label: "Mortes",
              borderColor: "#c0392b",
              fill: true,
            },
            {
              data: recovered,
              label: "Curados",
              borderColor: "#27ae60",
              fill: true,
            },
          ],
        }}
        options={{
          title: { display: true, text: "Casos acumulados" },
        }}
      />
    </Container>
  );
}
export { LineChart };
