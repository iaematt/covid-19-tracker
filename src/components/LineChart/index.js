import React from "react";
import { Line } from "react-chartjs-2";

import { Container } from "./styles";

function LineChart({ daily }) {
  const date = daily.map(({ date }) => date);
  const confirmed = daily.map(({ confirmed }) => confirmed);
  const deaths = daily.map(({ deaths }) => deaths);
  const recovered = daily.map(({ recovered }) => recovered);

  return (
    <Container>
      <Line
        height={150}
        data={{
          labels: date,
          datasets: [
            {
              data: confirmed,
              label: "Infectados",
              borderColor: "#FFE366",
              fill: true,
              pointBackgroundColor: "#FFE366",
              borderWidth: 2,
            },
            {
              data: deaths,
              label: "Mortes",
              borderColor: "#c0392b",
              fill: true,
              pointBackgroundColor: "#c0392b",
              borderWidth: 2,
            },
            {
              data: recovered,
              label: "Curados",
              borderColor: "#27ae60",
              pointBackgroundColor: "#27ae60",
              fill: true,
              borderWidth: 2,
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: "CASOS ACUMULADOS NO BRASIL",
            fontColor: "#eeeeee",
            fontSize: 15,
          },
          animation: {
            easing: "linear",
            duration: 1000,
          },
          legend: {
            labels: {
              boxWidth: 20,
              fontColor: "#999999",
              padding: 10,
            },
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: "#222222",
                  zeroLineColor: "#111111",
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  color: "#222222",
                  zeroLineColor: "#111111",
                },
              },
            ],
          },
        }}
      />
    </Container>
  );
}
export { LineChart };
