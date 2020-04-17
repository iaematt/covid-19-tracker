import axios from "axios";

const apiZeit = axios.create({
  baseURL: "https://covid19-brazil-api.now.sh",
});

const apiGitHub = axios.create({
  baseURL: "https://pomber.github.io/",
});

export { apiZeit, apiGitHub };
