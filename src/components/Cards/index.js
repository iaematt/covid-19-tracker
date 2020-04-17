import React from "react";
import CountUp from "react-countup";
import Moment from "react-moment";

import { Container, Card, Title, Numbers, Info } from "./styles";

function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  return (
    <Container>
      <Card>
        <Title color="#FFE366">Infectados</Title>
        <Numbers color="#FFE366">
          {confirmed && (
            <CountUp start={0} end={confirmed} duration={3} separator="." />
          )}
        </Numbers>

        <Info>
          Atualizado <Moment fromNow>{lastUpdate}</Moment> <br />
          Total de casos ativos de COVID-19
        </Info>
      </Card>

      <Card>
        <Title color="#27ae60">Curados</Title>
        <Numbers color="#27ae60">
          {recovered && (
            <CountUp start={0} end={recovered} duration={3} separator="." />
          )}
        </Numbers>
        <Info>
          Atualizado <Moment fromNow>{lastUpdate}</Moment> <br />
          Total de casos curados de COVID-19
        </Info>
      </Card>
      <Card>
        <Title color="#c0392b">Mortes</Title>
        <Numbers color="#c0392b">
          {deaths && (
            <CountUp start={0} end={deaths} duration={3} separator="." />
          )}
        </Numbers>
        <Info>
          Atualizado <Moment fromNow>{lastUpdate}</Moment> <br />
          Total de mortes causadas pelo COVID-19
        </Info>
      </Card>
    </Container>
  );
}

export { Cards };
