import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Container, Content } from "./styles";

function PizzaChart({ brasil, global }) {
  return (
    <Container>
      <Content>
        <Doughnut
          width={365}
          height={300}
          data={{
            labels: ["Ativos", "Curados", "Mortes"],
            datasets: [
              {
                data: [brasil.cases, brasil.recovered, brasil.deaths],
                backgroundColor: ["#FFE366", "#27ae60", "#c0392b"],
                borderWidth: 2,
                borderColor: "#333333",
              },
            ],
          }}
          options={{
            animation: {
              animateRotate: true,
            },
            title: {
              display: true,
              text: "CORONAVÍRUS NO BRASIL",
              fontSize: 15,
              fontColor: "#eeeeee",
            },
            legend: {
              labels: {
                boxWidth: 20,
                fontColor: "#999999",
                padding: 10,
              },
            },
            cutoutPercentage: 60,
          }}
        />
      </Content>
      <Content>
        <Doughnut
          width={365}
          height={300}
          data={{
            labels: ["Ativos", "Curados", "Mortes"],
            datasets: [
              {
                data: [global.cases, global.recovered, global.deaths],
                backgroundColor: ["#FFE366", "#27ae60", "#c0392b"],
                borderWidth: 2,
                borderColor: "#333333",
              },
            ],
          }}
          options={{
            animation: {
              animateRotate: true,
            },
            title: {
              display: true,
              text: "CORONAVÍRUS NO MUNDO",
              fontSize: 15,
              fontColor: "#eeeeee",
            },
            legend: {
              labels: {
                boxWidth: 20,
                fontColor: "#999999",
                padding: 10,
              },
            },
            cutoutPercentage: 60,
          }}
        />
      </Content>
    </Container>
  );
}

export { PizzaChart };
