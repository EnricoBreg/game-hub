import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // rawg api key, non è buona pratica
    // metterla in chiaro così, solo a scopi educativi
    key: "932d9af763714c16831f7933e6a05313",
  },
});
