import React, { useEffect, useState } from "react";

import { BarChart, Cards, Footer, Header, LineChart } from "./components";
import GlobalStyle from "./styles/global";
import { apiZeit } from "./services/api";

function App() {
  const [covid, setCovid] = useState([]);

  useEffect(() => {
    async function loadCovid() {
      const {
        data: {
          data: { confirmed, deaths, recovered, updated_at },
        },
      } = await apiZeit.get("/api/report/v1/brazil");

      const fetchData = {
        confirmed,
        deaths,
        recovered,
        lastUpdate: updated_at,
      };

      setCovid(fetchData);
    }

    loadCovid();
  }, []);

  return (
    <>
      <GlobalStyle />

      <Header />

      <Cards data={covid} />
      <LineChart />
      <BarChart />

      <Footer />
    </>
  );
}

export default App;
