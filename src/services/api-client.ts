import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7e8943685b3d4fbc8baa3828258a65f8", // rawg api key
  },
});
