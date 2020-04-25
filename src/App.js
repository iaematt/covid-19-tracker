import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import axios from "axios";

import {
  BarChart,
  Cards,
  Footer,
  Header,
  LineChart,
  PizzaChart,
} from "./components";
import GlobalStyle from "./styles/global";
import { apiZeit, apiGitHub } from "./services/api";

function App() {
  const [brasil, setBrasil] = useState([]);
  const [global, setGlobal] = useState([]);
  const [daily, setDaily] = useState([]);
  const [lastDay, setLastDay] = useState([]);

  useEffect(() => {
    async function loadCovid() {
      const {
        data: {
          data: { cases, confirmed, deaths, recovered, updated_at },
        },
      } = await apiZeit.get("/api/report/v1/brazil");

      const fetch = {
        cases,
        confirmed,
        deaths,
        recovered,
        lastUpdate: updated_at,
      };

      setBrasil(fetch);
    }

    async function loadGlobal() {
      const {
        data: { confirmed, recovered, deaths },
      } = await axios.get("https://covid19.mathdro.id/api");

      const fetch = {
        confirmed: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value,
        cases: confirmed.value - recovered.value - deaths.value,
      };

      setGlobal(fetch);
    }

    async function loadDaily() {
      const {
        data: { Brazil },
      } = await apiGitHub.get("/covid19/timeseries.json");

      setDaily(Brazil.slice(-20, Brazil.lenght));

      const [{ confirmed, recovered, deaths }] = Brazil.slice(
        -2,
        Brazil.lenght
      );

      const mount = {
        confirmed,
        recovered,
        deaths,
      };

      setLastDay(mount);
    }

    loadDaily();
    loadGlobal();
    loadCovid();
  }, []);

  ReactGA.initialize("UA-68805727-2");
  ReactGA.pageview("/covid/");

  return (
    <>
      <GlobalStyle />

      <Header />

      <Cards brasil={brasil} global={global} lastDay={lastDay} />

      <LineChart daily={daily} />
      <BarChart />
      <PizzaChart brasil={brasil} global={global} />

      <Footer />
    </>
  );
}

export default App;
