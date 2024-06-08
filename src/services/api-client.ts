import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // rawg api key, non è buona pratica
    // metterla in chiaro così, solo a scopi educativi
    key: "7e8943685b3d4fbc8baa3828258a65f8",
  },
});
