import React from "react";
import CountUp from "react-countup";
import Moment from "react-moment";

import { Container, Card, Header, Content, Footer } from "./styles";

function Cards({ brasil, global, lastDay }) {
  return (
    <Container>
      <Card>
        <Header background="#327CCB">
          <span>Casos</span>
        </Header>

        <Content color="#327CCB">
          <strong>
            Brasil{" "}
            {brasil.confirmed && (
              <>
                {lastDay.confirmed && (
                  <span>
                    +{" "}
                    {Intl.NumberFormat().format(
                      brasil.confirmed - lastDay.confirmed
                    )}
                  </span>
                )}
              </>
            )}
          </strong>
          <h1>
            {brasil.confirmed ? (
              <CountUp
                start={12345}
                end={brasil.confirmed}
                duration={3}
                separator="."
              />
            ) : (
              "00.000"
            )}
          </h1>
          <strong>Mundo</strong>
          <h2>
            {global.confirmed ? (
              <CountUp
                start={1234567}
                end={global.confirmed}
                duration={3}
                separator="."
              />
            ) : (
              "0.000.000"
            )}
          </h2>
        </Content>

        <Footer>
          Atualizado <Moment fromNow>{brasil.lastUpdate}</Moment>
        </Footer>
      </Card>
      <Card>
        <Header background="#27ae60">
          <span>Curados</span>
        </Header>

        <Content color="#27ae60">
          <strong>
            Brasil{" "}
            {brasil.recovered && (
              <>
                {lastDay.recovered && (
                  <span>
                    +{" "}
                    {Intl.NumberFormat().format(
                      brasil.recovered - lastDay.recovered
                    )}
                  </span>
                )}
              </>
            )}
          </strong>
          <h1>
            {brasil.recovered ? (
              <CountUp
                start={12345}
                end={brasil.recovered}
                duration={3}
                separator="."
              />
            ) : (
              "00.000"
            )}
          </h1>
          <strong>Mundo</strong>
          <h2>
            {global.recovered ? (
              <CountUp
                start={123456}
                end={global.recovered}
                duration={3}
                separator="."
              />
            ) : (
              "000.000"
            )}
          </h2>
        </Content>

        <Footer>
          Atualizado <Moment fromNow>{brasil.lastUpdate}</Moment>
        </Footer>
      </Card>
      <Card>
        <Header background="#FF4847">
          <span>Mortes</span>
        </Header>

        <Content color="#FF4847">
          <strong>
            Brasil{" "}
            {brasil.deaths && (
              <>
                {lastDay.deaths && (
                  <span>
                    +{" "}
                    {Intl.NumberFormat().format(brasil.deaths - lastDay.deaths)}
                  </span>
                )}
              </>
            )}
          </strong>
          <h1>
            {brasil.deaths ? (
              <CountUp
                start={1234}
                end={brasil.deaths}
                duration={3}
                separator="."
              />
            ) : (
              "0.000"
            )}
          </h1>
          <strong>Mundo</strong>
          <h2>
            {global.deaths ? (
              <CountUp
                start={123456}
                end={global.deaths}
                duration={3}
                separator="."
              />
            ) : (
              "000.000"
            )}
          </h2>
        </Content>

        <Footer>
          Atualizado <Moment fromNow>{brasil.lastUpdate}</Moment>
        </Footer>
      </Card>
    </Container>
  );
}

export { Cards };
