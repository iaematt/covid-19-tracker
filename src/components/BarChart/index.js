import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

import { apiZeit } from "../../services/api";
import { Container } from "./styles";

function BarChart() {
  const [country, setCountry] = useState([]);

  const uf = country.map(({ uf }) => uf);
  const cases = country.map(({ cases }) => cases);
  const refuses = country.map(({ refuses }) => refuses);
  const deaths = country.map(({ deaths }) => deaths);

  useEffect(() => {
    async function loadCountry() {
      const {
        data: { data },
      } = await apiZeit.get("/api/report/v1");

      setCountry(data);
    }

    loadCountry();
  }, []);

  return (
    <Container>
      <Bar
        data={{
          labels: uf,
          datasets: [
            {
              label: "Mortes",
              data: deaths,
              backgroundColor: "#c0392b",
            },
            {
              label: "Curados",
              data: refuses,
              backgroundColor: "#27ae60",
            },
            {
              label: "Casos",
              data: cases,
              backgroundColor: "#FFE366",
            },
          ],
        }}
        options={{
          scales: {
            xAxes: [
              {
                stacked: true,
              },
            ],
            yAxes: [
              {
                stacked: true,
              },
            ],
          },
          legend: { display: false },
          title: {
            display: true,
            text: "Casos de COVID-19 por estado no Brasil",
          },
        }}
      />
    </Container>
  );
}

export { BarChart };
